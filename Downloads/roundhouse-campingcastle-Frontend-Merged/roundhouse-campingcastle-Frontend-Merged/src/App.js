import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Aboutus from "./components/AboutUs";
import Discounts from "./pages/resturant/offer/Discounts";
import Room from "./pages/resturant/Room"
import PhotoGallery from "./pages/resturant/PhotoGallery";
import Review from "./pages/user/Review";
import InquiryForm from "./pages/user/InquireForm";
import Footer from "./components/Fotter";
import { RoomProvider } from "./context/RoomContext";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Gallery from "./pages/admin/dashboard/Gallery";
import Rooms from "./pages/admin/dashboard/Rooms";
import Notfound from "./components/Notfound";

function App() {
  return (
    <RoomProvider>
      <Routes>
        {/* Main Site */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Navbar />
              <Hero />
              <Aboutus />
              <Discounts />
              <Room />
              <PhotoGallery />
              <Review />
              <InquiryForm />
              <Footer />
            </>
          }
        />

        {/* Dashboard with Nested Routes */}
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="gallery" element={<Gallery />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="customers" element={<InquiryForm />} />
          <Route path="review" element={<Review />} />
        </Route>

        {/* Catch-All Route for 404 */}
        <Route path="*" element={<Notfound/>} />
      </Routes>
    </RoomProvider>
  );
}

export default App;
