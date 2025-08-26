import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import BackLink from "@/components/BackLink";

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
      <div className="wrapper">
        <h2 data-aos="fade-up" data-aos-delay="500">{slice.primary.title}</h2>
        <div data-aos="fade-up" data-aos-delay="500">
          <PrismicRichText field={slice.primary.text} />
        </div>
      </div>
      <BackLink className="back" />
    </section>
  );
};

export default ImageText;
