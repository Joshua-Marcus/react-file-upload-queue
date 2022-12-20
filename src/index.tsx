import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import ReactUpload from './pages/upload/ReactUpload.page';
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <div className='m-0 p-0 w-screen h-screen'>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/upload' />} />
          <Route path='/upload' element={<ReactUpload />} />
        </Routes>
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
