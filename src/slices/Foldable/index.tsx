'use client'
import { FC } from "react";
import { Content, KeyTextField, RichTextField } from "@prismicio/client";
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
              text={item.text}
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
  text: RichTextField;     // rich text
  delay?: number;          // 👈 new prop
};

const FoldItem: FC<FoldItemProps> = ({ title, text, delay = 0 }) => {
  return (
    <div className="fold">
      <div
        className="fold-title"
        data-aos="fade-left"
        data-aos-delay={delay} // 👈 use delay instead of key
      >
        <span>{title ?? "Untitled"}</span>
      </div>
      <div className="fold-text">
        <PrismicRichText field={text} />
      </div>
    </div>
  );
};

export default Foldable;
