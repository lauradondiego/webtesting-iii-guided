import React from "react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import Speak from "./Speak";
import { render, fireEvent } from "@testing-library/react";

describe("<Speak />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Speak />); // generates a DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
  // Implementation details:
  // - what props.speak is doing...
  // - if props.speak is invoked...

  // What we want to test:
  // - when our user clicks that button... what happens in app???

  it("displays a message when 'speak' button is clicked", () => {
    const speak = jest.fn();

    const { getByText } = render(<Speak speak={speak} />);

    fireEvent.click(getByText(/speak/i));
    expect(speak).toHaveBeenCalled();
  });
});
