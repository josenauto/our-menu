import React from "react";
import { Button } from 'reactstrap'

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="text-center">
      {categories.map((category, index) => {
        return (
          <Button
            color="primary"
            className="category-btn"
            type="button"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </Button>
        );
      })}
    </div>
  );
};

export default Categories;
