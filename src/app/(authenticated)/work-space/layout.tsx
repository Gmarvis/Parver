interface WorkSpaceLayoutProps{
  children: React.ReactNode
}
export function WorkSpaceLayout(props: WorkSpaceLayoutProps) {
  return (
    <div className="w-screen flex">
  
      <div>
        {props.children}
      </div>
    </div>
  );
}

export default WorkSpaceLayout;
