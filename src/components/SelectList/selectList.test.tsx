import { render, screen, fireEvent } from "@testing-library/react-native";

import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
  it("Should be return city details selected.", () => {
    const data = [
      {
        id: "1",
        name: "Campinas",
        latitude: 123,
        longitude: 456,
      },
      {
        id: "2",
        name: "São Paulo",
        latitude: 789,
        longitude: 102,
      },
    ];

    const onPress = jest.fn();

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);

    const selectedCity = screen.getByText(/paulo/i);

    fireEvent.press(selectedCity);
  });
});
