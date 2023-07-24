import "../src/styles/globals.css";
import { allura, sora } from "../src/lib/font";
// import { Story } from "@storybook/react";

import type { Preview } from "@storybook/react";

const preview: Preview = {
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
    (Story) => (
      <div className={`${allura.variable}`}>
        {/* <div> */}
        <Story />
      </div>
    ),
  ],
};

export default preview;
