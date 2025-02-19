import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import BookingPage from './pages/resturant/booking/BookingPage';
import { RoomProvider } from './context/RoomContext';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Gallery from './pages/admin/dashboard/Gallery';
import Rooms from './pages/admin/dashboard/Rooms';
import Reviews from './pages/admin/dashboard/Reviews';
import Bookings from './pages/user/Bookings';
import Customerdetail from './pages/admin/dashboard/Customerdetail'
import Notfound from './components/Notfound';
import OfferEditor from './pages/admin/dashboard/OfferEditor';
import Login from './pages/admin/auth/Login';
import Register from './pages/admin/auth/Register';
import PrivateRoute from './pages/admin/auth/PrivateRoute';

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
      <Route path='/booking' element={<Bookings/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      {/* Dashboard Route with Nested Routes */}
      <Route path='/dashboard' element={<PrivateRoute/>}>
        <Route index element={<Dashboard />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="customers" element={<Customerdetail/>} />
        <Route path="review" element={<Reviews />} />
        <Route path="offer" element={<OfferEditor />} />
      </Route>

      {/* Catch-all Route */}
      <Route path="*" element={<Notfound/>} />
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
