'use client'
import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type FoldableProps = SliceComponentProps<Content.FoldableSlice>;

const Foldable: FC<FoldableProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="foldable"
    >
      <h2>{slice.primary.title}</h2>
      <PrismicRichText field={slice.primary.text} />

      <div className="fold-section">
        {slice.primary.foldable.map((item, index) => (
          <FoldItem key={index} title={item.title} text={item.text} />
        ))}
      </div>
      <div className="credits">
        <PrismicRichText field={slice.primary.credits}/>
      </div>
    </section>
  );
};

type FoldItemProps = {
  title: string | null;
  text: any;
};

const FoldItem: FC<FoldItemProps> = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fold">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="fold-title"
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
