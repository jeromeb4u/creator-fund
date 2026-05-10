import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CreatorFund - Free Money for Creators',
  description: 'Discover grants, scholarships, and funding programs from brands, platforms, and governments. Built for creators who don\'t have agents.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
