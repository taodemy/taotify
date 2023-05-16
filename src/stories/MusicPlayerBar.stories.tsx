import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MusicPlayer from "@/layouts/MusicPlayer";

export default {
  title: "ui/MusicPlayerBar",
  component: MusicPlayer,
} as ComponentMeta<typeof MusicPlayer>;

const Template: ComponentStory<typeof MusicPlayer> = () => <MusicPlayer />;

export const MusicPlayerBar = Template.bind({});
