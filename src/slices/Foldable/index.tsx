'use client'
import { FC, useState } from "react";
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
      <h2 data-aos="fade-up">{slice.primary.title}</h2>
      <div data-aos="fade-up">
        <PrismicRichText field={slice.primary.text} />
      </div>
      <div className="fold-section">
        {slice.primary.foldable.map((item, index) => (
          <FoldItem key={index} title={item.title} text={item.text} />
        ))}
      </div>

      <div className="credits" data-aos="fade-up">
        <PrismicRichText field={slice.primary.credits}/>
      </div>
    </section>
  );
};

type FoldItemProps = {
  title: KeyTextField;     // This is string | null
  text: RichTextField;     // This is the correct type for rich text
};

const FoldItem: FC<FoldItemProps> = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fold">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="fold-title"
        data-aos="fade-up"
      >
        <span>{title ?? "Untitled"}</span>
        <span>{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && (
        <div className="fold-text">
          <PrismicRichText field={text} />
        </div>
      )}
    </div>
  );
};

export default Foldable;
