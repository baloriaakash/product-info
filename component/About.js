import React from "react";
import { Userclass } from "./Userclass";
let About = () => {
  return (
    <div className="about-us">
      <h1 className="about-us-title">About Us</h1>

      <div className="about-section">
        <h2 className="section-title">Building Products with React.js</h2>
        <p className="section-content">
          At, we specialize in creating innovative, high-performance digital
          products using React.js, a leading JavaScript library for building
          user interfaces. Our mission is to deliver seamless, scalable, and
          engaging web solutions tailored to meet the unique needs of our
          clients.
        </p>
      </div>

      <div className="about-section">
        <h3 className="section-title">Why React.js?</h3>
        <p className="section-content">
          React.js empowers us to craft dynamic and interactive user experiences
          with exceptional speed and efficiency. Its component-based
          architecture allows us to build reusable, modular elements that ensure
          consistency and scalability across all our projects.
        </p>
      </div>

      <div className="about-section">
        <h3 className="section-title">What We Do</h3>
        <ul className="section-list">
          <li>Custom Product Pages</li>
          <li>Company Profile Pages</li>
          <li>Dynamic Web Applications</li>
        </ul>
      </div>

      <div className="about-section">
        <h3 className="section-title">Our Approach</h3>
        <ol className="section-list">
          <li>User-Centric Design</li>
          <li>Performance Optimization</li>
          <li>Customization & Scalability</li>
          <li>Data-Driven Insights</li>
        </ol>
      </div>

      <div className="about-section">
        <h3 className="section-title">Our Commitment</h3>
        <p className="section-content">
          We are passionate about leveraging cutting-edge technology to create
          meaningful digital experiences. Partner with us to transform your
          vision into reality with the power of React.js.
        </p>
      </div>

      <div className="about-footer">
        <h2>Let's build something extraordinary together!</h2>
      </div>
    </div>
  );
};

export default About;
// export class About extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <>
//         <h1> about</h1>
//         <p></p>

//         <Userclass name={"akash"} destination={"dhramshala"}></Userclass>
//       </>
//     );
//   }
// }
