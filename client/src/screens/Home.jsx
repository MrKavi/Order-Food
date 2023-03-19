import React, { useEffect, useState } from "react";
import { Cards } from "../components/Cards";
import CarouselHome from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItems, setFoodItems] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setFoodItems(response[0]);
    setFoodCat(response[1]);
    // console.log(response[0], response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Header />
      <div>
        <div>
          <CarouselHome />
        </div>
        <div className=" container mt-3 mx-auto">
          {foodCat !== []
            ? foodCat.map((data) => {
                return (
                  <div className="row">
                    <div key={data._id}>{data.CategoryName}</div>
                    <hr />
                    {foodItems !== [] ? (
                      foodItems
                        .filter(
                          (item) => item.CategoryName === data.CategoryName
                        )
                        .map((filterItems) => {
                          return (
                            <div
                              key={filterItems._id}
                              className=" mr-2 p-1 col-12 col-md-6 col-lg-3"
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <Cards
                                foodName={filterItems.name}
                                options={filterItems.options[0]}
                                foodImg={filterItems.img}
                              />
                            </div>
                          );
                        })
                    ) : (
                      <div>No data found</div>
                    )}
                  </div>
                );
              })
            : ""}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
