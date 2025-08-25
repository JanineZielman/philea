'use client'
import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Deepdives`.
 */
export type DeepdivesProps = SliceComponentProps<Content.DeepdivesSlice>;

/**
 * Component for "Deepdives" Slices.
 */
const Deepdives: FC<DeepdivesProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.primary.deepdives.map((page, i) => {
        const deepdive = page.deepdive;

        if (!isFilled.contentRelationship(deepdive)) {
          return null;
        }

        // ✅ assert that data exists
        const { data } = deepdive as typeof deepdive & {
          data: NonNullable<typeof deepdive.data>;
        };

        return (
          <div className="deepdive" key={i}>
            <div className="hero">
              <h1 data-aos="fade-up">{data.title}</h1>
              <p>{data.subtitle}</p>
              <PrismicNextImage data-aos="zoom-in" field={data.image} />
            </div>

            <div className="content">
              {data.quote && (
                <div data-aos="fade-up" className="wrapper quote">
                  <PrismicRichText field={data.quote} />
                </div>
              )}

              {data.key_takeaways && (
                <div className="keys" data-aos="zoom-in-up">
                  <h2>Key Takeaways</h2>
                  <PrismicRichText field={data.key_takeaways} />
                </div>
              )}

              {data.text && (
                <div data-aos="fade-up" className="wrapper">
                  <PrismicRichText field={data.text} />
                </div>
              )}

              {data.bio && (
                <div className="bio">
                  <div className="bio-wrapper" data-aos="zoom-in-up">
                    <PrismicRichText field={data.bio} />
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Deepdives;
