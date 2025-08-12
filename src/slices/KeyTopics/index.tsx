'use client'
import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `KeyTopics`.
 */
export type KeyTopicsProps = SliceComponentProps<Content.KeyTopicsSlice>;

const KeyTopics: FC<KeyTopicsProps> = ({ slice }) => {
  const [popupData, setPopupData] = useState<{
    text: Content.KeyTopicsSliceDefaultPrimaryTopicsItem["text"] | null;
    index: number | null;
  }>({ text: null, index: null });

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="keytopics"
    >
      <h2 data-aos="fade-up">{slice.primary.title}</h2>
      <div data-aos="fade-up">
        <PrismicRichText field={slice.primary.text} />
      </div>

      <div className="topics">
        {slice.primary.topics.map((item, i) => (
          <div
            className={`topic cursor-pointer ${i % 2 === 1 ? "alt-color" : ""}`} // alternating topic colors
            key={`key${i}`}
            onClick={() => setPopupData({ text: item.text, index: i })}
          >
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      {popupData.text && (
        <div
          className={`popup-topics ${popupData.index !== null && popupData.index % 2 === 1 ? "alt-color" : ""}`}
          onClick={() => setPopupData({ text: null, index: null })}
        >
          <div
            className="wrapper"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <div
              onClick={() => setPopupData({ text: null, index: null })}
              className="close"
            >
              X
            </div>
            <PrismicRichText field={popupData.text} />
          </div>
        </div>
      )}
    </section>
  );
};

export default KeyTopics;
