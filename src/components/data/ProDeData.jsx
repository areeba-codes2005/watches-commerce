import productFeature1 from "../../assets/beslad1.png";
import productFeature2 from "../../assets/beslad2.png";
import productFeature3 from "../../assets/beslad3.png";
import productFeature4 from "../../assets/beslad4.png";
const product = {
  title: "Black/Brown Suede Leather Berkeley 38",
  images: [productFeature1, productFeature2, productFeature3, productFeature4],
  description:
    "A timeless blend of precision and elegance, this watch embodies sophistication and everyday versatility. Designed with meticulous craftsmanship, it features a refined dial and durable materials that ensure long-lasting performance. Whether paired with formal attire or casual wear, this timepiece adds a touch of class to any look. Built to stand the test of time, it is more than just an accessory — it’s a statement of style and reliability.",
  ProductDetails: {
  caseMaterial: "Stainless Steel",
  strapMaterial: "Genuine Leather",
  movement: "Quartz Movement",
  dial: "Analog Display",
  waterResistance: "Up to 50 meters",
  features: "Durable, Scratch-resistant Glass",
  care: "Wipe with a soft dry cloth",
},

  ProductReviews: [
    {
      rating: "⭐⭐⭐⭐☆ (4/5)",
      review:
        "Excellent build quality and a very elegant design. The watch feels premium on the wrist!",
      customer: "Areeba A. – July 2025",
    },
    {
      rating: "⭐⭐⭐⭐⭐ (5/5)",
      review: "Fast delivery and the watch looks exactly like the pictures. Keeps accurate time too!",
      customer: "Ali R. – June 2025",
    },
  ],
  ShippingandReturn: [
    {
      title: "Returns Policy",
      content: `You may return unworn watches in their original packaging within 30 days of delivery for a full refund or exchange. 
If the return is due to an error on our part (wrong or defective product), we will also cover the return shipping cost.

Refunds are usually processed within 7–10 business days after we receive your return. Your bank may take an additional 3–5 business days to reflect the amount in your account.

To start a return, simply log in to your account, view your order, and click the 'Return Item(s)' option. You’ll be notified by email once your refund has been processed.`,
    },
    {
      title: "Shipping",
      content: `We ship worldwide with reliable carriers. Orders are typically processed within 1–2 business days. 
Delivery times depend on your location and the shipping method chosen at checkout.

You’ll receive an email confirmation with tracking details once your order has shipped. 
Please note that international orders may be subject to customs duties and taxes, which are the responsibility of the customer.`,
    },
  ],
  priceOld: "$277.73",
  priceNew: "$177.63",
  stock: 290,
  reference: "demo_1",
  brand: "ChronoTime",
  categories: ["Watches", "Men's Accessories", "Luxury Timepieces"],
  colors: ["#fff", "#434A54"],
};
export default product;
