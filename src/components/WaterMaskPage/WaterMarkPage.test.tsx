import React from "react";
import { render } from "@testing-library/react";
import WaterMaskPage from "./WaterMaskPage";
import "jest-canvas-mock";

const defaultProps = {
  children: (
    <div style={{ width: "100%", height: "200px" }}>欢迎使用脱敏水印！</div>
  ),
  fontSize: 20,
  color: "red",
  opacity: 50,
  content: "脱敏水印",
  width: 150,
  height: 100,
};

describe("test water mask component", () => {

  it("should render the correct code dom", () => {
    const wrapper = render(
      <WaterMaskPage {...defaultProps}>{defaultProps.children}</WaterMaskPage>
    );
    const content = wrapper.getByText("欢迎使用脱敏水印！");

    expect(content).toHaveStyle("width:100%");
    expect(wrapper.container.firstChild).toMatchInlineSnapshot(`
      <div
        id="__water_mask"
      >
        <div
          style="width: 100%; height: 200px;"
        >
          欢迎使用脱敏水印！
        </div>
      </div>
    `);

  });
});
