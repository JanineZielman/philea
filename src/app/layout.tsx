import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import './global.scss'
import './wordcloud.scss'
import FadeInWrapper from "@/components/FadeInWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FadeInWrapper>{children}</FadeInWrapper>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
