// import { Metadata } from "next";
import { notFound } from "next/navigation";

import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import BackLink from "@/components/BackLink"; // 👈 import client component

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("deepdive", uid).catch(() => notFound());

  return (
    <div className="deepdive">
      <div className="circle" id="circle"></div>
      <div className="full-bio">
        <div className="wrapper">
          <PrismicRichText field={page.data.bio} />
        </div>
      </div>
      <BackLink className="back" />
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
