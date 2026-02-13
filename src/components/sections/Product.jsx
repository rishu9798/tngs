import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { websiteContent } from "../../data/content";

function Product() {
  const { products } = websiteContent;

  const productEntries = Object.entries(products.items);

  const [activeKey, setActiveKey] = useState("corporate");

  const activeProduct = products.items[activeKey];

  return (
    <section className="min-h-screen py-20 bg-[rgba(210,207,212,1)]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#1e3a5f]">
            {products.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE - PRODUCT LIST */}
          <div className="space-y-6">

            {productEntries.map(([key, item]) => (
              <div
                key={key}
                onMouseEnter={() => setActiveKey(key)}
                className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 
                ${activeKey === key 
                  ? "bg-white shadow-xl border-l-4 border-[#D4AF37]" 
                  : "bg-transparent hover:bg-white/50"
                }`}
              >
                <h3 className="text-2xl font-semibold text-[#1e3a5f]">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {item.tagline}
                </p>
              </div>
            ))}

          </div>

          {/* RIGHT SIDE - ACTIVE CONTENT */}
          <div className="relative min-h-[400px]">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeKey}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl shadow-2xl p-10"
              >
                {/* Title */}
                <h3 className="text-3xl font-bold text-[#1e3a5f] mb-4">
                  {activeProduct.title}
                </h3>

                {/* Tagline */}
                <p className="text-[#D4AF37] font-medium mb-6">
                  {activeProduct.tagline}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {activeProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <span className="text-[#D4AF37]">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* IMAGE */}
                <div className="w-full rounded-xl overflow-hidden bg-white flex items-center justify-center">
            {activeProduct.image ? (
           <img
            src={activeProduct.image}
            alt={activeProduct.title}
             className="w-full h-auto object-contain"
            />
          ) : (
         <div className="h-64 w-full bg-gradient-to-br from-[#1e3a5f] to-[#2c3e50] flex items-center justify-center text-white text-lg font-semibold">
          Image Coming Soon
        </div>
         )}
         </div>



              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Product;
