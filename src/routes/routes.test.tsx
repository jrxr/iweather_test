import { render } from "@testing-library/react-native";
import { Routes } from ".";

describe("Routes", () => {
  it("Should be render Search screen when not city selected.", () => {
    const { debug } = render(<Routes />);

    debug();
  });
});
