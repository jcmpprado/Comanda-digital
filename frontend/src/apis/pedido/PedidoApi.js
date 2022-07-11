import http from "../http-config";

export default {
    listarPedidosRealizados: () => {
        return http.get(`pedidos`);
    }
}