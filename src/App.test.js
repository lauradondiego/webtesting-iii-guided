import React from "react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
//can name renderer banana or whatever you want
import App, { asyncFunc } from "./App";
import { render, fireEvent } from "@testing-library/dom";
//you can do snapshot tests for every component
describe("<App />", () => {
  // 2. write this test
  it("matches snapshot", () => {
    const tree = renderer.create(<App />); // generates a DOM tree
    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
    // we are assuming that our tree matches the snapshot
  });
});

describe("asyncFunc", () => {
  it("eventually resolves to success", () => {
    //now we describe our logic and call our async function
    let resolvedValue = null;
    const expected = "Success!";
    asyncFunc().then(res => {
      resolvedValue = res;
      expect(resolvedValue).toEqual(expected);
    });
    //its a promise so use .then
  });
});

describe("speak", () => {
  it("should pass 'bark' into Speak", () => {
    const { getByText, queryByText } = render(<App />);
    fireEvent.click(getByText(/speak/i));
    expect(queryByText(/bark/i)).toBeTruthy();
  });
});
