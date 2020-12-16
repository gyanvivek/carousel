import React from "react";
import "./App.css";
import image1 from "./assets/images.jpg";
import image2 from "./assets/images2.jpg";
import image3 from "./assets/images3.jpg";
import image4 from "./assets/images4.jpg";
import image5 from "./assets/images5.jpg";
import image6 from "./assets/image6.jpg";
import image7 from "./assets/images7.jpg";
import image8 from "./assets/images8.jpg";
import Product from "./views/product";

const products = [
  { name: "cloth1", image: image1, price: 2000, category: "cloth" },
  { name: "cloth2", image: image2, price: 3000, category: "cloth" },
  { name: "cloth3", image: image3, price: 4000, category: "cloth" },
  { name: "cloth4", image: image4, price: 5000, category: "cloth" },
  { name: "Car5", image: image5, price: 2000000, category: "car" },
  { name: "Car6", image: image6, price: 3000000, category: "car" },
  { name: "Car7", image: image7, price: 4000000, category: "car" },
  { name: "Car8", image: image8, price: 5000000, category: "car" },
];

function App() {
  return <div className="App">
    <Product products={products} filter={"ABC"}/>
  </div>;
}

export default App;
