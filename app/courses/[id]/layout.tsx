import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Course | Coursat Academy",
  description: "One course page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="container">{children}</div>
    </>
  );
}
