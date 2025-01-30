import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { AuthProvider } from './context/AuthProvider.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { store } from './app/index.js'
// import { fetchStock } from './Features/Stock/stockSlice.jsx'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
// import { DataProvider } from './context/DataProvider.jsx';

// store.dispatch(fetchStock())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <BrowserRouter>
    <Provider store={store}>
      {/* <DataProvider> */}
           <ToastContainer />  
      {/* <AuthProvider> */}
        <Routes>
          <Route path="/*" element={<App /> }/> 
        </Routes> 
        {/* </AuthProvider> */}
      {/* </DataProvider> */}
      </Provider>
    </BrowserRouter> 
  </React.StrictMode>,
)
