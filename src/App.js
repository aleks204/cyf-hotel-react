import React from "react";

import Bookings from "./Bookings";
import "./App.css";

import Heading from "./Heading.js";
import Footer from "./Footer.js";
import TouristInfoCard from "./TouristInfoCard.js";
import Restaurant from "./Restaurant";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="cards">
        <TouristInfoCard
          Name="Glasgow"
          text="Whether you live in Scotland or Nova Scotia, getting to Glasgow is simple. Find out all the essential information for travelling to Glasgow for a holiday or vacation by rail, air, car, or by sea. Need accommodation for your short break too?"
          link="https://peoplemakeglasgow.com/"
          pic="https://images.pexels.com/photos/208308/pexels-photo-208308.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <TouristInfoCard
          Name="Manchester"
          text="As one of the most vibrant and cosmopolitan cities in the UK, there’s always something on in Manchester. With a rolling calendar of events, exhibitions, concerts, markets and theatre you’ll never be stuck for world-class entertainment."
          link="https://www.visitmanchester.com/"
          pic="https://images.pexels.com/photos/350755/pexels-photo-350755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <TouristInfoCard
          Name="London"
          text="Take a look at our guide to what’s on in London so you don’t miss any of London’s must - see events.Find out what to do on your trip or weekend break to London, including top exhibitions, London theatre shows and world - class special events."
          link="https://www.visitlondon.com/"
          pic="https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
      </div>
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;
