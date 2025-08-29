const menProducts = [
  {
    id: "9",
    name: "Men T-Shirt",
    category: "Men",
    type: "T-Shirt",
    price: 25,
    discount: 10,
    rating: 4,
    description: "Classic crew-neck t-shirt crafted from soft cotton for all-day comfort. Perfect for layering or wearing solo in a casual look.",
    images: [
      "https://images.unsplash.com/photo-1716369786765-5de0bb2d2658?w=600",
      "https://images.unsplash.com/photo-1716951735063-3d60c2c288e4?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1716951865304-e9567c6649e4?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1716951988375-37d5793385d0?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1716951219353-e4a16dce3186?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1643881080002-afdc695936e0?w=600&auto=format&fit=crop&q=60"
    ],
  },
  {
    id: "10",
    name: "Men Jacket",
    category: "Men",
    type: "Jacket",
    price: 120,
    discount: 15,
    rating: 5,
    description: "Premium-quality jacket designed to provide warmth and style. Ideal for layering in winter while maintaining a sharp, modern look.",
    images: [
      "https://images.unsplash.com/photo-1675877879221-871aa9f7c314?w=600",
      "https://plus.unsplash.com/premium_photo-1672239496412-ab605befa53f?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1725106028906-695e57afb682?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1610108703114-a48b1e7831c0?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/flagged/photo-1578507054195-f96dec3a8b14?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1578948856697-db91d246b7b1?w=600&auto=format&fit=crop&q=60"
    ],
  },
  {
    id: "11",
    name: "Men Pants",
    category: "Men",
    type: "Pants",
    price: 40,
    discount: 5,
    rating: 4,
    description: "Tailored-fit pants that combine comfort with elegance. Perfect for office wear, formal events, or smart-casual outings.",
    images: [
      "https://images.unsplash.com/photo-1714729382668-7bc3bb261662?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop&q=60"
    ],
  },
  {
    id: "12",
    name: "Men Shorts",
    category: "Men",
    type: "Shorts",
    price: 30,
    rating: 3,
    description: "Lightweight and breathable shorts designed for comfort. Ideal for workouts, lounging, or casual summer days.",
    images: [
      "https://images.unsplash.com/photo-1659989183952-8adb74ddcd35?q=80",
      "https://images.unsplash.com/photo-1667388624717-895854eea032?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1612913334025-bedf136f8715?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1617953644310-e690da9be982?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1545922996-cb0da7a16c2f?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1591678495920-daa30e3d2c38?w=600&auto=format&fit=crop&q=60"
    ],
  },
  {
    id: "13",
    name: "Men Shirts",
    category: "Men",
    type: "Shirts",
    price: 49.5,
    discount: 10,
    rating: 5,
    description: "Elegant button-down shirts made with premium fabric. A versatile pick for business meetings, dinners, or casual wear.",
    images: [
      "https://plus.unsplash.com/premium_photo-1725075088969-73798c9b422c?w=600",
      "https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1642764873654-9eef0467b342?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1602810319250-a663f0af2f75?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=687&auto=format&fit=crop"
    ],
  },
  {
    id: "14",
    name: "Men Hoodie",
    category: "Men",
    type: "Hoodie",
    price: 50,
    discount: 10,
    rating: 5,
    description: "Cozy hoodie with a relaxed fit and soft fleece lining. Perfect for layering on cooler days or casual everyday wear.",
    images: [
      "https://images.unsplash.com/photo-1615397587950-3cbb55f95b77?w=600&auto=format&fit=crop&q=60",
      "https://plus.unsplash.com/premium_photo-1673356302169-574db56b52cd?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=600&auto=format&fit=crop&q=60",
      "https://media.istockphoto.com/id/1343972310/photo/blank-oversized-hooded-sweatshirt-mockup.webp?a=1&b=1&s=612x612&w=0&k=20&c=I3ElT226_Yfb8i8B_27S37dhq6PviCT1ECnJcLwaidU=",
      "https://images.unsplash.com/photo-1600923678350-bffdd369a828?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1611817757591-c3f345024273?w=600&auto=format&fit=crop&q=60"
    ],
  },
  {
    id: "15",
    name: "Men Coat",
    category: "Men",
    type: "Coat",
    price: 59,
    discount: 10,
    rating: 5,
    description: "Timeless overcoat designed with a sleek silhouette. Provides warmth and sophistication, making it a winter wardrobe essential.",
    images: [
      "https://images.unsplash.com/photo-1610871276695-5e79e9cd497c?w=600",
      "https://images.unsplash.com/photo-1669575903350-9a349b411810?w=600&auto=format&fit=crop&q=60",
      "https://media.istockphoto.com/id/1127426210/photo/man-walking-in-urban-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=QW57q-u_JwmAIgsi8yu3YOGOChr2S4SXew4FAg6_ZmQ=",
      "https://plus.unsplash.com/premium_photo-1668432350485-9827ac89fbbf?w=600&auto=format&fit=crop&q=60",
      "https://plus.unsplash.com/premium_photo-1669130247940-81097c67e8e2?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1614548142401-ce00952f66da?w=600&auto=format&fit=crop&q=60"
    ],
  },
];

export default menProducts;
