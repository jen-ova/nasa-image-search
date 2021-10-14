import React from "react";
import { render } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  const validProps = { setSearchResults: () => {} };

  it("renders correctly", () => {
    const { asFragment } = render(
      <Search setSearchResults={validProps.setSearchResults} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders input correctly", () => {
    const { getByTestId } = render(
      <Search setSearchResults={validProps.setSearchResults} />
    );

    expect(getByTestId("search__input")).toBeTruthy();
  });

  it("renders button correctly", () => {
    const { getByTestId } = render(
      <Search setSearchResults={validProps.setSearchResults} />
    );

    expect(getByTestId("search__button")).toBeTruthy();
  });
});
