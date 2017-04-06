import React from 'react';
import ReactDOM from 'react-dom';
import DesignBox from './DesignBox';


ReactDOM.render(
  <DesignBox
    url="http://localhost:3001/api/designs"
    pollInterval={500} />,
  document.getElementById('root')
);
