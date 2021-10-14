import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  const images = [
    "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  ];

  it("renders correctly", () => {
    const { asFragment } = render(<SearchResults results={images} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the expected number of images", () => {
    const { getAllByTestId } = render(<SearchResults results={images} />);
    expect(getAllByTestId("image")).toHaveLength(4);
  });
});
