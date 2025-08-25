'use client'
import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { isFilled } from "@prismicio/client";
import { RTTextNode } from "@prismicio/client";

export type DeepDiveProps = SliceComponentProps<Content.DeepDiveSlice>;

// Type for each deepdive item
type DeepDiveItem = Content.DeepDiveSliceDefaultPrimaryCarouselItem;

const DeepDive: FC<DeepDiveProps> = ({ slice }) => {
  const [selectedDeepDive, setSelectedDeepDive] = useState<DeepDiveItem | null>(null);

  const openDeepDive = (deepDive: DeepDiveItem) => {
    setSelectedDeepDive(deepDive);
  };

  const closeDeepDive = () => {
    setSelectedDeepDive(null);
  };


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="organizations-section"
    >
      {slice.primary.carousel.length > 1 &&
        <h2>Organizations</h2>
      }
      <div className={`organizations ${slice.primary.carousel.length > 1}`}>
        {slice.primary.carousel.map((item, i) => (
          <div
            className="organization"
            key={`organization${i}`}
            data-aos="fade-up"
            data-aos-delay={i * 100} // Staggered delay for fade-up
            onClick={() => openDeepDive(item)}
            style={{ cursor: "pointer" }}
          >
            <h3>{item.title}</h3>
            {isFilled.richText(item.text)  && (
              <p>{(item.text[0] as RTTextNode).text}</p>
            )}
          </div>
        ))}
      </div>

      {selectedDeepDive && (
        <div className="modal-overlay" onClick={closeDeepDive}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // prevent overlay click from closing
          >
            <button className="modal-close" onClick={closeDeepDive}>
              ✕
            </button>
            <h3>{selectedDeepDive.title}</h3>
            <div className="modal-body">
              <PrismicRichText field={selectedDeepDive.text} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DeepDive;
