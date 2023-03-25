import Image from "next/image";
import Link from "next/link";
import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  EnvelopeIcon,
  BookmarkIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";
import SidebarItem from "../SidebarItem/SidebarItem";

function Sidebar() {
  return (
    <div className="flex flex-col col-span-2 items-center px-4 md:items-start border-r">
      <Link href="/">
        <Image src={""} alt="logo" className="h-10 w-10" />
      </Link>
      <SidebarItem Icon={HomeIcon} label="Home" />
      <SidebarItem Icon={HashtagIcon} label="Explore" />
      <SidebarItem Icon={BellIcon} label="Notifications" />
      <SidebarItem Icon={EnvelopeIcon} label="Messages" />
      <SidebarItem Icon={BookmarkIcon} label="Bookmarks" />
      <SidebarItem Icon={UserIcon} label="Profile" />
      <SidebarItem Icon={EllipsisHorizontalCircleIcon} label="More" />
    </div>
  );
}

export default Sidebar;
