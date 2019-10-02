import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Curie, Danielle, and Aryn's Pizza Par-tayyy!" />
    <p>
      To commemorate the end of the semester's first midterm CHAOS, we are
      throwing a hand-made pizza party /kickback! Pls enjoy our CLASSSYYYYY
      invitation!
    </p>
    <p>
      <b style={{ fontFamily: `Great Vibes`, fontSize: `2em` }}>When:</b>{" "}
      Saturday, October 5th at 8 PM
    </p>
    <p>
      <b style={{ fontFamily: `Great Vibes`, fontSize: `2em` }}>Where:</b> 55
      East Green St
    </p>
    <p>
      <b style={{ fontFamily: `Great Vibes`, fontSize: `2em` }}>
        Requirements Upon Arrival:
      </b>{" "}
      <ul>
        <li>
          Drinking one shot / one bottle of beer for every 50 lbs you weigh
          otherwise you WILL be thrown out!
        </li>
        <li>NO CS 374 TALK (DFA, NFA, REGEX ARE TABOOOO!)</li>
      </ul>
    </p>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeZMWdsGLN4p96EEqr774VXljzSy0gSyLo4QEy7lb4rpsYHQA/viewform?usp=sf_link">
      <button
        class="btn default"
        style={{ fontFamily: `Great Vibes`, fontSize: `2em` }}
      >
        {"{rsvp}"}
      </button>
    </a>
    <Link to="/menu">
      <button
        class="btn default"
        style={{ fontFamily: `Great Vibes`, fontSize: `2em` }}
      >
        {"{menu}"}
      </button>
    </Link>
  </Layout>
);

export default IndexPage;
