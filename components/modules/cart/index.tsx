"use client";

import { useState } from "react";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { useCartStore } from "@/store/cart";

const Cart = () => {
  const [deliveryLocation] = useState("Boca Raton");
  const { cartItems, removeCartItem, updateCartItemQuantity } = useCartStore();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const cashback = (subtotal * 0.01).toFixed(2);
  const targetAmount = 50;
  const progress = (subtotal / targetAmount) * 100;

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between border-b pb-4">
        <h2 className="text-2xl font-semibold">
          Delivery to {deliveryLocation}
        </h2>
        <button className="hover:bg-gray-100 p-2 rounded-full transition-colors">
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="bg-yellow-50 p-4 my-4 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span>
            👉 Add ${(targetAmount - subtotal).toFixed(2)} more to unlock 10%
            off
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <div className="flex-1 overflow-auto">
        <h3 className="text-xl mb-4">
          Your Order{" "}
          <span className="text-gray-500">{cartItems.length} Items</span>
        </h3>

        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 p-4 bg-white rounded-lg border"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-md object-cover"
              />

              <div className="flex-1">
                <h4 className="font-medium">{item.name}</h4>
                <div className="flex items-center gap-2 mt-2">
                  <select className="border rounded p-1 text-sm bg-white">
                    <option>100kg</option>
                  </select>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        updateCartItemQuantity(item.id, item.quantity - 1)
                      }
                      className="h-8 w-8"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        updateCartItemQuantity(item.id, item.quantity + 1)
                      }
                      className="h-8 w-8"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeCartItem(item.id)}
                    className="h-8 w-8 text-gray-400 hover:text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="text-right">
                <div className="text-orange-500 font-medium">
                  ${item.price.toFixed(2)}
                </div>
                <div className="text-gray-400 text-sm line-through">
                  ${(item.price * 1.2).toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t pt-4 mt-4">
        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <p className="text-green-800">
            You will earn ${cashback} cashback on this order
          </p>
        </div>

        <Button variant="outline" className="w-full mb-4 h-12">
          Apply Coupon
        </Button>

        <div className="flex justify-between mb-4 font-medium">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black h-12 text-base font-medium">
          Go To Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
