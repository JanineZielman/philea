import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ImageText`.
 */
export type ImageTextProps = SliceComponentProps<Content.ImageTextSlice>;

/**
 * Component for "ImageText" Slices.
 */
const ImageText: FC<ImageTextProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="image-text"
    >
      <h2 data-aos="fade-up">{slice.primary.title}</h2>
      <div data-aos="fade-up">
        <PrismicRichText field={slice.primary.text} />
      </div>
    </section>
  );
};

export default ImageText;
