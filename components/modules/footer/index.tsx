import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { ChevronRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import {
  AppleAppStoreButton,
  GooglePlayButton,
} from "@/components/ui/app-store-button";
import { HeaderLogo } from "@/components/ui/header-logo";
import { InstagramIcon } from "@/icon/social/instagram";
import { FacebookIcon } from "@/icon/social/facebook";
import { TiktokIcon } from "@/icon/social/tiktok";
import { LinkedInIcon } from "@/icon/social/linkedIn";
import { VisaIcon } from "@/icon/payment-cards/visa";
import { AmexIcon } from "@/icon/payment-cards/amex";
import { GPayIcon } from "@/icon/payment-cards/g-pay";
import { ApplePayIcon } from "@/icon/payment-cards/apple-pay";
import { VenmoIcon } from "@/icon/payment-cards/venmo";
import { PaypalIcon } from "@/icon/payment-cards/paypal";
import { DiscoverIcon } from "@/icon/payment-cards/discover";
import { MasterCardIcon } from "@/icon/payment-cards/mastercard";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Location",
    href: "/location",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "FAQ's",
    href: "/faqs",
  },
  {
    label: "Return Policy",
    href: "/return-policy",
  },
];

const socialLinks = [
  {
    icon: InstagramIcon,
    href: "#",
    label: "Instagram",
  },
  {
    icon: FacebookIcon,
    href: "#",
    label: "Facebook",
  },
  {
    icon: TiktokIcon,
    href: "#",
    label: "TikTok",
  },
  {
    icon: LinkedInIcon,
    href: "#",
    label: "LinkedIn",
  },
];

const paymentCardsList = [
  {
    label: "Visa",
    Icon: VisaIcon,
  },
  {
    label: "American Express",
    Icon: AmexIcon,
  },
  {
    label: "Google Pay",
    Icon: GPayIcon,
  },
  {
    label: "Apple Pay",
    Icon: ApplePayIcon,
  },
  {
    label: "Venmo",
    Icon: VenmoIcon,
  },
  {
    label: "PayPal",
    Icon: PaypalIcon,
  },
  {
    label: "Discover",
    Icon: DiscoverIcon,
  },
  {
    label: "Mastercard",
    Icon: MasterCardIcon,
  },
];

export const Footer = () => {
  return (
    <footer className="bg-surface mt-16 py-12 text-dark">
      <div className="app-container">
        {/* Logo and description */}
        <div className="flex flex-col items-center mb-8 text-center">
          <div className="text-center mb-4">
            <Link href="/" className="" aria-label="Cheese-Co-Logo">
              <HeaderLogo />
            </Link>
          </div>
          <p className="text-center max-w-xl">
            Cheese co is a fun, no-pretense, learn-as-you-go cheese shop and
            charcuterie bar in Ambleside, West Vancouver.
          </p>
        </div>

        {/* Main navigation */}
        <div className="flex justify-center space-x-8 mb-12">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              className="text-dark font-semibold hover:text-primary transition-colors"
              key={link.label}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="text-center mb-12">
          <h3 className="font-medium mb-4">
            Sign Up For Our Newsletter For Exclusive Deals!
          </h3>
          <div className="flex max-w-md mx-auto border border-border-dark rounded-lg">
            <Input
              type="email"
              placeholder="Enter Email"
              className="rounded-l-lg rounded-r-none bg-white focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <button className="rounded-l-none h-10 rounded-r-lg bg-amber-500 hover:bg-amber-600 px-1 py-0">
              <ChevronRight className="h-6 w-5" />
              <span className="sr-only">subscribe-email-button</span>
            </button>
          </div>
        </div>

        {/* Four columns */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Follow Us */}
          <div className="text-center lg:text-left">
            <h4 className="font-medium mb-4">Follow Us</h4>
            <div className="flex justify-center lg:justify-start space-x-3">
              {socialLinks.map((link) => (
                <Link href={link.href} className="" key={link.label}>
                  <link.icon />
                  <span className="sr-only">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Come Visit Us */}
          <div className="text-center lg:text-left">
            <h4 className="font-medium mb-4">Come Visit Us</h4>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-center lg:justify-start">
                <MapPin className="h-4 w-4 mr-2 text-gray-500 self-start" />
                <span className="text-sm text-gray-600">
                  1212 Bellevue Ave. West Vancouver, BC V7T 1C3
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Clock className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm text-gray-600">
                  <span className="text-success font-medium">Open</span> 8:00am
                  - 6:00pm
                </span>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="text-center lg:text-left">
            <h4 className="font-medium mb-4">Contact Us</h4>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-center lg:justify-start">
                <Phone className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm text-gray-600">555-555-5555</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Mail className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm text-gray-600">
                  cheeseco@bussiness.com
                </span>
              </div>
            </div>
          </div>

          {/* Download Our App */}
          <div className="text-center lg:text-left">
            <h4 className="font-medium mb-4">Download Our App</h4>
            <div className="flex flex-col space-y-2 items-center lg:items-start">
              <div className="flex lg:flex-col xl:flex-row gap-3">
                <AppleAppStoreButton size="small" />
                <GooglePlayButton size="small" />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 flex justify-between">
          <Link
            href="/privacy-policy"
            className="text-sm hover:text-amber-500 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-sm hover:text-amber-500 transition-colors"
          >
            Terms
          </Link>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border pt-4">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-4 lg:mb-0 flex items-center">
              <span className="text-sm mr-2">Powered by</span>
              <span className="font-medium">
                <svg
                  width="77"
                  height="12"
                  viewBox="0 0 77 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0122 7.79565C10.6369 7.79565 10.404 7.56636 10.404 7.19696V4.95508C10.404 3.49021 9.4335 2.52212 7.97124 2.52212C6.94896 2.52212 6.1596 2.96795 5.66786 3.77044C5.29259 2.99343 4.51617 2.52212 3.49389 2.52212C2.62689 2.52212 1.92811 2.86605 1.44932 3.51568V2.67498H0V9.17135H1.44932V5.40091C1.44932 4.49651 2.08339 3.89782 3.0151 3.89782C3.90798 3.89782 4.47735 4.48377 4.47735 5.37543V9.17135H5.92667V5.40091C5.92667 4.49651 6.56075 3.89782 7.49245 3.89782C8.38533 3.89782 8.95471 4.48377 8.95471 5.37543V7.51541C8.95471 8.59814 9.5629 9.17135 10.7146 9.17135H11.1416V7.79565H11.0122Z"
                    fill="#2B2B2B"
                  />
                  <path
                    d="M19.1575 7.79565C18.7693 7.79565 18.5494 7.56636 18.5494 7.19696V2.67498H17.1V3.68128C16.5695 2.96795 15.7542 2.52212 14.7837 2.52212C12.9203 2.52212 11.5357 3.98699 11.5357 5.92316C11.5357 7.85934 12.9203 9.32421 14.7837 9.32421C15.7931 9.32421 16.6342 8.84016 17.1647 8.07588C17.3459 8.78921 17.9282 9.17135 18.8599 9.17135H19.274L19.7074 7.79565H19.1575ZM15.0684 7.9485C13.8908 7.9485 13.0238 7.06958 13.0238 5.92316C13.0238 4.77674 13.8908 3.89782 15.0684 3.89782C16.233 3.89782 17.1 4.77674 17.1 5.92316C17.1 7.06958 16.233 7.9485 15.0684 7.9485Z"
                    fill="#2B2B2B"
                  />
                  <path
                    d="M25.9964 7.79565C25.2588 7.79565 24.8188 7.32434 24.8188 6.50911C24.8188 5.70662 25.2459 4.75127 26.0094 3.68128V3.33735L21.7132 2.85331C21.6743 2.34379 21.2861 1.97439 20.6909 1.97439C20.0956 1.97439 19.7074 2.35653 19.7074 2.917C19.7074 3.31188 19.9015 3.68128 20.238 3.88509L19.1898 9.17135H20.6132L21.5708 4.1908L23.9518 4.49651C23.5378 5.24805 23.3307 5.98685 23.3307 6.67471C23.3307 8.22874 24.2236 9.17135 25.867 9.17135H27.3865V7.79565H25.9964Z"
                    fill="#2B2B2B"
                  />
                  <path
                    d="M31.7128 7.1078L31.2469 6.5728C32.6316 6.07602 33.408 5.26079 33.408 4.26723C33.408 3.22271 32.6057 2.52212 31.3893 2.52212C30.367 2.52212 29.3318 3.03164 28.5295 3.83413V0H27.0802V9.17135H28.5295V7.09506C28.9306 7.06958 29.293 7.03137 29.6553 6.96768L30.2894 7.80839C30.8717 8.8529 31.9069 9.17135 32.9033 9.17135H33.408V7.79565H33.0715C32.5539 7.79565 32.0622 7.54089 31.7128 7.1078ZM28.5295 5.31174C29.2024 4.43282 30.2764 3.83413 31.1175 3.83413C31.6222 3.83413 31.9328 4.06342 31.9328 4.42008C31.9328 5.14615 30.6517 5.70662 28.5295 5.91043V5.31174Z"
                    fill="#2B2B2B"
                  />
                  <path
                    d="M41.042 5.9359C41.042 3.98699 39.5279 2.52212 37.5093 2.52212C35.5035 2.52212 33.9895 3.98699 33.9895 5.92316C33.9895 7.85934 35.5035 9.32421 37.5481 9.32421C39.1139 9.32421 40.4079 8.47076 40.9384 7.19696H39.3338C38.9974 7.69374 38.3374 8.03767 37.574 8.03767C36.5387 8.03767 35.7494 7.41351 35.5423 6.4709H41.0031C41.029 6.31804 41.042 6.07602 41.042 5.9359ZM37.5093 3.80866C38.4668 3.80866 39.2433 4.40734 39.4762 5.299H35.5553C35.8011 4.40734 36.5517 3.80866 37.5093 3.80866Z"
                    fill="#2B2B2B"
                  />
                  <path
                    d="M45.5567 3.97425V2.67498H43.9262V0.917135H42.5546V2.16546C42.5546 2.49664 42.3734 2.67498 42.037 2.67498H41.3641V3.97425H42.4769V7.17149C42.4769 8.45802 43.2534 9.17135 44.6897 9.17135H45.5567V7.85934H44.8968C44.2886 7.85934 43.9262 7.51541 43.9262 6.9422V3.97425H45.5567Z"
                    fill="#2B2B2B"
                  />
                  <path
                    d="M50.9278 2.52212C49.8279 2.52212 48.9091 3.05712 48.3656 3.91056V2.67498H47.2528V11.5916H48.3656V7.93577C48.9091 8.78921 49.8279 9.32421 50.9278 9.32421C52.8171 9.32421 54.2405 7.85934 54.2405 5.92316C54.2405 3.98699 52.8171 2.52212 50.9278 2.52212ZM50.7208 8.26695C49.375 8.26695 48.3656 7.26065 48.3656 5.92316C48.3656 4.58568 49.375 3.57937 50.7208 3.57937C52.0795 3.57937 53.0889 4.58568 53.0889 5.92316C53.0889 7.26065 52.0795 8.26695 50.7208 8.26695Z"
                    fill="#2B2B2B"
                  />
                  <path
                    d="M56.9931 9.17135H57.5366V8.16505H57.1614C56.6308 8.16505 56.3073 7.8466 56.3073 7.33708V0H55.1944V7.51541C55.1944 8.57267 55.8285 9.17135 56.9931 9.17135Z"
                    fill="#2B2B2B"
                  />
                  <path
                    d="M65.3023 8.1141C64.9011 8.1141 64.6423 7.85934 64.6423 7.46446V2.67498H63.5294V3.91056C62.9859 3.05712 62.0672 2.52212 60.9673 2.52212C59.078 2.52212 57.6675 3.98699 57.6675 5.92316C57.6675 7.85934 59.078 9.32421 60.9673 9.32421C62.0801 9.32421 62.9989 8.77647 63.5424 7.91029C63.62 8.72552 64.1635 9.17135 65.0823 9.17135H65.4317V8.1141H65.3023ZM61.1743 8.26695C59.8156 8.26695 58.8062 7.26065 58.8062 5.92316C58.8062 4.58568 59.8156 3.57937 61.1743 3.57937C62.5201 3.57937 63.5294 4.58568 63.5294 5.92316C63.5294 7.26065 62.5201 8.26695 61.1743 8.26695Z"
                    fill="#2B2B2B"
                  />
                  <path
                    d="M69.698 3.66854V2.67498H67.9122V0.878921H66.864V2.19093C66.864 2.50938 66.6829 2.67498 66.3723 2.67498H65.6088V3.66854H66.7993V7.26065C66.7993 8.47076 67.5628 9.17135 68.8957 9.17135H69.698V8.16505H69.0509C68.3522 8.16505 67.9122 7.7447 67.9122 7.08232V3.66854H69.698Z"
                    fill="#2B2B2B"
                  />
                  <path
                    d="M77.0002 5.92316C77.0002 3.98699 75.4991 2.52212 73.4933 2.52212C71.5005 2.52212 69.9865 3.98699 69.9865 5.92316C69.9865 7.85934 71.5005 9.32421 73.5322 9.32421C75.085 9.32421 76.3661 8.4835 76.8837 7.23518H75.6414C75.2662 7.88481 74.4639 8.31791 73.5451 8.31791C72.2899 8.31791 71.3711 7.52815 71.177 6.38173H76.9743C76.9872 6.25435 77.0002 6.05054 77.0002 5.92316ZM73.4933 3.52842C74.6709 3.52842 75.6026 4.2927 75.8097 5.40091H71.19C71.41 4.2927 72.3158 3.52842 73.4933 3.52842Z"
                    fill="#2B2B2B"
                  />
                </svg>
              </span>
            </div>

            <div className="flex space-x-2 mb-4 lg:mb-0">
              {paymentCardsList.map((card) => (
                <div key={card.label}>
                  <card.Icon />
                  <span className="sr-only">{card.label}</span>
                </div>
              ))}
            </div>

            <div className="text-sm">Copyright © 2025 Cheese Co.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
