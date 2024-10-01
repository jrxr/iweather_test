import { render, screen, waitFor } from "@testing-library/react-native";
import { Routes } from ".";

describe("Routes", () => {
  it("Should be render Search screen when not city selected.", async () => {
    render(<Routes />);

    const title = await waitFor(() => screen.findByText(/^escolha um local/i));

    expect(title).toBeTruthy();
  });
});
