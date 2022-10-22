import React from "react";
import { Heading } from "../common/Heading";
import { contact } from "../data/dummydata";

export const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
          <Heading title="Escribime" />
          <div className="content flexsb">
            <div className="right">
              <form
                action="https://formsubmit.co/a2f57e26db198543ad04dc737db77467"
                method="POST"
              >
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Nombre"
                    data-aos="flip-left"
                    name="name"
                    required
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    data-aos="flip-right"
                    name="email"
                    required
                  />
                </div>
                {/* <input type="email" placeholder="Asunto" data-aos="flip-up" /> */}
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  data-aos="flip-down"
                  name="message"
                ></textarea>
                <button data-aos="zoom-in-up" type="submit">
                  Enviar
                </button>
              </form>
            </div>
            <div className="left">
              {contact.map((item) => (
                <div className="box" data-aos="zoom-in">
                  <i>{item.icon}</i>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
