import axios from "axios";
export const getCityWeather = async (city) => {
	const optionRequest = {
		url: "http://api.openweathermap.org/data/2.5/weather",
		params: {
			q: city,
			appid: "4fbb816cc498c5ddcfc697a0475b292f",
			units: "metric",
		},
	};
	try {
		const resp = await axios.request(optionRequest);
		if (resp.status === 200) return resp.data;
		return null;
	} catch (error) {
		return null;
	}
};
