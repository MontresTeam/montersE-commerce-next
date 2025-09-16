import React from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ShoppingCart from "../features/cart/ShoppingCart";
import "../app/globals.css";

export default function Cart() {
  return (
    <div>
      <Navbar />
      <ShoppingCart />
      <Footer />
    </div>
  );
}
