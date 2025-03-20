import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";

// Load Open Sans as fallback font
export const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

// Cocogoose Classic Font Family
export const cocogoose = localFont({
  variable: "--font-cocogoose",
  display: "swap",
  fallback: ["var(--font-open-sans)", "Open Sans", "system-ui", "sans-serif"],
  preload: true,
  src: [
    {
      path: "../public/fonts/coco/Zetafonts-Cocogoose-Classic-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/coco/Zetafonts-Cocogoose-Classic-Bold-Italic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/coco/Zetafonts-Cocogoose-Classic-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/coco/Zetafonts-Cocogoose-Classic-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/coco/Zetafonts-Cocogoose-Classic-Demo-Regular-Demo.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/coco/Zetafonts-Cocogoose-Classic-Demo-Italic-Demo.ttf",
      weight: "400",
      style: "italic",
    },
  ],
});

// Playfair Display Font Family
export const playfair = localFont({
  variable: "--font-playfair",
  display: "swap",
  fallback: ["var(--font-open-sans)", "Open Sans", "system-ui", "serif"],
  preload: true,
  src: [
    {
      path: "../public/fonts/Playfair_Display/static/PlayfairDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Playfair_Display/static/PlayfairDisplay-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Playfair_Display/static/PlayfairDisplay-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Playfair_Display/static/PlayfairDisplay-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/Playfair_Display/static/PlayfairDisplay-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Playfair_Display/static/PlayfairDisplay-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/Playfair_Display/static/PlayfairDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Playfair_Display/static/PlayfairDisplay-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/Playfair_Display/static/PlayfairDisplay-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Playfair_Display/static/PlayfairDisplay-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/Playfair_Display/static/PlayfairDisplay-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Playfair_Display/static/PlayfairDisplay-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
});

// Variable font option for Playfair Display
export const playfairVariable = localFont({
  variable: "--font-playfair-variable",
  display: "swap",
  fallback: ["var(--font-open-sans)", "Open Sans", "system-ui", "serif"],
  preload: true,
  // src: "../public/fonts/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf",
  src: [
    {
      path: "../public/fonts/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf",
      weight: "400",
      style: "italic",
    },
  ],
});
