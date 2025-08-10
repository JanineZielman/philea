import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Wordcloud`.
 */
export type WordcloudProps = SliceComponentProps<Content.WordcloudSlice>;

/**
 * Component for "Wordcloud" Slices.
 */
const Wordcloud: FC<WordcloudProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="wordcloud-wrapper"
    > 
      <div className="text">
        <h2>{slice.primary.title}</h2>
        <PrismicRichText field={slice.primary.text} />
      </div>
      <div className="wordcloud">
        {slice.primary.words.map((item, i) => (
          <p key={`word${i}`} className="word">{item.word}</p>
        ))}
      </div>
    </section>
  );
};

export default Wordcloud;
