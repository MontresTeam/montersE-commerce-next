import React from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

import "../app/globals.css";
import ShoppingWishlist from "@/components/ui/ShoppingWishlist";

export default function Cart() {
  return (
    <div>
      <Navbar />
      <ShoppingWishlist />
      <Footer />
    </div>
  );
}
