"use client";

import { Button, Card, CardBody } from "@chakra-ui/react";
import TokenInput from "./TokenInput";


function SwapMenu() {
  return (
    <div className="flex justify-start items-center space-x-2 pb-2">
      <Button variant="link" size="lg">Swap</Button>
      <Button variant="link" size="lg">Limit</Button>
    </div>
  )
}

function TradeInfo() {
  return (
    <div className="pt-4 text-white flex justify-between items-center">
      <div className="flex flex-col space-y-1">
        <p className="text-sm text-gray-400">Transaction Costs</p>
        <p className="text-sm text-gray-400">Route</p>
      </div>
      <div className="flex flex-col space-y-1 text-right">
        <p>~$12.23</p>
        <p>Trade Route</p>
      </div>
    </div>
  );
}

export default function Swapper() {
  return (
    <div className="flex justify-center">
      <div className="w-2/6 h-auto">
        <Card variant="filled" size="lg" className="!bg-slate-800">
          <CardBody>
            <div className="flex flex-col space-y-3">
              <SwapMenu />
              <TokenInput />
              <TokenInput />
              <Button className="w-full" colorScheme="blue">
                Button
              </Button>
            </div>
          </CardBody>
        </Card>
        <TradeInfo />
      </div>
    </div>
  );
}
