import { requestAxios } from '../../server/axios';
export default {
    state: {
        colunas: []
    },
    mutations: {
        setColunas(state, payload) {
            state.colunas = payload
        },
    },
    actions: {
        async getColunas({ commit }) {
            try {
                return await requestAxios.get('/api/graus').then(response => {
                    commit("setColunas", response.data)
                }).catch(error => console.log('houve um erro na requisição', error))

            } catch (error) {
                console.log(error, 'houve um erro ao tentar obter dados de getProducts')
            }
        }
    },
    getters: {
        getColunas(state) {
            return state.colunas
        },
    },
};
