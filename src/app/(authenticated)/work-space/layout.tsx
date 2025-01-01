export default function WorkSpaceLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-screen flex bg-slate-muted h-screen">{children}</div>
  );
}
