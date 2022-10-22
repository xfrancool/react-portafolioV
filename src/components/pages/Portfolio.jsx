import React, { useState } from "react";
import { Heading } from "../common/Heading";
import { portfolio } from "../data/dummydata";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const allCategory = [
  "Todos",
  ...new Set(portfolio.map((item) => item.category)),
];
export const Portfolio = () => {
  const [list, setLists] = useState(portfolio);
  const [category, setCategory] = useState(allCategory);
  console.log(setCategory);

  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category === category);
    setLists(newItems);
    if (category === "Todos") {
      setLists(portfolio);
      return;
    }
  };

  return (
    <>
      <article>
        <div className="container">
          <Heading title="Portafolio" />
          <div className="catButton">
            {category.map((category) => (
              <button
                className="primaryBtn"
                onClick={() => filterItems(category)}
                data-aos="zoom-out-down"
              >
                {category}
              </button>
            ))}
          </div>
          <div className="content grid3">
            {list.map((item) => (
              <div className="box" data-aos="fade-up">
                <div className="img">
                  <img src={item.cover} alt="" />
                </div>
                <div className="overlay">
                  <h3>{item.title}</h3>
                  <span>{item.name}</span>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    <VisibilityOutlinedIcon />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};
