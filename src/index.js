import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"
import AboutUs from './components/AboutUs';
import ResturantsMenu from './pages/resturant/ResturantsMenu';
import PhotoGallery from './pages/resturant/PhotoGallery';
import Review from './components/Review';
import Offer from './components/Offer';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/menu' element={<ResturantsMenu/>}/>
      <Route path='/gallery' element={<PhotoGallery/>}/>
      <Route path='/review' element={<Review/>}/>
      <Route path='/offer' element={<Offer/>}/>

    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
