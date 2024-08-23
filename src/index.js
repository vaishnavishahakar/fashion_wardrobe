import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./index.css";
import Home from "./views/Home/Home";
import {THEME} from './config/data';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
]);

root.render(
<div style={{backgroundColor: THEME.backgroundColor}}>
  <RouterProvider router={router} />
  </div>
);
