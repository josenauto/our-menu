import React from "react";

const Menu = ({ items }) => {
  return (
    <div>
      {items.map((menuItem) => {
        const { id, title, img, desc } = menuItem;
        return (
          <div key={id}>
            <img src={img} alt={title} />
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
