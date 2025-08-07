"use client";
import React from "react";
import HeroParallax from "./HeroParallax";
import pic2 from '../assets/Image/images/set-up/pic2.jpg';
import pic1 from '../assets/Image/images/set-up/pic1.jpg';
import pic3 from '../assets/Image/images/set-up/pic3.jpg';
import pic4 from '../assets/Image/images/set-up/pic4.jpg';
import pic5 from '../assets/Image/images/set-up/pic5.jpg';
import pic6 from '../assets/Image/images/set-up/pic6.jpg';
import pic7 from '../assets/Image/images/set-up/pic7.jpg';
import pic8 from '../assets/Image/images/set-up/pic8.jpg';
import pic9 from '../assets/Image/images/set-up/pic9.jpg'

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      pic2,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
     pic1,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
    "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      pic8,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      pic3,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      pic4,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      pic5,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
     pic6,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      pic7,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
     pic9,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      pic8,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      pic3,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      pic4,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  }
  // Add the rest of your products here...
];

const BannerHero = () => {
  return <HeroParallax products={products} />;
};

export default BannerHero;
