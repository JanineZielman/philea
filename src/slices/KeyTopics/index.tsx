import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `KeyTopics`.
 */
export type KeyTopicsProps = SliceComponentProps<Content.KeyTopicsSlice>;

/**
 * Component for "KeyTopics" Slices.
 */
const KeyTopics: FC<KeyTopicsProps> = ({ slice }) => {
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
          <div className="topic" key={`key${i}`}>
            <p>{item.title}</p>
            {/* <PrismicRichText field={item.text} /> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyTopics;
