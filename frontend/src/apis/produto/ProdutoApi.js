import http from "../http-config";

export default {
    listarProdutos: () => {
        return http.get(`/produtos`);
    },

    salvar: (produto) => {
        return http.post(`/produto`,produto);
    },

    apagar: (idProduto) => {
        return http.delete(`/produto/${idProduto}`)
    },

    editar: (idProduto) => {
        return http.patch(`/produto/${idProduto}`)
    },

    listarEstoque: () => {
        return http.get(`/estoque`);
    },

    salvarEstoque: (produto) => {
        return http.post(`/estoque`,produto);
    },
}
