import http from "../http-config";

export default {
    salvarRegistroFinanceiro: () => {
        return http.post(`financeiro`);
    },

    listarRegistroFinanceiro : () => {
        return http.get(`financeiro`);
    },
}