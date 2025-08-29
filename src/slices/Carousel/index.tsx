'use client'
import { FC, useState } from "react";
import { Content, isFilled, RTTextNode } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

export type DeepDiveProps = SliceComponentProps<Content.DeepDiveSlice>;

// Type for each deepdive item
type DeepDiveItem = Content.DeepDiveSliceDefaultPrimaryCarouselItem;

const DeepDive: FC<DeepDiveProps> = ({ slice }) => {
  const [selectedDeepDive, setSelectedDeepDive] = useState<DeepDiveItem | null>(null);

  const multipleItems = slice.primary.carousel.length > 1;

  const openDeepDive = (deepDive: DeepDiveItem) => {
    if (multipleItems) {
      setSelectedDeepDive(deepDive);
    }
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
      {multipleItems && <h2>FIND Members</h2>}

      <div className={`organizations ${multipleItems}`}>
        {slice.primary.carousel.map((item, i) => {
          const content = (
            <>
              <h3>{item.title}</h3>
              {isFilled.richText(item.text) && (
                <p>{(item.text[0] as RTTextNode).text}</p>
              )}
            </>
          );

          // 👉 If multiple items: open modal on click
          if (multipleItems) {
            return (
              <div
                className="organization"
                key={`organization${i}`}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {content}
                <div className="arrow-link" onClick={() => openDeepDive(item)}></div>
              </div>
            );
          }

          // 👉 If only one item: link to a dedicated page
          return (
            <Link
              href={`/brussel`} // assuming `uid` is on the item’s linked doc
              key={`organization${i}`}
              className="organization"
              data-aos="fade-up"
              scroll={true}
            >
              {content}
            </Link>
          );
        })}
      </div>

      {/* Modal only appears for multiple items */}
      {multipleItems && selectedDeepDive && (
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
