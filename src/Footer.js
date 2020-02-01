import React from "react";

const adress = ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"];

const Footer = () => (
  <ul className="footer">
    {adress.map((line, i) => (
      <li key={i}>{line}</li>
    ))}
  </ul>
);

export default Footer;
