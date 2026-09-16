import "./globals.css";

export const metadata = {
  title: "Vanta Fundación",
  description: "Sitio en construcción - Vanta Fundación",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ backgroundColor: '#ffffff', margin: 0, fontFamily: 'Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}