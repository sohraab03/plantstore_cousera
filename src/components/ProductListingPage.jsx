import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

const plants = [
  { id: 1, name: "Fern", price: 10, thumbnail: "/fern.jpg" },
  { id: 2, name: "Cactus", price: 15, thumbnail: "/cactus.jpg" },
  { id: 3, name: "Bamboo", price: 20, thumbnail: "/bamboo.jpg" },
];

const ProductListingPage = () => {
  const dispatch = useDispatch();

  return (
    <div className="product-listing">
      {plants.map((plant) => (
        <div key={plant.id} className="product">
          <img src={plant.thumbnail} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button onClick={() => dispatch(addToCart(plant))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;
