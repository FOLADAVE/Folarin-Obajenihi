import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Folarin Obajenihi | Frontend Developer | Next.js, React, TypeScript",
    template: "%s | Folarin Obajenihi"
  },
  description:
    "Frontend developer with 3+ years of experience building responsive web applications using Next.js, React, and JavaScript. Delivered production websites for clients including food delivery platforms and business service sites. Based in Lagos, Nigeria.",
  keywords: [
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "JavaScript Developer",
    "Web Developer Lagos",
    "Nigeria Frontend Developer",
    "Folarin Obajenihi",
    "TypeScript Developer",
    "Tailwind CSS",
    "Freelance Web Developer",
    "React.js",
    "Web Development Nigeria",
    "Portfolio Website",
    "Hire Frontend Developer"
  ],
  authors: [{ name: "Folarin Obajenihi" }],
  creator: "Folarin Obajenihi",
  publisher: "Folarin Obajenihi",
  
  // Open Graph metadata (for social media sharing)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://folarin-obajenihi.vercel.app",
    title: "Folarin Obajenihi | Frontend Developer | Next.js, React, TypeScript",
    description:
      "Frontend developer specializing in Next.js, React, and modern web technologies. Building fast, responsive web applications. Available for frontend developer roles.",
    siteName: "Folarin Obajenihi Portfolio",
    images: [
      {
        url: "/Folarin.png", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "Folarin Obajenihi - Frontend Developer"
      }
    ]
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Folarin Obajenihi | Frontend Developer",
    description:
      "Frontend developer building modern web applications with Next.js, React, and TypeScript. Available for frontend developer roles.",
    creator: "@folaz_web", // Replace with your actual Twitter handle or remove if you don't have one
    images: ["/Folarin.png"] // Same image as Open Graph
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification (add these when you set them up)
  verification: {
    // google: "your-google-verification-code", // Add when you set up Google Search Console
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // Category
  category: "technology",
  
  // Alternate languages (if you add multiple languages later)
  alternates: {
    canonical: "https://folarin-obajenihi.vercel.app",
  },

  // App metadata
  applicationName: "Folarin Obajenihi Portfolio",
  
  // Additional tags
  other: {
    "contact:email": "folarinobajenihi@gmail.com",
    "contact:phone_number": "+234-912-286-7131", // Add your actual phone number
    "geo.region": "NG-LA",
    "geo.placename": "Lagos",
    "geo.position": "6.5244;3.3792", // Lagos coordinates
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/Favicon.jpg" />
        <link rel="apple-touch-icon" href="/Favicon.jpg" />
        
        {/* Additional meta tags for better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        
        {/* Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Folarin Obajenihi",
              url: "https://folarin-obajenihi.vercel.app",
              image: "https://folarin-obajenihi.vercel.app/og-image.png",
              jobTitle: "Frontend Developer",
              description: "Frontend developer with 3+ years of experience building responsive web applications using Next.js, React, and JavaScript.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lagos",
                addressCountry: "NG"
              },
              email: "folarinobajenihi@gmail.com",
              sameAs: [
                "https://github.com/FOLADAVE",
                "https://www.linkedin.com/in/folarin-obajenihi-b49a93384",
                "https://x.com/folaz_web"
                // Add Twitter if you have it
              ],
              knowsAbout: [
                "Next.js",
                "React",
                "JavaScript",
                "TypeScript",
                "Tailwind CSS",
                "Web Development",
                "Frontend Development"
              ],
              alumniOf: {
                "@type": "Organization",
                name: "National Open University of Nigeria"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}