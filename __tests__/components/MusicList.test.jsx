import React from "react";
import ReactDOM from "react-dom";
import { createRenderer } from "react-test-renderer/shallow";
import MusicList from "@component/MusicList";

describe("List component", () => {
  beforeEach(() => {
    render(<MusicList />);
  });
  it("renders list items correctly", () => {
    const items = ["Item 1", "Item 2", "Item 3"];
    const renderer = createRenderer();
    renderer.render(<List items={items} />);
    const result = renderer.getRenderOutput();
    expect(result.type).toBe("ul");
    expect(result.props.children.length).toBe(items.length);
    result.props.children.forEach((item, index) => {
      expect(item.type).toBe("li");
      expect(item.props.children).toBe(items[index]);
    });
  });
});
