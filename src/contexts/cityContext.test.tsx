import { renderHook } from "@testing-library/react-native";
import { useCity } from "@hooks/useCity";

describe("Context: CityContext", () => {
  it("Should be change selected city", () => {
    const { result } = renderHook(() => useCity());
  });
});
