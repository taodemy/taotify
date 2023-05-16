import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LinkButton from "@/components/buttons/LinkButton";

export default {
  title: "ui/buttons/LinkButton",
  component: LinkButton,
} as ComponentMeta<typeof LinkButton>;

const Template: ComponentStory<typeof LinkButton> = (args) => <LinkButton {...args} />;

export const Home = Template.bind({});
Home.args = {
  linkTypes: "home",
};

export const Discover = Template.bind({});
Discover.args = {
  linkTypes: "discover",
};
export const Albums = Template.bind({});
Albums.args = {
  linkTypes: "artists",
};

export const Artists = Template.bind({});
Artists.args = {
  linkTypes: "artists",
};

export const Videos = Template.bind({});
Videos.args = {
  linkTypes: "videos",
};

export const RecentPlay = Template.bind({});
RecentPlay.args = {
  linkTypes: "recentPlay",
};

export const Favorite = Template.bind({});
Favorite.args = {
  linkTypes: "favorite",
};

export const Active = Template.bind({});
Active.args = {
  linkTypes: "home",
  isActive: true,
};
