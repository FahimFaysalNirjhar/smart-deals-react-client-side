import React, { useState } from "react";
import Hero from "../../components/Hero/Hero";
import LatestProducts from "../../components/LatestProducts/LatestProducts";
import SearchData from "../../components/SearchData/SearchData";

const latestProductsPromise = fetch(
  "http://localhost:3000/latest-products",
).then((res) => res.json());

const Home = () => {
  const [searchData, setSearchData] = useState([]);
  console.log(searchData);

  return (
    <div>
      <Hero setSearchData={setSearchData}></Hero>
      {searchData.length > 0 ? (
        <SearchData searchData={searchData}></SearchData>
      ) : (
        <LatestProducts
          latestProductsPromise={latestProductsPromise}
        ></LatestProducts>
      )}
    </div>
  );
};

export default Home;
