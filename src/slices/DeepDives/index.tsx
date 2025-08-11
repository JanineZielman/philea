import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `DeepDive`.
 */
export type DeepDiveProps = SliceComponentProps<Content.DeepDiveSlice>;

/**
 * Component for "DeepDive" Slices.
 */
const DeepDive: FC<DeepDiveProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="deepdives-section"
    >
      <h2>Deepdives</h2>
      <div className="deepdives">
        {slice.primary.deepdive.map((item, i) => (
          <div className="deepdive" key={`deepdive${i}`}>
            <h3>{item.title}</h3>
            <span>{item.date}</span>
            <PrismicNextImage field={item.image} />            
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeepDive;
