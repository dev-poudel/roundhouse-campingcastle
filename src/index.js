import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import BookingPage from './components/BookingPage';
import { RoomProvider } from './context/RoomContext';  // Import the RoomProvider

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />} />
      <Route 
        path='/bookrooms' 
        element={
          <RoomProvider> {/* Ensure RoomProvider is here */}
            <BookingPage />
          </RoomProvider>
        } 
      />
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
