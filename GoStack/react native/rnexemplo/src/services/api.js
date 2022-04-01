import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3333",
});

// Para testar api local rodar adb reverse tcp:3333 tcp:3333

export default api;
