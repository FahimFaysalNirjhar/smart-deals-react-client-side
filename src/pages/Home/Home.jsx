import React, { useState } from "react";
import Hero from "../../components/Hero/Hero";
import LatestProducts from "../../components/LatestProducts/LatestProducts";
import SearchData from "../../components/SearchData/SearchData";
import ShowAll from "../../components/ShowAll/ShowAll";

const latestProductsPromise = fetch(
  "https://smart-deals-server-weld.vercel.app/latest-products",
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
      <ShowAll></ShowAll>
    </div>
  );
};

export default Home;
