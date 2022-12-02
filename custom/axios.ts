import axios from "axios";

// @ts-ignore
axios.interceptors.request.use(function (config) {
	const token = window.localStorage.getItem("token");
	if (token) {
		// @ts-ignore
		config.headers["Authorization"] = "Bearer " + token;
	}
	return config;
});

export default axios;
