import React from "react";
import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <div className="contact-clip-path-1">
            <img src="/img/contact-1.webp" alt="" />
          </div>
          <div className="contact-clip-path-2 lg:translate-y-40 translate-y-60">
            <img src="/img/contact-2.webp" alt="" />
          </div>
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <div className="absolute md:scale-125">
            <img src="/img/swordman-partial.webp" alt="" />
          </div>
          <div className="sword-man-clip-path md:scale-125">
            <img src="/img/swordman.webp" alt="" />
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="font-general text-[10px] uppercase">Join Zentry</p>
          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button title="contact us" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;