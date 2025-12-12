import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Smart City AI LLC',
  description: '日本の企業にAIの力を。生産性革命で未来を創る。',
  // ▼▼▼ ここが修正ポイント：アイコンの場所を明示的に指定 ▼▼▼
  icons: {
    icon: '/icon.png',  // publicフォルダの icon.png を読みに行きます
    apple: '/icon.png', // iPhone用にも同じ画像を指定
  },
  // ▲▲▲ 修正ここまで ▲▲▲
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      {/* 構造化データ（Google検索用） */}
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Smart City AI LLC",
              "url": "https://www.smartcityai.co.jp",
              "logo": "https://www.smartcityai.co.jp/icon.png",
              "image": "https://www.smartcityai.co.jp/icon.png",
              "description": "日本の企業にAIの力を。生産性革命で未来を創る。",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Kanagawa",
                "addressLocality": "Yokohama",
                "addressCountry": "JP"
              }
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
