import axios from "axios";

export const ajax = async (options) => {
	return await axios.request(options).then((resp) => resp.data);
};
