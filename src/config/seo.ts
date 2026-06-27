import type { DefaultSeoProps } from 'next-seo';

const seoConfig: DefaultSeoProps = {
  titleTemplate: "%s | Divendra Paramendran",
  defaultTitle: "Divendra Paramendran – Full Stack Developer",
  description: "Portfolio of Divendra Paramendran, a Full Stack Developer specializing in scalable backend systems and AI applications.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://divendra.dev",
    site_name: "Divendra Portfolio",
    images: [{
      url: "https://divendra.dev/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Divendra Portfolio",
    }],
  },
  twitter: {
    handle: "@divendra",
    site: "@divendra",
    cardType: "summary_large_image",
  },
};

export default seoConfig;
