import { ForwardRefExoticComponent, SVGProps } from "react";

type SidebarItemProps = {
  Icon: ForwardRefExoticComponent<
    SVGProps<SVGSVGElement> & {
      title?: string | undefined;
      titleId?: string | undefined;
    }
  >;
  label: string;
};

function SidebarItem({ Icon, label }: SidebarItemProps) {
  return (
    <div className="flex items-center max-w-fit space-x-2 pl-4 pr-6 py-3 rounded-full hover:bg-gray-100 cursor-pointer transition-all duration-200">
      <Icon className="h-6 w-6 md:h-7 md:w-7" />
      <p className="hidden md:inline-flex">{label}</p>
    </div>
  );
}

export default SidebarItem;
