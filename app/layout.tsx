
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Alpha Male Mentorship | Unlock Your Inner Chad™ - Alex Kielkucki",
    description: "Transform into the ultimate alpha male with Alex Kielkucki's revolutionary mentorship system. Learn dating strategies, male vitality secrets, and sigma grindset mindset. Warning: This is satirical content!",
    keywords: [
        "alpha male mentorship",
        "dating advice",
        "male self-improvement",
        "sigma grindset",
        "masculinity coaching",
        "looksmaxxing",
        "chad transformation",
        "satirical content",
        "parody",
        "comedy"
    ],
    authors: [{ name: "Alex Kielkucki" }],
    creator: "Alex Kielkucki",
    publisher: "Alpha Male Mentorship",
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
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://your-domain.com',
        siteName: 'Alpha Male Mentorship',
        title: 'Alpha Male Mentorship | Unlock Your Inner Chad™',
        description: 'Revolutionary alpha male transformation system. Learn dating strategies, mindset mastery, and male vitality secrets. (Satirical content)',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Alpha Male Mentorship - Satirical Dating Advice',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Alpha Male Mentorship | Unlock Your Inner Chad™',
        description: 'Revolutionary alpha male transformation system. (Satirical content)',
        images: ['/twitter-image.jpg'],
        creator: '@yourtwitterhandle',
    },
    alternates: {
        canonical: 'https://your-domain.com',
    },
    other: {
        'theme-color': '#dc2626',
        'msapplication-TileColor': '#dc2626',
        'apple-mobile-web-app-status-bar-style': 'black-translucent',
    },
    category: 'Entertainment',
    classification: 'Satirical Content',
    verification: {
        google: 'your-google-verification-code',
        // yandex: 'your-yandex-verification-code',
        // yahoo: 'your-yahoo-verification-code',
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            {/* Additional meta tags */}
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-title" content="Alpha Male Mentorship" />
            <meta name="application-name" content="Alpha Male Mentorship" />

            {/* Favicon and app icons */}
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="icon" href="/icon.svg" type="image/svg+xml" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/manifest.json" />

            {/* Preconnect to external domains for performance */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link rel="preconnect" href="https://www.youtube.com" />
            <link rel="preconnect" href="https://i.ytimg.com" />

            {/* Schema.org structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Alpha Male Mentorship",
                        "description": "Satirical alpha male mentorship and dating advice content",
                        "url": "https://your-domain.com",
                        "author": {
                            "@type": "Person",
                            "name": "Alex Kielkucki"
                        },
                        "genre": ["Satire", "Comedy", "Parody"],
                        "keywords": "alpha male, satirical content, dating advice parody, masculinity comedy",
                        "inLanguage": "en-US",
                        "copyrightYear": new Date().getFullYear(),
                        "disclaimer": "This content is satirical and for entertainment purposes only."
                    })
                }}
            />
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}