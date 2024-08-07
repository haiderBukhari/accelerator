import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MoveToTop from './components/MoveToTop.jsx';
import { Provider } from 'react-redux'
import { Store } from './store/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={Store}>
      <Router>
        <App />
        <MoveToTop />
      </Router>
      <ToastContainer />
    </Provider>
  </>,
)
