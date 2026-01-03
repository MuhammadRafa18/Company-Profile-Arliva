import React, { useState } from "react";
import siteData from "../SideData";
import love from "../assets/love.svg";
import loveon from "../assets/loveon.svg";
import cart from "../assets/cart.svg";
import carton from "../assets/carton.svg";

export const Produk = () => {
  const [isActive, setisActive] = useState("All");
  const [products, setProducts] = useState(siteData.ProdukBestseller);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const increaseQty = () => setQty((q) => q + 1);
  const decreaseQty = () => setQty((q) => (q > 1 ? q - 1 : 1));

  const openToast = (product) => {
    setSelectedProduct(product);
    setQty(1);
  };

  const closeToast = () => {
    setSelectedProduct(null);
  };
  const Bestseller = products.filter(
    (item) => isActive === "All" || item.type === isActive
  );
  const toggleFavorite = (id) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, favorite: !item.favorite } : item
      )
    );
  };

  const toggleCart = (id) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, cart: !item.cart } : item
      )
    );
  };
  const handleBuyWA = () => {
    if (!selectedProduct) return;

    const total = selectedProduct.price * qty;

    const message = `
Halo, saya ingin membeli produk berikut:
Nama: ${selectedProduct.nama}
Harga: Rp ${selectedProduct.price.toLocaleString()}
Jumlah: ${qty}
  `;

    const phoneNumber = "628xxxxxx"; // GANTI DENGAN NOMOR WA KAMU
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <>
      {/* produk */}
      <section className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 space-y-8">
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg sm:text-xl font-semibold">Bestseller</h1>

            {/* FILTER */}
            <div className="mt-3 flex flex-wrap gap-5 text-sm font-medium text-gray-text">
              {["All", "Facewash", "Sunscreen", "Mosturizer", "Serum"].map(
                (type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setisActive(type);
                    }}
                    className={`relative transition ${
                      isActive === type
                        ? "text-black"
                        : "opacity-50 hover:opacity-80"
                    }`}
                  >
                    {type}
                    {isActive === type && (
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-black rounded-full" />
                    )}
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* PRODUCT LIST */}
        <div className="relative">
          <section className="w-full flex gap-5 overflow-x-auto hide-scrollbar pb-2">
            {Bestseller?.map((item) => (
              <div
                key={item.id}
                onClick={() => openToast(item)}
                className="min-w-[260px] bg-bg-card rounded-2xl p-5 space-y-4 cursor-pointer
             transition hover:shadow-xl"
              >
                {/* ACTION */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="flex justify-between"
                >
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className="p-2 bg-white rounded-full shadow hover:scale-105 transition"
                  >
                    <img src={item.favorite ? loveon : love} className="w-4" />
                  </button>
                  <button
                    onClick={() => toggleCart(item.id)}
                    className="p-2 bg-white rounded-full shadow hover:scale-105 transition"
                  >
                    <img src={item.cart ? carton : cart} className="w-4" />
                  </button>
                </div>

                {/* IMAGE */}
                <div className="h-32 flex items-center justify-center">
                  <img
                    src={item.gambar}
                    className="max-h-full object-contain"
                  />
                </div>

                {/* SIZE */}
                <div className="flex justify-center">
                  <span className="inline-block  text-xs px-2 py-0.5 border rounded-full text-gray-text">
                    {item.size}
                  </span>
                </div>

                {/* INFO */}
                <div className="space-y-1">
                  <p className="text-sm font-medium">{item.nama}</p>
                  <div className="flex justify-between">
                    <p className="text-sm font-semibold">
                      {item.price.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-text">Stock: {item.stok}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-end sm:items-center justify-center"
          onClick={closeToast}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full sm:max-w-3xl rounded-t-2xl sm:rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slideUp"
          >
            {/* LEFT — IMAGE */}
            <div className="flex items-center justify-center bg-bg-card rounded-xl p-6">
              <img
                src={selectedProduct.gambar}
                alt={selectedProduct.nama}
                className="max-h-64 object-contain"
              />
            </div>

            {/* RIGHT — INFO */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">{selectedProduct.nama}</h3>
              <p className="text-sm text-gray-text">
                {selectedProduct.deskripsi ||
                  "Deskripsi produk belum tersedia."}
              </p>

              <p className="text-base font-semibold">
                {selectedProduct.price.toLocaleString()}
              </p>

              {/* QUANTITY */}
              <div className="flex items-center gap-4">
                <button
                  onClick={decreaseQty}
                  className="w-8 h-8 rounded-full border text-lg"
                >
                  −
                </button>
                <span className="font-medium">{qty}</span>
                <button
                  onClick={increaseQty}
                  className="w-8 h-8 rounded-full border text-lg"
                >
                  +
                </button>
              </div>

              {/* ACTION */}
              <div className="flex gap-3 pt-2">
                <button
                  onClick={closeToast}
                  className="flex-1 py-2 border rounded-lg text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={handleBuyWA}
                  className="flex-1 py-2 bg-black text-white rounded-lg text-sm"
                >
                  Buy via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
