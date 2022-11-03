import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import ReactUpload from './pages/react-upload/ReactUpload.page';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import StateXUpload from './pages/xstate-upload/xStateUpload.page';

ReactDOM.render(
  <React.StrictMode>
    <div className='m-0 p-0 w-screen h-screen'>
      <Router>
        <Routes>
          <Route path='/react-upload' element={<ReactUpload />} />
          <Route path='/xstate-upload' element={<StateXUpload />} />
        </Routes>
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
