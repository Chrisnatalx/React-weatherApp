import { ajax } from "../tools/ajax";

export const getCityWeather = async (city) => {
	const optionRequest = {
		url: "http://api.openweathermap.org/data/2.5/weather",
		params: {
			q: city,
			appid: "4fbb816cc498c5ddcfc697a0475b292f",
			units: "metric",
		},
	};
	return await ajax(optionRequest);
};
