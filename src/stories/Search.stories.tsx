import Search from "../components/Input/Search";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "component/Search",
  component: Search,
} as ComponentMeta<typeof Search>;

export const SearchBar: ComponentStory<typeof Search> = () => <Search />;
