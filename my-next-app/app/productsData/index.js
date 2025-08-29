// app/productsData/index.js

import kidsProducts from "./kidsProducts";
import menProducts from "./menProducts";
import womenProducts from "./womenProducts";

const allProducts = [...kidsProducts, ...menProducts, ...womenProducts];

export default allProducts;
