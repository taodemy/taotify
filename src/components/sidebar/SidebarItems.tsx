import { RenderSidebarItem } from "./SidebarItem";
import { iconList, SidebarMenuItem } from "./SidebarItem";

interface SidebarCategory {
  label: string;
  subCategories: SidebarMenuItem[];
}
export const RenderSidebarItems = (category: SidebarCategory) => {
  const isPlaylistsCategory = category.label === "PLAYLISTS";
  return (
    <div key={category.label}>
      <div className="invisible mb-8 mt-[54px] flex items-center text-light-200 lg:visible lg:ml-[36px] lg:gap-[146px]">
        <p className="text-primary-100 lg:inline-block lg:whitespace-nowrap">{category.label}</p>
        <div className="hidden h-6 w-6 items-center justify-center text-light-300 hover:text-light lg:flex">
          {isPlaylistsCategory && iconList["Plus"]}
        </div>
      </div>
      <ul className="flex flex-col gap-8 font-roboto text-lg text-light-200">
        {category.subCategories.map((menuItem, subIndex) => (
          <RenderSidebarItem
            isPlaylistsCategory={isPlaylistsCategory}
            menuItem={menuItem}
            key={subIndex}
          />
        ))}
      </ul>
    </div>
  );
};

export default RenderSidebarItems;
