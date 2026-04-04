import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'ヨガポーズLab',
  description: 'ヨガポーズ・初心者向け',
  openGraph: { title: 'ヨガポーズLab', description: 'ヨガポーズ・初心者向け', type: 'website', locale: 'ja_JP', siteName: 'ヨガポーズLab' },
  twitter: { card: 'summary_large_image', title: 'ヨガポーズLab', description: 'ヨガポーズ・初心者向け' },
  robots: { index: true, follow: true },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta name="google-site-verification" content="8c64b1447c588760" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SVQXY5C3PW"></script>
        <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SVQXY5C3PW');`}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:`{"@context": "https://schema.org", "@type": "WebSite", "name": "ヨガポーズLab", "description": "ヨガポーズ・初心者向け", "url": "https://yoga-pose-jp.vercel.app", "publisher": {"@type": "Organization", "name": "AOKAE合同会社"}}`}} />
      </head>
      <body>{children}</body>
    </html>
  )
}