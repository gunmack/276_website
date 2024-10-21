export const metadata = {
    title: "My projects", 
    image: "favicon.ico"
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }
  