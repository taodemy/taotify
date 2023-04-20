import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MusicPlayer from "@/layouts/MusicPlayer";
export default {
  title: "ui/MusicPlayerBar",
  component: MusicPlayer,
} as ComponentMeta<typeof MusicPlayer>;

const Template: ComponentStory<typeof MusicPlayer> = (args) => <MusicPlayerBar />;

export const MusicPlayerBar = Template.bind({});
MusicPlayerBar.args = {
  color: "primary",
  size: "normal",
};
