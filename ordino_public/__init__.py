##########################################################
# Copyright (c) 2018 datavisyn GmbH, http://datavisyn.io
#
# This file is property of datavisyn.
# Code and any other files associated with this project
# may not be copied and/or distributed without permission.
#
# Proprietary and confidential. No warranty.
#
##########################################################


def phovea(registry):
  """
  register extension points
  :param registry:
  """
  # generator-phovea:begin

  # generator-phovea:end
  pass


def phovea_config():
  """
  :return: file pointer to config file
  """
  from os import path
  here = path.abspath(path.dirname(__file__))
  config_file = path.join(here, 'config.json')
  return config_file if path.exists(config_file) else None
