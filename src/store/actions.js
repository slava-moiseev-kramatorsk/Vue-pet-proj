import { axiosInstance } from "@/services/api";


export default {
    getAllBooks({commit}){
       return axiosInstance.get('books', {
       })
           .then((resp) => {
               commit('setAllBooks', resp.data.data)
            })
           .catch((err) => console.log(err));
    },

    getTest(){
       return axiosInstance.get('get', {
       })
           .catch((err) => console.log(err));
    },

    createNewBook({commit, dispatch }, item) {
        return axiosInstance.post('books', item)
            .then((resp) => {
                commit('setAllBooks', resp.data.data);
                dispatch('getAllBooks')
                })
    },
    updateBooks({commit, dispatch}, item){
        return axiosInstance.patch(`books/${item.id}`, item)
            .then((resp) => {
                commit('setAllBooks', resp.data.data);
                dispatch('getAllBooks')
            })
    },
    deleteBook({commit, dispatch}, item){
        return axiosInstance.delete(`books/${item.id}`)
            .then((resp) => {
                commit('setAllBooks', resp.data.data);
                dispatch('getAllBooks')
            })
    },
}