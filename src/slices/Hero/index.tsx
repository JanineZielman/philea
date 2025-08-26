'use client'
import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="hero"
    >
      <div className="circle" id="circle"></div>
      <h1 data-aos="zoom-in-up" data-aos-delay="1000">{slice.primary.title}</h1>
      <div data-aos="zoom-in-up" data-aos-delay="1200">
        <PrismicRichText field={slice.primary.text} />
      </div>
      <PrismicNextImage data-aos="zoom-in-up" data-aos-delay="1400" field={slice.primary.image} />
    </section>
  );
};

export default Hero;
