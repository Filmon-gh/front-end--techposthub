import axios from "axios";

axios.defaults.baseURL = "https://techposthub-frontend-1a899469cb06.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;