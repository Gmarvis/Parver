import { PropsWithChildren } from "react";


interface WorkSpaceLayoutProps extends PropsWithChildren {
  name: string;
}
export default function Layout(props: WorkSpaceLayoutProps) {
  return (
    <div className="w-screen flex">
  
      <div>
        {props.children}
      </div>
    </div>
  );
}

