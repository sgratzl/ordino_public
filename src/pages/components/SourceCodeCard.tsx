

import {useAsync} from 'ordino';
import {AppMetaDataUtils} from 'phovea_ui';
import React from 'react';

export function SourceCodeCard() {
  const loadMetaData = React.useMemo(() => () => AppMetaDataUtils.getMetaData(), []);
  const {status, value} = useAsync(loadMetaData);

  return (
    <>
      <div className="card shadow-sm p-2">
        <div className="card-body">
          <p className="card-text">
            The source code of Ordino is available under the Mozilla Public
            License (MPL) at GitHub.
          </p>
          <p className="card-text">
            This application is part of Phovea, a platform for developing
            web-based visualization applications. For tutorials, API docs, and
            more information about the build and deployment process, see the
            documentation page.
          </p>
          <p className="card-text"><b>Version: </b> {(status === 'success') ? value.version : 'Fetching current version ...'}</p>
        </div>
      </div>
    </>
  );
}
