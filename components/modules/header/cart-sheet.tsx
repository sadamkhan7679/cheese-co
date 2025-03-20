"use client";

import { useState } from "react";
import Image from "next/image";
import { CirclePlus, Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type CartItem = {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  quantity: number;
  image: string;
  size?: string;
};

export default function CartSheet() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Kaamps Honey and Truffle Gouda Cheese",
      price: 8.0,
      originalPrice: 10.0,
      quantity: 2,
      image: "/images/home/products/cheese.webp",
      size: "100kg",
    },
    {
      id: "2",
      name: "Fayard Le Lyonnais Saucisson Sec - Case 12 x 100g",
      price: 85.99,
      originalPrice: 95.99,
      quantity: 1,
      image: "/images/home/products/cheese.webp",
    },
    {
      id: "3",
      name: "Truffle Honey",
      price: 9.99,
      originalPrice: 9.99,
      quantity: 1,
      image: "/images/home/products/cheese.webp",
    },
    {
      id: "4",
      name: "Truffle Honey",
      price: 9.99,
      originalPrice: 9.99,
      quantity: 1,
      image: "/images/home/products/cheese.webp",
    },
  ]);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const cashback = 2.22;
  const progressValue = 75; // 75% of the way to unlock 10% off

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <div className="h-full flex flex-col rounded-lg">
      {/* Header */}
      <div className="border-b pt-4 pb-6 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Delivery to Boca Raton</h2>

        {/* Progress to discount */}
        <div className="mt-4">
          <div className="flex items-center mb-2 px-10">
            <span className="mr-2">👉</span>
            <p>Add $2.50 more to unlock 10% off</p>
          </div>
          <Progress value={progressValue} className="h-2 bg-gray-200" />
        </div>
      </div>

      {/* Cart items */}
      <div className="flex-1 overflow-auto">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-xl font-bold">Your Order</h3>
          <span className="font-bold">{cartItems.length} Items</span>
        </div>

        <div className="divide-y">
          {cartItems.map((item) => (
            <div key={item.id} className="p-4 flex">
              <div className="mr-4">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </div>
              <div className="flex-1">
                <div className="flex gap-20">
                  <h4 className="text-base text-dark">{item.name}</h4>
                  <div className="text-right text-xs font-semibold">
                    <div className="text-primary-dark">
                      ${item.price.toFixed(2)}
                    </div>
                    {item.originalPrice > item.price && (
                      <div className="text-muted line-through text-sm">
                        ${item.originalPrice.toFixed(2)}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      {item.size && (
                        <div className="mt-2">
                          <Select defaultValue={item.size}>
                            <SelectTrigger className="w-[120px]">
                              <SelectValue placeholder="Select size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="50kg">50kg</SelectItem>
                              <SelectItem value="100kg">100kg</SelectItem>
                              <SelectItem value="200kg">200kg</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    </div>

                    {item.id === "1" ? (
                      <div>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <Minus className="h-4 w-4" />
                          <span className="sr-only">Decrease</span>
                        </Button>
                        <span className="mx-3 font-semibold text-base text-black">
                          {item.quantity}
                        </span>
                        <Button
                          variant="default"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className="h-4 w-4" />
                          <span className="sr-only">Increase</span>
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-full bg-surface"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove</span>
                        </Button>
                        <span className="mx-3 font-semibold text-base text-black">
                          {item.quantity}
                        </span>
                        <Button
                          variant="default"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className="h-4 w-4" />
                          <span className="sr-only">Increase</span>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t p-4">
        {/* Cashback notice */}
        <div className="bg-success/20 py-4 rounded-md">
          <p className="text-center">
            You will earn <strong>${cashback.toFixed(2)} cashback</strong> on
            this order
          </p>
        </div>

        {/* Coupon */}
        <div className="">
          <Button variant="link" className="justify-start text-grey -px-2">
            <CirclePlus className="mr-2 h-4 w-4" />
            Apply Coupon
          </Button>
        </div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Subtotal</h3>
          <span className="text-lg font-semibold">${subtotal.toFixed(2)}</span>
        </div>
        <Button className="w-full hover:bg-amber-600 h-12 text-lg">
          Go To Checkout
        </Button>
      </div>
    </div>
  );
}
