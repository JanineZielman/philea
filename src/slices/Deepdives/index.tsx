'use client'
import { FC, useEffect, useRef, useState } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type DeepdivesProps = SliceComponentProps<Content.DeepdivesSlice>;

const Deepdives: FC<DeepdivesProps> = ({ slice }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [menuFixed, setMenuFixed] = useState(false);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setMenuFixed(entry.isIntersecting),
      { threshold: 0 } // triggers when section enters viewport
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="deepdives-section"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* Fixed number menu */}
      <div className={`deepdives-menu ${menuFixed ? 'fixed' : ''}`}>
        {slice.primary.deepdives.map((_, i) => (
          <button
            key={i}
            onClick={() => handleScroll(`deepdive-${i}`)}
            className="deepdives-menu-button"
          >
            {i + 1}
          </button>
        ))}
      </div>

      {slice.primary.deepdives.map((page, i) => {
        const deepdive = page.deepdive;
        if (!isFilled.contentRelationship(deepdive)) return null;
        const { data } = deepdive as typeof deepdive & {
          data: NonNullable<typeof deepdive.data>;
        };

        return (
          <div id={`deepdive-${i}`} className="deepdive" key={i}>
            <div className="hero">
              <h1 data-aos="fade-up">{data.title}</h1>
              <p data-aos="fade-up">{data.subtitle}</p>
              <PrismicNextImage data-aos="zoom-in" field={data.image} />
            </div>

            <div className="content">
              {data.quote && <div className="wrapper quote" data-aos="fade-up"><PrismicRichText field={data.quote} /></div>}
              {data.key_takeaways && <div className="keys"><h2>Key Takeaways</h2><PrismicRichText field={data.key_takeaways} /></div>}
              <div className="flex-wrap">
                {data.text && <div className="text-content" data-aos="fade-up"><PrismicRichText field={data.text} /></div>}
                {data.bio && <div className="bio">
                  <div className="bio-wrapper" data-aos="zoom-in-up">
                    <PrismicRichText field={data.bio} />
                  </div>
                </div>}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Deepdives;
