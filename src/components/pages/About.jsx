import React from "react";
import { Heading } from "../common/Heading";
import { about } from "../data/dummydata";

export const About = () => {
  return (
    <>
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-right">
                <img src={val.cover} alt="" id="mani" />
              </div>
              <div className="right" data-aos="fade-down-left">
                <Heading title="Acerca de mi" />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <Heading title="Tools" />

                <img
                  src="https://xfrancool.github.io/imgit/skill.jpg"
                  alt=""
                  id="tools"
                  title="Skill"
                />
                <br />
                <a
                  download
                  href="./pdf/cv.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Download CV</button>
                </a>
                {/*  <button className="primaryBtn">Download CV</button> */}
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};
