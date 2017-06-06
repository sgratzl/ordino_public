###############################################################################
# Caleydo - Visualization for Molecular Biology - http://caleydo.org
# Copyright (c) The Caleydo Team. All rights reserved.
# Licensed under the new BSD license, available at http://caleydo.org/license
###############################################################################

import phovea_server.security
import logging
import hashlib
import uuid

__author__ = 'Samuel Gratzl'
_log = logging.getLogger(__name__)


def hash_password(password, salt):
  return hashlib.sha512(password + salt).hexdigest()


class FakeUser(phovea_server.security.User):
  def __init__(self, id, password, salt, roles):
    super(FakeUser, self).__init__(id)
    self.name = id
    self._password = password
    self._salt = salt
    self.roles = roles

  @property
  def is_authenticated(self):
    return True

  @property
  def is_active(self):
    return True

  def is_password(self, given):
    given_h = hash_password(given, self._salt)
    return given_h == self._password


def load_users():
  return []


def persist_user(user):
  pass


class FakeStore(object):
  def __init__(self):
    from phovea_server.config import view as configview
    self._config = configview('ordino_public')
    self._users = load_users()

  def logout(self, user):
    if hasattr(user, 'id'):
      del self._logged_in[user.id]

  def load(self, id):
    return next((u for u in self._users if u.id == id), None)

  def load_from_key(self, api_key):
    parts = api_key.split(':')
    if len(parts) != 2:
      return None
    return self.login(parts[0], dict(password=parts[1]))

  def _find_user(self, username, password):
    return next((u for u in self._users if u.id == username and u.is_password(password)), None)

  def login(self, username, extra_fields=None):
    if extra_fields is None:
      extra_fields = {}
    password = extra_fields['password']

    user = next((u for u in self._users if u.id == username), None)
    if user:
      # existing user
      return user if user.is_password(password) else None

    # create a new one on the fly given the new values
    user = self._add_user(username, password)
    return user

  def _add_user(self, username, password):
    salt = uuid.uuid4().hex
    hashed_password = hashlib.sha512(password + salt).hexdigest()
    user = FakeUser(username, hashed_password, salt, [username])
    self._users.add(user)
    persist_user(user)
    return user


def create():
  return FakeStore()
