import './globals.css';

export const metadata = {
  title: 'Compliance & Safety Dashboard',
  description: 'AI-powered safety compliance dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}