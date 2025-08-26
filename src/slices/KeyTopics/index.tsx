'use client'
import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `KeyTopics`.
 */
export type KeyTopicsProps = SliceComponentProps<Content.KeyTopicsSlice>;

const KeyTopics: FC<KeyTopicsProps> = ({ slice }) => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="keytopics"
    >
      <h2 data-aos="fade-up">{slice.primary.title}</h2>

      <div className="topics">
        {slice.primary.topics.map((item, i) => {
          return (
            <div
              className={`topic ${i % 2 === 1 ? "alt-color" : ""}`}
              key={`key${i}`}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <h3>{item.title}</h3>

              <div className={`topic-text`}>
                <PrismicRichText field={item.text} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default KeyTopics;
