import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export const Card = ({ weather, city }) => {
	return (
		<>
			<Flex justify="center">
				<Box p="2" m="6" borderWidth="1px" borderRadius="lg" shadow="lg">
					<Badge ml="1" colorScheme="blue">
						{city}
					</Badge>
					<Text>
						La temperatura en la ciudad de {city} es de : {weather.main.temp}
						°C
					</Text>
					<Text>Sensacion termica : {weather.main.feels_like} °C</Text>
					<Text> Temperatura maxima esperada : {weather.main.temp_max} °C</Text>
					<Text> Temperatura minima esperada : {weather.main.temp_min} °C</Text>
					<Image
						src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
					></Image>
				</Box>
			</Flex>
		</>
	);
};
