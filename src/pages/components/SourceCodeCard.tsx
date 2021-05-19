

import {useAsync} from 'ordino';
import {AppMetaDataUtils} from 'phovea_ui';
import React from 'react';

export function SourceCodeCard() {
  const loadMetaData = React.useMemo(() => () => AppMetaDataUtils.getMetaData(), []);
  const {status, value} = useAsync(loadMetaData);

  return (
    <>
      {status === 'success' &&
        <div className="card shadow-sm">
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

            <p className="card-text">{`Version: ${value.version}`}</p>
          </div>
        </div>
      }</>
  );
}
