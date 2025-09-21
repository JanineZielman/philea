'use client'
import { FC } from "react";
import { Content, KeyTextField } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type FoldableProps = SliceComponentProps<Content.FoldableSlice>;

const Foldable: FC<FoldableProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="foldable"
    >
      <div className="wrapper">
        <h2 data-aos="fade-up">{slice.primary.title}</h2>
        <div data-aos="fade-up">
          <PrismicRichText field={slice.primary.text} />
        </div>
        <div className="fold-section">
          {slice.primary.foldable.map((item, index) => (
            <FoldItem
              key={index}
              title={item.title}
              link={item.link_to_section}
              delay={index * 100} // 👈 pass delay instead of using key
            />
          ))}
        </div>

        <div className="credits" data-aos="fade-up">
          <PrismicRichText field={slice.primary.credits}/>
        </div>
      </div>
    </section>
  );
};

type FoldItemProps = {
  title: KeyTextField;     // string | null   
  delay?: number;          // 👈 new prop
  link: KeyTextField;
};

const FoldItem: FC<FoldItemProps> = ({ title, link, delay = 0 }) => {
  return (
    <div className="fold">
      <a
        className="fold-title"
        data-aos="fade-left"
        data-aos-delay={delay} // 👈 use delay instead of key
        href={link ? link : '#'}
      >
        <span>{title ?? "Untitled"}</span>
      </a>
    </div>
  );
};

export default Foldable;
