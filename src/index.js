import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Services from './services';
import Home from './home';
import Header from './header';
import Contact from './contact';
import Career from './career';
import Blog from './blog';
import BlogData from './blogdata';
import Error from './error';

const root = ReactDOM.createRoot(document.getElementById('root'));

let allRoutes=createBrowserRouter(
  [
    {
      path : '/',
      element: <Home/>
    },
    {
      path : 'career',
      element: <Career/>
    },
    {
      path : 'contact-us',
      element: <Contact/>
    },
    {
      path : 'blog',
      element: <Blog/>
    },
    {
      path : 'blog/:id',
      element: <BlogData/>
    },
    {
      path : '*',
      element: <Error/>
    },
  ]
)

root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes}/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
