import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import './global.scss'
import './wordcloud.scss'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
