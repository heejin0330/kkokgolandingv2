import React from "react"
import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _notoSansKR = Noto_Sans_KR({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: '꼭고 - 마이스터고 & 특성화고 진학 AI 매칭 서비스',
  description: 'AI 데이터 분석으로 아이의 적성에 딱 맞는 학교와 전공을 매칭해 드립니다. 마이스터고와 특성화고 사이에서 고민하시나요? 꼭고가 도와드립니다.',
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
