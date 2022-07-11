import http from "../http-config";

export default {
    listarProdutos: () => {
        return http.get(`/produtos`);
    },

    listarProdutosPorCategoria: (categoria) => {
        return http.get(`/categoria/${categoria}`);
    },

    salvar: (produto, token) => {
        return http.post(`/produto`,produto,{ headers: {Authorization:`Bearer ${token}`}});
    },

    apagar: (idProduto, token) => {
        return http.delete(`/produto/${idProduto}`, { headers: {Authorization:`Bearer ${token}`}});
    },

    editar: (idProduto, token) => {
        return http.patch(`/produto/${idProduto}`, { headers: {Authorization:`Bearer ${token}`}});
    },

    listarEstoque: () => {
        return http.get(`/estoque`);
    },

    salvarEstoque: (produto, token) => {
        return http.post(`/estoque`,produto, { headers: {Authorization:`Bearer ${token}`}});
    },
}
