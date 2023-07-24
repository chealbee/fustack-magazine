"use client";

import React from "react";
import img from "@/public/images/computer.png";
import monitor from "@/public/images/monitor.png";
import rtx from "@/public/images/rtx.png";
import Image from "next/image";
import "./slider.scss";

import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import OutlineButton from "@/app/components/ui/buttons/outline/OutlineButton";

const MainSlider = () => {
  return (
    <div>
      <CarouselProvider
        className="mainSlider"
        naturalSlideWidth={100}
        naturalSlideHeight={120}
        totalSlides={3}
        isPlaying
        interval={3000}
      >
        <Slider className="mainSlider__slider">
          <Slide className="mainSlider__slide" index={0}>
            <div className="mainSlider__content">
              <div>
                <div className="mainSlider__decor">
                  GeForce RTX 40 Series Graphics Cards
                </div>
                <div className="mainSlider__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  nihil ipsam possimus, explicabo dicta ullam molestias corporis
                  eaque odio a
                </div>
                <OutlineButton cn="mainSlider__button">
                  show details
                </OutlineButton>
              </div>
              <div className="mainSlider__image">
                <Image src={rtx} alt="img" />
              </div>
            </div>
          </Slide>
          <Slide index={1} tabIndex={1}>
            <div className="mainSlider__content">
              <div>
                <div className="mainSlider__decor">
                  AOC Gaming CQ27G2U 80 cm
                </div>
                <div className="mainSlider__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  nihil ipsam possimus, explicabo dicta ullam molestias corporis
                  eaque odio a
                </div>
                <OutlineButton cn="mainSlider__button">
                  show details
                </OutlineButton>
              </div>
              <div className="mainSlider__image">
                <Image src={monitor} alt="img" />
              </div>
            </div>
          </Slide>
          <Slide index={2} tabIndex={2}>
            <div className="mainSlider__content">
              <div>
                <div className="mainSlider__decor">Lenovo Legion T5 26AMR5</div>
                <div className="mainSlider__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  nihil ipsam possimus, explicabo dicta ullam molestias corporis
                  eaque odio a
                </div>
                <OutlineButton cn="mainSlider__button">
                  show details
                </OutlineButton>
              </div>
              <div className="mainSlider__image">
                <Image src={img} alt="img" />
              </div>
            </div>
          </Slide>
        </Slider>
      </CarouselProvider>
    </div>
  );
};

export default MainSlider;
