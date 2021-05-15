import React, { memo } from 'react';
import { Spinner } from 'react-bootstrap';

function Loader() {
  return (
    <div className="loader align-center">
      <Spinner animation="border" variant="primary" />
    </div>
  );
}

export default memo(Loader);
