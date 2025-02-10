import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar"
import Header from "./components/Header";
import Hero from "./components/Hero"
import Aboutus from "./components/AboutUs";
import Discounts from "./components/Discounts";
import Room from "./components/Room";
import PhotoGallery from "./pages/resturant/PhotoGallery";
import Review from "./components/Review";
import InquiryForm from "./components/InquireForm";
import Footer from "./components/Fotter";

function App() {
  return (
   <>
   <Header/>
   <Navbar/>
   <Hero/>
   <Aboutus/>
   <Discounts/>
   <Room/>
   <PhotoGallery/>
   <Review/>
   <InquiryForm/>
   <Footer/>

   <Outlet/>
   </>
  );
}

export default App;
