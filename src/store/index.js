import {createStore} from "vuex"
import home from './home'
import about from './about'
export default createStore({
   modules:{
    home,
    about
   }
})