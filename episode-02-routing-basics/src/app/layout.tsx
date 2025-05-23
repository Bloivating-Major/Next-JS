import { Metadata } from "next";
import Link from "next/link";


// This is Metadata
export const metadata : Metadata = {
  title: "Episode 03 Learning Meta Data",
  description: "Generated by create next app",
}


export default function RootLayout({
  children,
}: {
  // so this is the type of children
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
            <Link href="/team">Team</Link>
            <Link href="/about">About</Link>
            <Link href="/team/about">About Team</Link>
          </li>
        </ul>
      </nav>
      <h1>Hi From Layout 1</h1>
      <body>{children}</body>
    </html>
  );
}
