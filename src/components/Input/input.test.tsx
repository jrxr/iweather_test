import { render } from "@testing-library/react-native";

import { Input } from "@components/Input";

describe("Component: Input", () => {
  it("Should be render without activity indicator", () => {
    render(<Input />);
  });
});
