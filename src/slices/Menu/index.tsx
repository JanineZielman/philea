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
        <h2>{slice.primary.title}</h2>
        <div>
          <PrismicRichText field={slice.primary.text} />
        </div>
        <div className="fold-section">
          {slice.primary.foldable.map((item, index) => (
            <FoldItem
              key={index}
              title={item.title}
              link={item.link_to_section}
            />
          ))}
        </div>

        <div className="credits">
          <PrismicRichText field={slice.primary.credits}/>
        </div>
      </div>
    </section>
  );
};

type FoldItemProps = {
  title: KeyTextField;     // string | null   
  link: KeyTextField;
};

const FoldItem: FC<FoldItemProps> = ({ title, link }) => {
  return (
    <div className="fold">
      <a
        className="fold-title"
        href={link ? link : '#'}
      >
        <span>{title ?? "Untitled"}</span>
      </a>
    </div>
  );
};

export default Foldable;
