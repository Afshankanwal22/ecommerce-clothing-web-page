const kidsProducts = [
  {
    id: "1",
    name: "Kids T-Shirt",
    category: "Kids",
    type: "T-Shirt",
    price: 20,
    discount: 10,
    rating: 4,
    description: "Soft cotton t-shirt designed for everyday comfort and playful style.",
    images: [
      "https://images.unsplash.com/photo-1628071645679-101ea5fad26f?q=80",
      "https://plus.unsplash.com/premium_photo-1691367782355-549e5ae4d484?w=600&auto=format&fit=crop&q=60",
      "https://plus.unsplash.com/premium_photo-1722384009518-9f47b86f4b68?w=600&auto=format&fit=crop&q=60",
      "https://plus.unsplash.com/premium_photo-1755534537500-964aba00713b?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1664982803698-b6b514e9928b?w=600&auto=format&fit=crop&q=60",
      "https://plus.unsplash.com/premium_photo-1723575737806-ecd7f74bf3a1?w=600&auto=format&fit=crop&q=60"
    ]
  },
  {
    id: "2",
    name: "Kids Shorts",
    category: "Kids",
    type: "Shorts",
    price: 15,
    discount: 5,
    rating: 3,
    description: "Lightweight shorts perfect for outdoor fun, sports, and summer days.",
    images: [
      "https://images.unsplash.com/photo-1657796827146-56df3caa8e0a?w=600&auto=format&fit=crop&q=60",
      "https://plus.unsplash.com/premium_photo-1724859689454-ea6c93f5b640?w=600&auto=format&fit=crop&q=60",
      "https://plus.unsplash.com/premium_photo-1724296696844-07ae27ed0dd5?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&auto=format&fit=crop&q=60",
      "https://plus.unsplash.com/premium_photo-1755164638632-fef43085917b?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1683232152068-f17f9e4c274f?w=600&auto=format&fit=crop&q=60"
    ]
  },
  {
    id: "3",
    name: "Kids Pants",
    category: "Kids",
    type: "Pants",
    price: 18,
    discount: 10,
    rating: 4,
    description: "Durable pants that combine comfort and flexibility for active kids.",
    images: [
      "https://images.unsplash.com/photo-1631044237696-6b38064fbbf4?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1605190112423-200856a315d6?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1727924571257-4235cd4db29e?w=600&auto=format&fit=crop&q=60",
      "https://plus.unsplash.com/premium_photo-1712332668592-5f65a02aee06?q=80&w=687&auto=format&fit=crop",
      "https://plus.unsplash.com/premium_photo-1729097011903-4b16e98c0476?w=600&auto=format&fit=crop&q=60",
      "https://plus.unsplash.com/premium_photo-1664355811153-408074237f94?q=80&w=687&auto=format&fit=crop"
    ]
  },
  {
    id: "4",
    name: "Kids Hoodie",
    category: "Kids",
    type: "Hoodie",
    price: 25,
    discount: 5,
    rating: 5,
    description: "Cozy hoodie with a warm lining to keep kids snug during chilly days.",
    images: [
      "https://images.unsplash.com/photo-1642157299220-06b9a9d09a6e?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1540987173746-7a87c08d3ab7?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1608585537212-d404bc43a35f?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1701673072655-0b7c89ec2138?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1597048867598-4d014bc57a0a?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1653508311196-c6c5c9855ce2?w=600&auto=format&fit=crop&q=60"
    ]
  },
  {
    id: "5",
    name: "Kids Jacket",
    category: "Kids",
    type: "Jacket",
    price: 29,
    discount: 5,
    rating: 5,
    description: "Stylish jacket that provides warmth and a trendy look for kids.",
    images: [
      "https://plus.unsplash.com/premium_photo-1707816501228-1d814ad62d7b?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1603923407882-9a2f7a6f83f5?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1737494802833-5db96020f2c8?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1687224831137-5fb2dca0b6d0?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1747047631815-3660a17e9fd2?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1629474088131-293fa9a2a1eb?w=600&auto=format&fit=crop&q=60"
    ]
  },
  {
    id: "6",
    name: "Kids Sweater",
    category: "Kids",
    type: "Sweater",
    price: 30,
    discount: 5,
    rating: 5,
    description: "Knitted sweater that keeps kids warm and comfortable all day long.",
    images: [
      "https://plus.unsplash.com/premium_photo-1675033154326-4f8641603652?w=600",
      "https://images.unsplash.com/photo-1719408386140-5fbac6ffdcbd?w=600&auto=format&fit=crop&q=60",
      "https://plus.unsplash.com/premium_photo-1755534537657-0a8a9bf1cc46?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1638339972006-aafc180da1d9?q=80&w=1171&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1670603917227-3fd6882dbf97?w=600&auto=format&fit=crop&q=60",
      "https://plus.unsplash.com/premium_photo-1697183203294-f846144fde19?w=600&auto=format&fit=crop&q=60"
    ]
  },
  {
    id: "7",
    name: "Kids Shirt",
    category: "Kids",
    type: "Shirt",
    price: 22,
    discount: 5,
    rating: 5,
    description: "Smart casual shirt, ideal for school, parties, or family outings.",
    images: [
      "https://plus.unsplash.com/premium_photo-1697183203532-6e0b961c0e0d?w=600",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1625517527341-1e57d526612d?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1723040215504-1e549be47ca3?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1604303768345-038b79a8c47a?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1688953690584-84c5eebb58be?w=600&auto=format&fit=crop&q=60"
    ]
  },
  {
    id: "8",
    name: "Kids Frock",
    category: "Kids",
    type: "Frock",
    price: 32,
    discount: 5,
    rating: 5,
    description: "Elegant frock with a modern design, perfect for festive occasions.",
    images: [
      "https://images.unsplash.com/photo-1684244160171-97f5dac39204?w=600",
      "https://images.unsplash.com/photo-1745696177750-1ee1eaf2ba71?w=600&auto=format&fit=crop&q=60",
      "https://plus.unsplash.com/premium_photo-1661292033022-0bc9bf8ecc6f?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1734939255723-3a174fefef1c?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1578849107665-34b78fc16267?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1701074730167-e99694c6304d?w=600&auto=format&fit=crop&q=60"
    ]
  },
];

export default kidsProducts;
