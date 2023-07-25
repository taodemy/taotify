import "../src/styles/globals.css";
import { allura, roboto } from "../src/lib/font";
import { Story } from "@storybook/react";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story: Story) => (
      <div className={`${allura.variable} ${roboto.variable}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
