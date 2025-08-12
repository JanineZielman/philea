'use client'
import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export type DeepDiveProps = SliceComponentProps<Content.DeepDiveSlice>;

// Type for each deepdive item
type DeepDiveItem = Content.DeepDiveSliceDefaultPrimaryDeepdiveItem;

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
      className="deepdives-section"
    >
      <h2>Deepdives</h2>
      <div className="deepdives">
        {slice.primary.deepdive.map((item, i) => (
          <div
            className="deepdive"
            key={`deepdive${i}`}
            data-aos="fade-up"
            data-aos-delay={i * 100} // Staggered delay for fade-up
            onClick={() => openDeepDive(item)}
            style={{ cursor: "pointer" }}
          >
            <span>{item.date}</span>
            <h3>{item.title}</h3>
            <div className="person-link">
              {item.connected_person.map((link, linkIndex) => (
                <PrismicNextLink
                  key={`link${linkIndex}`}
                  field={link}
                />
              ))}
            </div>
            <PrismicNextImage field={item.image} />
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
            <span>{selectedDeepDive.date}</span>
            <h3>{selectedDeepDive.title}</h3>
            <div className="person-link">
              {selectedDeepDive.connected_person.map((personLink, i) => (
                <PrismicNextLink
                  key={`link${i}`}
                  field={personLink}
                />
              ))}
            </div>
            <PrismicNextImage field={selectedDeepDive.image} />
            <div className="modal-body">
              <PrismicRichText field={selectedDeepDive.text} />
              <PrismicRichText field={selectedDeepDive.key_takeaways} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DeepDive;
