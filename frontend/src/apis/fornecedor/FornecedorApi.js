import http from "../http-config";

export default {
    listarFornecedores: () => {
        return http.get(`/fornecedores`)
    },

    salvarFornecedor: (fornecedor, token) => {
        return http.post(`/fornecedor`,fornecedor, { headers: {Authorization:`Bearer ${token}`}})
    },

    deletarFornecedor: (idFornecedor, token) => {
        return http.delete(`/fornecedor/${idFornecedor}`, { headers: {Authorization:`Bearer ${token}`}});
    },
}