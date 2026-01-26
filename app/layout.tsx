import React from "react"
import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const GA_MEASUREMENT_ID = 'G-LRMGG69CXY'

const _notoSansKR = Noto_Sans_KR({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kkokgolanding.vercel.app'),
  title: '꼭고 - AI 기반 마이스터고, 특성화고 진학매칭 서비스',
  description: 'AI 데이터 분석으로 아이의 적성에 딱 맞는 마이스터고, 특성화고 학교와 전공을 매칭해 드립니다. 직업계고 진학 고민, 꼭고가 도와드립니다. 지금 무료 적성검사를 시작하세요!',
  generator: 'PADA Labs',
  keywords: ['마이스터고', '특성화고', '직업계고', '진학', '적성검사', 'AI', '진로'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: '꼭고 - AI 기반 마이스터고, 특성화고 진학매칭 서비스',
    description: 'AI 데이터 분석으로 아이의 적성에 딱 맞는 마이스터고, 특성화고 학교와 전공을 매칭해 드립니다. 직업계고 진학 고민, 꼭고가 도와드립니다.',
    url: 'https://kkokgolanding.vercel.app',
    siteName: '꼭고',
    images: [
      {
        url: 'https://kkokgolanding.vercel.app/images/og-image.png',
        width: 1200,
        height: 630,
        alt: '꼭고 - AI 기반 마이스터고, 특성화고 진학매칭 서비스',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '꼭고 - AI 기반 마이스터고, 특성화고 진학매칭 서비스',
    description: 'AI 데이터 분석으로 아이의 적성에 딱 맞는 마이스터고, 특성화고 학교와 전공을 매칭해 드립니다. 직업계고 진학 고민, 꼭고가 도와드립니다.',
    images: ['https://kkokgolanding.vercel.app/images/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
