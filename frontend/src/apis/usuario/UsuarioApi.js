import http from "../http-config";

export default {
    login: (body) => {
        return http.post(`/auth`, body)
    },

    listarUsuario: (token) => {
        return http.get(`/usuarios`, { headers: {Authorization:`Bearer ${token}`}});
    },

    salvarUsuario: (usuario, token) => {
        return http.post(`/usuario`,usuario, { headers: {Authorization:`Bearer ${token}`}});
    },

    apagar: (idUser, token) => {
        return http.delete(`/usuario/${idUser}`, { headers: {Authorization:`Bearer ${token}`}});
    },
    
}