import http from "../http-config";

export default {
    listarProdutos: () => {
        return http.get(`/produtos`);
    },

    salvar: (produto) => {
        return http.post(`/produto`,produto);
    },

    atualizar: (produto) => {
        return http.put(`/produto`,produto);
    },

    apagar: (idProduto) => {
        return http.delete(`/produto/${idProduto}`)
    },

    editar: (idProduto) => {
        return http.patch(`/produto/${idProduto}`)
    }
}
