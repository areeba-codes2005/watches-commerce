import shoppopularwatch1 from "../../assets/shop-popular-watch1.png";
import shoppopularwatch2 from "../../assets/shop-popular-watch2.png";
import shoppopularwatch3 from "../../assets/shop-popular-watch3.png";

const ShopCategories = [
  {
    title: "Collection Layout",
    links: [
      "Collection layout 01",
      "Collection layout 02",
      "Collection layout 03",
      "Collection layout 04",
    ],
  },
  {
    title: "Product Types",
    links: [
      "Product Style 01",
      "Product Style 02",
      "Product Style 03",
      "Product Style 04",
      "Product Style 05",
    ],
  },
  {
    title: "Product Features",
    links: [
      "Product default",
      "Product Variable",
      "Product countdown",
      "Product grouped",
      "Product Out-of-stock",
    ],
  },
  {
    title: "Product Layouts",
    links: [
      "Layout 01 - Bottom thumb",
      "Layout 02 - Left thumb",
      "Layout 03 - Right thumb",
      "Layout 04 - No thumb",
      "Layout 05 - No thumb center",
      "Layout 06 - No thumb fullwidth",
      "Layout 07 - Gallery",
    ],
  },
  {
    title: "Popular Products",
    products: [
      {
        name: "Black/Black",
        rating: 5,
        price: "$130.16",
        image: shoppopularwatch1,
      },
      {
        name: "Gold/Black",
        rating: 5,
        price: "$176.79",
        image: shoppopularwatch2,
      },
      {
        name: "Gold/Brown",
        rating: 5,
        price: "$108.08",
        image: shoppopularwatch3,
      },
    ],
  },
];
export default ShopCategories;
