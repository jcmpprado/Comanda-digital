import http from "../http-config";

export default {
    salvarRegistroFinanceiro: (payload, token) => {
        console.log("passei aqui", payload)
        return http.post(`financeiro`, payload, { headers: {Authorization:`Bearer ${token}`}});
    },

    listarRegistroFinanceiro : () => {
        return http.get(`financeiro`);
    },
}