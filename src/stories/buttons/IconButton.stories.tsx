import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import IconButton from "@/components/buttons/IconButton";
export default {
  title: "ui/ buttons/IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args}>BUTTON</IconButton>
);

export const Home = Template.bind({});
Home.args = {
  iconTypes: "playback",
};

export const Close = Template.bind({});
Close.args = {
  iconTypes: "close",
};
export const FastForward = Template.bind({});
FastForward.args = {
  iconTypes: "fastForward",
};
export const Like = Template.bind({});
Like.args = {
  iconTypes: "like",
};
export const Pause = Template.bind({});
Pause.args = {
  iconTypes: "pause",
};
export const Next = Template.bind({});
Next.args = {
  iconTypes: "next",
};
export const Previous = Template.bind({});
Previous.args = {
  iconTypes: "previous",
};
export const Repeat = Template.bind({});
Repeat.args = {
  iconTypes: "repeat",
};
export const Loop = Template.bind({});
Loop.args = {
  iconTypes: "loop",
};
export const Shuffle = Template.bind({});
Shuffle.args = {
  iconTypes: "shuffle",
};
export const Lists = Template.bind({});
Lists.args = {
  iconTypes: "lists",
};
export const Bin = Template.bind({});
Bin.args = {
  iconTypes: "bin",
};
export const Notification = Template.bind({});
Notification.args = {
  iconTypes: "notification",
};
export const Play = Template.bind({});
Play.args = {
  iconTypes: "play",
};
