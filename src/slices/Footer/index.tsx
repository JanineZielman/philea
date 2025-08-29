import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Footer`.
 */
export type FooterProps = SliceComponentProps<Content.FooterSlice>;

/**
 * Component for "Footer" Slices.
 */
const Footer: FC<FooterProps> = ({ slice }) => {
  return (
    <footer
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.footer} />
    </footer>
  );
};

export default Footer;
