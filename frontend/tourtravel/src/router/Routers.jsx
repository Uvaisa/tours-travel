import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Tours from "../pages/Tours";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchResultList from "../pages/SearchResultList";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { TourDetails } from "../pages/TourDetails";
import Thankyou from "../pages/Thankyou";
import Payment from "../Payment/payment ";
import AdminLogin from "../admin/AdminLogin";
import Tourlist from "../admin/tourlist";
import Userlist from "../admin/userlist";
import Bookinglist from "../admin/bookinglist";
import Paymentlist from "../admin/paymentlist";
import WelcomeAdmin from "../admin/welcomeAdmin";
import ImageGalleryMasonry from "../Component/ImageGallery/ImageGalleryMasonry";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<TourDetails />} />
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
        <Route path="/thank-you" element={<Thankyou />} />
        <Route path="/tours/search" element={<SearchResultList />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/gallery" element={<ImageGalleryMasonry />} />

        {/* <Route path="/wadmin" element={<WelcomeAdmin />} /> */}

        <Route path="/paymentlist" element={<ProtectedRoute />}>
          <Route index element={<Paymentlist />} />
        </Route>
        <Route path="/tourlist" element={<ProtectedRoute />}>
          <Route index element={<Tourlist />} />
        </Route>
        <Route path="/bookinglist" element={<ProtectedRoute />}>
          <Route index element={<Bookinglist />} />
        </Route>
        <Route path="/userlist" element={<ProtectedRoute />}>
          <Route index element={<Userlist />} />
        </Route>
        <Route path="/wadmin" element={<ProtectedRoute />}>
          <Route index element={<WelcomeAdmin />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Routers;
