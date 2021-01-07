import React from "react";

const Categories = ({ filterItems }) => {
  return (
    <div>
      <button onClick={() => filterItems("breakfast")}>breakfast</button>
      <button onClick={() => filterItems("all")}>all</button>
    </div>
  );
};

export default Categories;
