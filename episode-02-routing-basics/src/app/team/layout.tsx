export default function TeamLayout({
  children,
}: {
  // so this is the type of children
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Hello This is Layout 2</h1>
      {children}
    </>
  );
}
