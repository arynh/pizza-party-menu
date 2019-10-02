import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
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
      <li>Something on a cauliflower dough</li>
    </ul>
    <h1>Drinks</h1>
    <ul>
      <li>idk alcohol? does it really matter</li>
    </ul>
    <h1>Dessert</h1>
    <ul>
      <li>Bananas foster over vanilla ice cream</li>
    </ul>
  </Layout>
);

export default IndexPage;
