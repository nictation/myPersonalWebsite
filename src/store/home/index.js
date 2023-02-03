import { getSchoolList } from "../../api";

const state = {
    isCollapse:false,
    schoolList:[],
    activeName:""
};

const mutations = {
    updateIsCollapse(state){
        state.isCollapse = !state.isCollapse
    },
    SCHOOLLIST(state,schoolList){
        state.schoolList = schoolList
    },
    changePage(state,index){
        state.activeName = (index =="1"?"first":"second")
    }
};

const actions = {
    async schoolList({commit}){
        let result = await getSchoolList();
        if(result.code = 200){
            commit('SCHOOLLIST',result.data)
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