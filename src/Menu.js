import React from "react";
import { Media } from "reactstrap";

const Menu = ({ items }) => {
  return (
    <div>
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <Media key={id} id="media">
            <Media href="#">
              <Media object src={img} alt={title} width="350" height="300" />
            </Media>
            <Media body>
              <Media heading>{title}</Media>
              <p>{price}</p>
              <p>{desc}</p>
            </Media>
          </Media>
        );
      })}
    </div>
  );
};

export default Menu;
