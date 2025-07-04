"use client";

import React from "react";
// import Image from "next/image"; // Optional: Uncomment if you want to use optimized Image component

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">Success Stories</h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          {/* Infinite moving testimonial cards */}
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        {/* Company logos */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <div
              key={company.id}
              className="flex md:max-w-60 max-w-32 gap-2 items-center"
            >
              <img
                src={company.nameImg}
                alt={`Company ${company.id}`}
                width={company.id === 4 || company.id === 5 ? 100 : 150}
                className="md:w-24 w-20"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
