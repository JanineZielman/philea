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
      <h2>{slice.primary.title}</h2>
      <PrismicRichText field={slice.primary.text} />
      <div className="topics">
        {slice.primary.topics.map((item, i) => (
          <div className="topic" key={`key${i}`}>
            <h3>{item.title}</h3>
            {/* <PrismicRichText field={item.text} /> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyTopics;
