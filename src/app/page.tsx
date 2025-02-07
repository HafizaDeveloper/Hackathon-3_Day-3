'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const [reviews, setReviews] = useState([
    { name: "Sarah M.", text: "The food is amazing, and the delivery is super fast! Highly recommend FoodTuck." },
    { name: "James D.", text: "The best chefs and the best meals in town! I love this service." },
  ]);
  const [newReview, setNewReview] = useState({ name: '', text: '' });

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.name && newReview.text) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: '', text: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
<div className="relative h-screen flex items-center justify-center text-center text-white px-4">
  <Image
    src="/images/hero-bg.webp"
    alt="Delicious Food"
    layout="fill"
    objectFit="cover"
    className="absolute inset-0 z-0"
  />
  <div className="relative z-10 max-w-4xl">
    <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg animate-fade-in">
      Experience the Best Food in Town!
    </h1>
    <p className="text-sm sm:text-lg md:text-xl text-gray-200 mt-4 animate-fade-in delay-200">
      Order from the best chefs and enjoy delicious meals at your doorstep.
    </p>
    {/* Buttons side by side always */}
    <div className="mt-6 flex justify-center space-x-4">
      <Link
        href="/food"
        className="bg-yellow-500 text-white px-4 py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition-transform transform hover:scale-105 animate-fade-in delay-400"
      >
        Explore Food
      </Link>
      <Link
        href="/chefs"
        className="bg-yellow-500 text-white px-4 py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition-transform transform hover:scale-105 animate-fade-in delay-600"
      >
        Meet Chefs
      </Link>
    </div>
  </div>
</div>


      {/* Features Section */}
<div className="max-w-7xl mx-auto py-20 px-5 text-center">
  <h2 className="text-4xl font-bold text-gray-800">Why Choose FoodTuck?</h2>
  <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
    
    {/* Fresh Ingredients */}
    <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
      <Image src="/images/fresh-ingredients.jpg" alt="Fresh Ingredients" width={400} height={300} className="rounded mx-auto mb-4"/>
      <h3 className="text-2xl font-semibold text-yellow-500">Fresh Ingredients</h3>
      <p className="text-gray-600 mt-2">We use only the freshest ingredients for the best taste.</p>
    </div>

    {/* Top Chefs */}
    <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
      <Image src="/images/top-chefs.webp" alt="Top Chefs" width={400} height={300} className="rounded mx-auto mb-4"/>
      <h3 className="text-2xl font-semibold text-yellow-500">Top Chefs</h3>
      <p className="text-gray-600 mt-2">Our chefs are world-class professionals in culinary arts.</p>
    </div>

    {/* Fast Delivery */}
    <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
      <Image src="/images/fast-delivery.jpg" alt="Fast Delivery" width={400} height={300} className="rounded mx-auto mb-4"/>
      <h3 className="text-2xl font-semibold text-yellow-500">Fast Delivery</h3>
      <p className="text-gray-600 mt-2">Enjoy quick and hassle-free doorstep delivery.</p>
    </div>

  </div>
</div>

{/* Trending Dishes Section */}
<div className="max-w-7xl mx-auto py-20 px-5 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Trending Dishes</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {["Burger", "Pizza", "Fresh Lime"].map((dish, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
              <Image src={`/images/${dish.toLowerCase()}.png`} alt={dish} width={400} height={150} className="mx-auto mb-4 rounded-lg" />
              <h3 className="text-2xl font-semibold text-gray-800">{dish}</h3>
              <p className="text-gray-600 mt-2">One of the top-selling items this week!</p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-7xl mx-auto py-20 px-5 text-center">
        <h2 className="text-4xl font-bold text-gray-800">How It Works</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {["Choose Your Food", "Place Your Order", "Enjoy Your Meal"].map((step, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
              <Image src={`/images/step-${index + 1}.webp`} alt={step} width={400} height={300} className="mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-yellow-500">{step}</h3>
              <p className="text-gray-600 mt-2">Quick and easy steps to get your food delivered.</p>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="bg-gray-50 py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-800">What Our Customers Say</h2>
        <div className="mt-10 max-w-4xl mx-auto space-y-6">
          {reviews.map((review, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
              <p className="text-lg text-gray-600 italic">"{review.text}"</p>
              <p className="text-yellow-500 font-semibold mt-3">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Review Submission Form */}
      <div className="max-w-5xl mx-auto py-10 px-6 bg-white shadow-lg rounded-lg ">
        <h3 className="text-3xl font-bold text-gray-800 text-center">Leave a Review</h3>
        <form onSubmit={handleReviewSubmit} className="mt-6">
          <input
            type="text"
            placeholder="Your Name"
            value={newReview.name}
            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          />
          <textarea
            placeholder="Your Review"
            value={newReview.text}
            onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          />
          <button
            type="submit"
            className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition"
          >
            Submit Review
          </button>
        </form>   
      </div>

      {/* Newsletter Signup Section */}
      <div className="bg-gray-800 text-white py-20 px-10 text-center">
        <h2 className="text-4xl font-bold">Subscribe to Our Newsletter</h2>
        <p className="text-gray-400 mt-4">Get exclusive offers and updates delivered to your inbox.</p>
        <div className="mt-6 flex justify-center">
          <input type="email" placeholder="Enter your email" className="p-3 rounded-l-lg text-black w-80 border-none outline-none" />
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-r-lg shadow-lg hover:bg-yellow-600 transition">Subscribe</button>
        </div>
      </div>
      </div>
  );
}
