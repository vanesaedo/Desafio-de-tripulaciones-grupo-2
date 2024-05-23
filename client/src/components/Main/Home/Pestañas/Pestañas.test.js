import React from "react";
import { shallow } from "enzyme";
import Pestañas from "./Pestañas";

describe("Pestañas", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Pestañas />);
    expect(wrapper).toMatchSnapshot();
  });
});
