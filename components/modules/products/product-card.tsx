import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type ProductProps = {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    origin: string;
    sale?: boolean;
    originalPrice?: number;
    stock?: string;
  };
};

export const ProductCard = ({ product }: ProductProps) => {
  return (
    <div className="group">
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-square overflow-hidden rounded-lg mb-2">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          {/*{product.sale && (*/}
          {/*  <Badge className="absolute top-2 left-2 bg-red-500">Sale</Badge>*/}
          {/*)}*/}
          {product.stock === "low" && (
            <Badge
              variant="outline"
              className="absolute top-4 left-4 bg-white text-red-400"
            >
              Hurry, low in stock!
            </Badge>
          )}
        </div>
      </Link>

      <div>
        <Link href={`/product/${product.id}`}>
          <h3 className="text-xl font-semibold">{product.name}</h3>
        </Link>
        <div className="flex items-center justify-between mt-1">
          <div>
            <div className="flex items-center">
              <span className="text-base font-semibold">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="ml-2 text-sm text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <div className="text-xs text-muted-foreground my-1">
              {["Soft", "Canada"].map((tag) => (
                <span
                  key={tag}
                  className="mr-1 border border-border rounded-lg px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {/*<Button size="icon" variant="ghost" className="h-8 w-8">*/}
          {/*  <ShoppingCart className="h-4 w-4" />*/}
          {/*  <span className="sr-only">Add to cart</span>*/}
          {/*</Button>*/}
        </div>
      </div>
    </div>
  );
};
