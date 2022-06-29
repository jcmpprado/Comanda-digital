import http from "../http-config";

export default {
    listarProdutos: () => {
        return http.get(`/produtos`);
    },

}