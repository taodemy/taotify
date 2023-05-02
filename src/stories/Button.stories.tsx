import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "@/components/button";
export default {
  title: "ui/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>BUTTON</Button>;

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  size: "normal",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  size: "normal",
};

export const Ternary = Template.bind({});
Ternary.args = {
  color: "ternary",
  size: "normal",
};

export const Warning = Template.bind({});
Warning.args = {
  color: "warning",
  size: "normal",
};

export const Info = Template.bind({});
Info.args = {
  color: "info",
  size: "normal",
};

export const Light = Template.bind({});
Light.args = {
  color: "light",
  size: "normal",
};

export const Dark = Template.bind({});
Dark.args = {
  color: "dark",
  size: "normal",
};

export const Tiny = Template.bind({});
Tiny.args = {
  color: "primary",
  size: "tiny",
};

export const Small = Template.bind({});
Small.args = {
  color: "primary",
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  color: "primary",
  size: "large",
};

export const Outline = Template.bind({});
Outline.args = {
  color: "primary",
  size: "normal",
  outline: true,
};

export const Icon = Template.bind({});
Icon.args = {
  variant: "icon",
};
