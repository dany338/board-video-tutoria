interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({
  children,
}: LayoutProps) {
  return (
    <div className="flex flex-col gap-y-4">
      <nav className="text-xs p-1 bg-red-500 text-white">
        I am a reusable navbar!
      </nav>
      <h1>I am a layout</h1>
      {children}
    </div>
  );
}