"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductCardDetails {
  images: string[];
  title: string;
  description: string;
  specifications: { label: string; value: string }[];
  stock: number;
  reference: string;
}

const ProductCard: React.FC<ProductCardDetails> = ({
  images,
  title,
  description,
  specifications,
  stock,
  reference,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);

  const handleIncrease = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0 && value <= stock) {
      setQuantity(value);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Breadcrumb Navigation */}
      <nav className="text-gray-500 text-sm mb-4">
        <span>Home</span> / <span>Category</span> / <span className="font-semibold">{title}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section: Image Gallery */}
        <div className="lg:w-1/2">
          <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={images[currentImage]}
              alt={title}
              layout="fill"
              objectFit="contain"
              className="p-4"
            />
            {images.length > 1 && (
              <>
                <button
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                  onClick={() => setCurrentImage((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                  onClick={() => setCurrentImage((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>
          <div className="flex mt-4 gap-2">
            {images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt="Thumbnail"
                width={60}
                height={60}
                className={`cursor-pointer border-2 rounded-lg p-1 ${
                  currentImage === index ? "border-blue-500" : "border-gray-300"
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <p className="text-gray-500 text-sm">Reference: {reference}</p>

          {/* Specifications Table */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Specifications</h3>
            <div className="border border-gray-300 rounded-lg p-4 mt-2">
              <ul className="space-y-2">
                {specifications.map((spec, index) => (
                  <li key={index} className="flex justify-between text-gray-700">
                    <span className="font-medium">{spec.label}:</span>
                    <span>{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stock Information */}
          <div className="mt-4 text-xl font-bold">Stock: {stock}</div>

          {/* Quantity Selector */}
          <div className="mt-4 flex items-center">
            <button
              className="bg-gray-300 px-4 py-2 rounded-l-lg"
              onClick={handleDecrease}
              disabled={quantity === 1}
            >
              -
            </button>
            <input
              type="number"
              className="w-16 text-center border border-gray-300"
              value={quantity}
              onChange={handleQuantityChange}
              min={1}
              max={stock}
            />
            <button
              className="bg-gray-300 px-4 py-2 rounded-r-lg"
              onClick={handleIncrease}
              disabled={quantity === stock}
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <div className="mt-6">
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition w-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
