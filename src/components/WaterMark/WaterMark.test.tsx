/*
 * @Author: your name
 * @Date: 2021-04-21 13:11:52
 * @LastEditTime: 2021-04-29 11:45:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-component-library/src/components/FaceRecognition/FaceRecognition.test.tsx
 */
import React from "react";
import { render } from "@testing-library/react";
// import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import WaterMark from "./WaterMark";
import "jest-canvas-mock";

// Enzyme.configure({ adapter: new Adapter() });


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
  // textAlign: 'left',
  // textBaseline: 'middle',
};
// let wrapperS, wrapperR: any, wrapperM: any;

describe("test water mask component", () => {
  const dom = <WaterMark {...defaultProps}>{defaultProps.children}</WaterMark>;
  // beforeEach(() => {
  //   wrapperR = render(dom);
  //   wrapperS = shallow(dom);
  //   // wrapperM = mount(dom);
  // });
  // it('快照snapshot:', () => {
  //   expect(toJson(wrapperS)).toMatchSnapshot();
  // });

  it("should render the correct code dom", () => {
    // expect(wrapperS.find('id="__water_mask"')).toBeFalsy()

    const wrapper = render(
      <WaterMark {...defaultProps}>{defaultProps.children}</WaterMark>
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
