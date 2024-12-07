import { PropsWithChildren } from "react";


interface WorkSpaceLayoutProps extends PropsWithChildren {
  name: string;
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
