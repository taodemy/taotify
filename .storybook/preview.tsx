import "../src/styles/globals.css";
import { roboto } from "../src/lib/font";

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
    (Story) => (
      <div className={`${roboto.variable}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
