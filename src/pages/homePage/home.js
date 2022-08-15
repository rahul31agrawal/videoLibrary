import banner from "../../assets/images/netflixCollection.jpg";
import { Navbar } from "../../components/navbar/nav";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { CategoryCard } from "../../components/categoryCard/categoryCard";

export default function Home({ categories }) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios.get("/api/categories").then(
      (response) => {
        setItem(response.data.categories);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <>
      <Navbar />
      <div className="bannerImg">
        <img src={banner} alt="banner" />
      </div>
      <h1 className="categoryHeading">Category</h1>
      <div className="categoryCardContainer">
        {item.map((obj, index) => (
          <div key={index}>
            <CategoryCard {...obj} />
          </div>
        ))}
      </div>
    </>
  );
}

export { Home };
