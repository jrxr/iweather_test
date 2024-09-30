import {
	getStorageCity,
	saveStorageCity,
} from "@libs/asyncStorage/cityStorage";
import type { CityProps } from "@services/getCityByNameService";

describe("Storage: CityStorage", () => {
	it("Should be return null when don't have a city storaged", async () => {
		const response = await getStorageCity();

		expect(response).toBeNull();
	});

	it("Should be return city storage.", async () => {
		const newCity: CityProps = {
			id: "1",
			name: "São Paulo",
			latitude: 123,
			longitude: 456,
		};

		await saveStorageCity(newCity);

		const response = await getStorageCity();

		expect(response).toEqual(newCity);
	});
});
