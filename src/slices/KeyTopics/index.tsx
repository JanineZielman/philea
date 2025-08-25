'use client'
import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `KeyTopics`.
 */
export type KeyTopicsProps = SliceComponentProps<Content.KeyTopicsSlice>;

const KeyTopics: FC<KeyTopicsProps> = ({ slice }) => {
  // Track which topic is expanded
  const [expandedTopics, setExpandedTopics] = useState<{ [key: number]: boolean }>({});

  const toggleTopic = (index: number) => {
    setExpandedTopics((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="keytopics"
    >
      <h2 data-aos="fade-up">{slice.primary.title}</h2>

      <div className="topics">
        {slice.primary.topics.map((item, i) => {
          const isExpanded = expandedTopics[i] || false;

          return (
            <div
              className={`topic ${i % 2 === 1 ? "alt-color" : ""}`}
              key={`key${i}`}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <h3>{item.title}</h3>

              <div className={`topic-text ${isExpanded ? "expanded" : "collapsed"}`}>
                <PrismicRichText field={item.text} />
              </div>

              <button
                onClick={() => toggleTopic(i)}
                className="readmore-btn"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default KeyTopics;
