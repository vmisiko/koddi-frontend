import ReactDOM from 'react-dom/client'
import './assets/styles/index.css'
import { RouterProvider } from 'react-router-dom';
import router from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
