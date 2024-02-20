import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import HomePage from './components/Page/HomePage.jsx';
import AboutPage from './components/Page/AboutPage.jsx';
import BlogPage from './components/Page/BlogPage.jsx';
import PortfolioPage from './components/Page/PortfolioPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/about",
    element: <AboutPage></AboutPage>,
  },
  {
    path: "/blog",
    element: <BlogPage></BlogPage>,
  },
  {
    path: "/Portfolio",
    element: <PortfolioPage></PortfolioPage>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
