import Link from "next/link";

export interface MenuItem {
  icon: React.ReactElement;
  path: string;
}

interface MenuProps {
  menuName: string;
  menuItem: MenuItem;
}

export const RenderMenuItem: React.FC<MenuProps> = ({ menuName, menuItem }) => {
  const currentPath = window.location.pathname;
  console.log(menuItem);
  return (
    <Link className="flex w-full" href={menuItem.path}>
      <div className={`h-8 w-2 ${currentPath === menuItem.path && "bg-primary"}`}></div>
      <li className={`flex w-full items-center`}>
        <div
          className={`${
            currentPath === menuItem.path && "bg-gradient-to-r from-primary to-transparent"
          } flex h-full items-center pl-3 pr-5 lg:pl-6`}
        >
          {menuItem.icon}
        </div>
        <p className="hidden lg:block">{menuName}</p>
      </li>
    </Link>
  );
};
