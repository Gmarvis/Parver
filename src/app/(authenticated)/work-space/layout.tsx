export default function WorkSpaceLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-screen flex">
      <div>{children}</div>
    </div>
  );
}
