import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Aboutus from "./components/AboutUs";
import Discounts from "./components/Discounts";
import Room from "./components/Room"
import PhotoGallery from "./pages/resturant/PhotoGallery";
import Review from "./components/Review";
import InquiryForm from "./components/InquireForm";
import Footer from "./components/Fotter";
import { RoomProvider } from "./context/RoomContext";
import Dashboard from "./pages/dashboard/Dashboard";
import Gallery from "./components/Gallery";
import Rooms from "./components/Rooms";

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
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </RoomProvider>
  );
}

export default App;
