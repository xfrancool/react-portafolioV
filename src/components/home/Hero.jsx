import React, { useEffect } from "react";
import { home } from "../data/dummydata";
import Typewriter from "typewriter-effect";

export const Hero = () => {
  return (
    <>
      <section className="hero">
        {home.map((val, i) => (
          <div className="heroContent">
            <h3 className="fontSize" data-aos="fade-right">
              {val.text}
            </h3>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    `${val.text1}`,
                    `${val.text2}`,
                    `${val.text3}`,
                    `${val.text4}`,
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos="fade-left">{val.desc}</p>
            {/* <button className='primaryBtn' data-aos='fade-up-right'>
              Download CV
            </button> */}
          </div>
        ))}
      </section>
    </>
  );
};
