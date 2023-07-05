import React from "react";
import MarketTrendCards from "../commonIngredients/MarketTrendCards";

function TopTrends() {
  return (
    <>
      {[1, 2, 3, 4, 5].map((ele) => {
        return <MarketTrendCards />;
      })}
    </>
  );
}

export default TopTrends;
