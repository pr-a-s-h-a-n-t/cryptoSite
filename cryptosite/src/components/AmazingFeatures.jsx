import React from "react";
import AmazingFeaturesCard from "../commonIngredients/AmazingFeatures";

function AmazingFeatures() {
  return (
    <div>
      <h1>This is amazing feature</h1>
      {[1, 2, 3, 4, 5].map((ele) => {
        return <AmazingFeaturesCard key={ele} />;
      })}
    </div>
  );
}

export default AmazingFeatures;
