import { Badge, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Search } from "./components/Search";
import { getCityWeather } from "./services/getCityWeather";

export const App = () => {
	const [city, setCity] = useState(null);
	const [weather, setWeather] = useState(null);

	useEffect(() => {
		if (!city) return;
		(async () => {
			setWeather(await getCityWeather(city));
		})();
	}, [city]);

	return (
		<>
			<Search setCity={setCity} />
			{city ? (
				weather && <Card weather={weather} city={city}></Card>
			) : (
				<Flex justify="center">
					<Badge ml="-40px" colorScheme="blue">
						{" "}
						Busca el clima de tu ciudad!
					</Badge>
				</Flex>
			)}
		</>
	);
};
