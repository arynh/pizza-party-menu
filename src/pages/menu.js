import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const MenuPage = () => (
  <Layout id="menu">
    <SEO title="Menu" />
    <h1>Pizzas</h1>
    <ul>
      <li>
        Goat cheese, toasted walnut, pear, sage, balsamic reduction, sea salt
      </li>
      <li>Tomato, mozzarella, basil, olive oil, pecorino romano</li>
      <li>
        Fennel seed, spicy sausage, mushroom, sweet potato, spicy tomato sauce
      </li>
      <li>
        Something on a cauliflower dough (yum yum YUUUUUUUM! GLUTEN FREE!)
      </li>
    </ul>
    <h1>Drinks</h1>
    <ul>
      <li>Soda, Beer, Smirnoff Ice, VODKAAAAA (and more TBD!)</li>
      <li>But does it really matter you WILL get fucked up!</li>
    </ul>
    <h1>Dessert</h1>
    <ul>
      <li>Bananas foster over vanilla ice cream</li>
    </ul>
  </Layout>
);

export default MenuPage;
