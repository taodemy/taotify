import { ComponentStory, ComponentMeta } from "@storybook/react";
import ImageButton from "@/components/buttons/ImageButton";

export default {
  title: "ui/buttons/ImageButton",
  component: ImageButton,
} as ComponentMeta<typeof ImageButton>;

const Template: ComponentStory<typeof ImageButton> = (args) => <ImageButton {...args} />;

export const Avatar = Template.bind({});
Avatar.args = {
  imgType: "avatar",
  src: "/sample_cover.png",
};

export const AlbumCover = Template.bind({});
AlbumCover.args = {
  imgType: "albumCover",
  src: "/sample_cover.png",
};

export const PlayerCover = Template.bind({});
PlayerCover.args = {
  imgType: "playerCover",
  src: "/sample_cover.png",
};
