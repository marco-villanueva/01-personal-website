import NavContextProvider from './contexts/navContext/NavContextProvider'
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NavContextProvider>
    <App />
  </NavContextProvider>
);
