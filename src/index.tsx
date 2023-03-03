import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import UploadScreen from './pages/upload/UploadScreen';
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <div className='m-0 p-0 w-screen h-screen'>
      <Router>
        <Routes>
          <Route path='*' element={<Navigate to='/' replace />} />
          <Route path='/' element={<UploadScreen />} />
        </Routes>
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
