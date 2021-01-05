import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);
  return (
    <div>
      <section>
        <div>
          <h2>Our Menu</h2>
        </div>
        <Categories/>
        <Menu items={menuItems}/>
      </section>
    </div>
  );
}

export default App;
