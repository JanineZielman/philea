// import { Metadata } from "next";
import { notFound } from "next/navigation";

import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("deepdive", uid).catch(() => notFound());

  // <SliceZone> renders the page's slices.
  return (
    <div className="deepdive">
      <div className="hero">
       <h1>{page.data.title}</h1>
       <p>{page.data.subtitle}</p>
        <PrismicNextImage field={page.data.image} />
      </div>
      <div className="content">
        <div className="wrapper quote">
          <PrismicRichText field={page.data.quote} />
        </div>
         <div className="keys">
          <h2>Key Takeaways</h2>
          <PrismicRichText field={page.data.key_takeaways} />
        </div>
        <div className="wrapper">
          <PrismicRichText field={page.data.text} />
        </div>
        <div className="bio">
          <div className="bio-wrapper">
            <PrismicRichText field={page.data.bio} />
          </div>
        </div>
      </div>
    </div>
  );
}

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<Params>;
// }): Promise<Metadata> {
//   const { uid } = await params;
//   const client = createClient();
//   const page = await client.getByUID("deepdive", uid).catch(() => notFound());

//   return {
//     title: asText(page.data.title),
//     description: page.data.meta_description,
//     openGraph: {
//       title: page.data.meta_title ?? undefined,
//       images: [{ url: page.data.meta_image.url ?? "" }],
//     },
//   };
// }

export async function generateStaticParams() {
  const client = createClient();

  // Get all pages from Prismic, except the homepage.
  const pages = await client.getAllByType("deepdive");

  return pages.map((page) => ({ uid: page.uid }));
}
