import http from "../http-config";

export default {
    listarProdutos: () => {
        return http.get(`/produtos`);
    },

    cadastrarProduto: (novoProduto) => {
        return http.post(`/produto`);
    },
}