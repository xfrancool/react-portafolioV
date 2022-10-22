import React from "react";
import { social } from "../data/dummydata";

const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item) => (
          <>
            <a href={item.src} target="_blank" rel="noreferrer">
              <i data-aos="zoom-in">{item.icon}</i>
            </a>
          </>
        ))}
        <p data-aos="zoom-in">
          &copy; Todos los derechos reservados |{" "}
          <a
            href="https://portafolio-jobs.netlify.app/"
            target="_blank"
            rel="noreferrer"
            id
          >
            Franeli
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
