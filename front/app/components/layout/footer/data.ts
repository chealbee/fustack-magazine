import gpay from "@/public/GooglePay.png";
import apay from "@/public/ApplePay.png";
import mpay from "@/public/Mastercard.png";
import vpay from "@/public/visa-logo.png";

import social1 from "@/public/icon social-1.png";
import social2 from "@/public/icon social-2.png";
import social3 from "@/public/icon social-3.png";

import c1 from "@/public/futer.png";
import c2 from "@/public/mail.png";
import c3 from "@/public/Group.png";

export const paymentsMethods = [
  {
    src: gpay,
    alt: "google pay",
  },
  {
    src: apay,
    alt: "apple pay",
  },
  {
    src: mpay,
    alt: "mastercard",
  },
  {
    src: vpay,
    alt: "visa",
  },
];

export const social = [
  {
    src: social1,
    alt: "social icon",
  },
  {
    src: social2,
    alt: "social icon",
  },
  {
    src: social3,
    alt: "social icon",
  },
];

export const contacts = [
  {
    text: "Our contact phone number:",
    alt: "phone",
    value: "+38 044 555 1234",
    img: c1,
  },
  {
    text: "E-mail:",
    alt: "E-mail",
    img: c2,
    value: "info@emag.com",
  },
  {
    text: "Our address:",
    alt: "address",
    img: c3,
    value: "Kyiv, Pavla Tychyna Avenue, 9A",
  },
];
