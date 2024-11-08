import './globals.css';

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="es">
      <body className="body-bg">
        {children}
      </body>
    </html>
  );
};
