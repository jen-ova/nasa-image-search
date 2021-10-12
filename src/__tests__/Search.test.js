import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../components/Search";

it("renders correctly", () => {
  const { asFragment } = render(<Search />);

  expect(asFragment()).toMatchSnapshot();
});
