import "./globals.css";

export const metadata = {
  title: "RevisaPrev Project",
  description: "Project demonstrating a well-organized structure for Next.js applications with reusable components, responsive design, and clear organization.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}
