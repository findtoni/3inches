"use client"

import { Button } from "@chakra-ui/react";

export default function TokenInput() {
  return (
    <div className="bg-secondary rounded-lg p-3 flex flex-col space-y-1.5">
      <div className="flex justify-between items-center text-gray-400">
        <p>You sell</p>
        <div className="flex justify-between items-center space-x-1">
          <p>Balance: 0</p>
          <span className="p-1 bg-primary text-blue-300 text-xs uppercase font-medium">
            max
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center text-white">
        <p className="text-2xl font-medium">WETH</p>
        <p className="text-2xl font-medium">1.22</p>
      </div>
      <div className="flex justify-between items-center text-gray-400">
        <p>Token Name</p>
        <p>Trade Amount</p>
      </div>
    </div>
  );
}