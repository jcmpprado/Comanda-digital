import http from "../http-config";

export default {
    login: (body) => {
        return http.get(`/auth`, body)
    },
}