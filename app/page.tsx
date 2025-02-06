import ProductCard from "./components/ProductCard";
const productData = {
  images: [
    "/images/product1.jpg", 
    "/images/product2.jpg",
    "/images/product3.jpg",
  ],
  title: "Bench Grinder - 200mm",
  description: "A powerful and reliable bench grinder suitable for all grinding tasks.",
  specifications: [
    { label: "Power", value: "500W" },
    { label: "Wheel Diameter", value: "200mm" },
    { label: "Speed", value: "2950 RPM" },
    { label: "Weight", value: "12kg" },
  ],
  stock: 10,
  reference: "GRIND200-500W",
};

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <ProductCard {...productData} />
      

    </main>
  );
}
