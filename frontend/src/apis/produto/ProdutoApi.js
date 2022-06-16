import http from '@/apis/http-config/index';

export default {

    listar: () => {
        return http.get('/produtos');
    }

}