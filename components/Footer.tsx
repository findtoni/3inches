"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full py-8">
      <div className="container">
        <div className="flex justify-between items-center">
          <p className="text-sm text-white">
            © Unoswap, {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}
