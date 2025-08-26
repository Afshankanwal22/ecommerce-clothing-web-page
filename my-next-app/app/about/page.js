"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 flex flex-col items-center">
      {/* Hero Section */}
      <div className="max-w-4xl text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-teal-600 mb-4">
          About Clothify
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          At Clothify, we are passionate about fashion and quality. We bring you the latest trends with a focus on style, comfort, and sustainability. Our mission is to make shopping enjoyable and effortless for everyone.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="max-w-6xl grid md:grid-cols-2 gap-12 items-center mb-16">
       <img 
  src="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80" 
  alt="Our Story" 
  className="rounded-xl shadow-lg w-full object-cover h-80 md:h-96"
/>
        <div>
          <h2 className="text-3xl font-semibold text-teal-600 mb-4">Our Story</h2>
          <p className="text-gray-700 text-lg mb-4">
            Founded in 2023, Clothify started with a small team of fashion enthusiasts. Our goal is to provide trendy, high-quality clothing for everyone. From casual wear to elegant outfits, we curate collections that suit your lifestyle.
          </p>
          <p className="text-gray-700 text-lg">
            We believe in transparency, ethical sourcing, and making fashion accessible without compromising on style. Join us on our journey to transform the way you shop online.
          </p>
        </div>
      </div>

      {/* Mission, Vision & Values Section */}
      <div className="max-w-6xl grid md:grid-cols-3 gap-8 mb-16 text-center">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-teal-600 mb-2">Mission</h3>
          <p className="text-gray-700">
            To provide high-quality, stylish clothing while promoting sustainability and ethical fashion practices.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-teal-600 mb-2">Vision</h3>
          <p className="text-gray-700">
            To be a leading online fashion destination recognized for trendsetting collections and exceptional customer experience.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-teal-600 mb-2">Values</h3>
          <p className="text-gray-700">
            Quality, Sustainability, Customer-Centricity, Innovation, and Integrity in everything we do.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl text-center">
        <h2 className="text-3xl font-semibold text-teal-600 mb-10">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Team Member */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <img 
              src="https://randomuser.me/api/portraits/women/68.jpg" 
              alt="Jane Doe" 
              className="w-32 h-32 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-1">Jane Doe</h3>
            <p className="text-gray-600 mb-2">Founder & CEO</p>
            <p className="text-gray-500 text-sm">
              Passionate about sustainable fashion and building a brand that cares.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="John Smith" 
              className="w-32 h-32 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-1">John Smith</h3>
            <p className="text-gray-600 mb-2">Head of Design</p>
            <p className="text-gray-500 text-sm">
              Creates collections that combine style and comfort for every occasion.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <img 
              src="https://randomuser.me/api/portraits/women/45.jpg" 
              alt="Emily Davis" 
              className="w-32 h-32 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-1">Emily Davis</h3>
            <p className="text-gray-600 mb-2">Marketing Lead</p>
            <p className="text-gray-500 text-sm">
              Passionate about connecting with customers and sharing our story.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
