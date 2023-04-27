import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MusicListItem from "../components/AlbumItem";

export default {
  title: "ui/ListItem",
  component: MusicListItem,
} as ComponentMeta<typeof MusicListItem>;

const Template: ComponentStory<typeof MusicListItem> = (args) => <MusicListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  musicList: {
    id: 0,
    type: "playlist",
    songs: [
      {
        id: 0,
        name: "This is love",
        artists: [{ name: "Jaxson Westervelt", id: 0 }],
        mp3Url: "",
        album: {
          id: 164306185,
          name: "对的人",
          picUrl: "http://p4.music.126.net/HBhUHV7nYPWsR7bOqUNdKg==/109951168567034005.jpg",
        },
      },
    ],
  },
};
