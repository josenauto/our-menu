import React from "react";
import { Col, Media, Row } from "reactstrap";

const Menu = ({ items }) => {
  return (
    <div>
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <Row>
            <Col key={id}>
              <Media id="media">
                <Media href="#">
                  <Media
                    object
                    src={img}
                    alt={title}
                    width="350"
                    height="300"
                  />
                </Media>
                <Media body>
                  <Media heading>{title}</Media>
                  <p>{price}</p>
                  <p>{desc}</p>
                </Media>
              </Media>
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default Menu;
