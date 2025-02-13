import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import BookingPage from './components/BookingPage';
import { RoomProvider } from './context/RoomContext';
import Dashboard from './components/Dashboard';
import Gallery from './components/Gallery';
import Customerdetail from './components/Customerdetail';
import Reviews from './components/Reviews';
import Rooms from './components/Rooms';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Route */}
      <Route path='/' element={<App />} />

      {/* Booking Page Route */}
      <Route 
        path='/bookrooms' 
        element={
          <RoomProvider>
            <BookingPage />
          </RoomProvider>
        } 
      />

      {/* Dashboard Route with Nested Routes */}
      <Route path='/dashboard' element={<Dashboard />}>
        <Route path="gallery" element={<Gallery />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="customers" element={<Customerdetail/>} />
        <Route path="review" element={<Reviews />} />
      </Route>

      {/* Catch-all Route */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
