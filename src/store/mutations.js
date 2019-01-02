import {CATEGORYL1LIST,ID,DAREN} from './mutation-type';
export  default {
  [CATEGORYL1LIST](state,categoryL1List){
    state.categoryL1List = categoryL1List
  },
  [ID](state,id){
    state.id = id;
  },
  [DAREN](state,daren){
    state.daren = daren
  }
}
