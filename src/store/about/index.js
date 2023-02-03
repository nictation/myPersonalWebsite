import { getBookList,getFilmList,getImageList,getMusicList } from "../../api";

const state = {
    imageList:[],
    musicList:[],
    filmList:[],
    bookList:[]
};

const mutations = {
    BOOKLIST(state,bookList){
        state.bookList = bookList
    },
    MUSICLIST(state,musicList){
        state.musicList = musicList
    },
    IMAGELIST(state,imageList){
        state.imageList = imageList
    },
    FILMLIST(state,filmList){
        state.filmList = filmList
    },
};

const actions = {
    async bookList({commit}){
        let result = await getBookList();
        if(result.code = 200){
            commit('BOOKLIST',result.data)
        }
    },
    async musicList({commit}){
        let result = await getMusicList();
        if(result.code = 200){
            commit('MUSICLIST',result.data)
        }
    },
   
    async imageList({commit}){
        let result = await getImageList();
        if(result.code = 200){
            commit('IMAGELIST',result.data)
        }
    },
    async filmList({commit}){
        let result = await getFilmList();
        if(result.code = 200){
            commit('FILMLIST',result.data)
        }
    },
};



const getters = {};
export default{
    namespace:true,
    state,
    mutations,
    actions,
    getters
}