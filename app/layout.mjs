export const metadata = {
  title: 'AnalytiX - Website Analytics',
  description: 'Track and analyze your website visitors in real-time',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}