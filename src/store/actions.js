import {reqCategoryL1List,reqDaRen} from '../api/index'
import {CATEGORYL1LIST,ID,DAREN} from './mutation-type';
export  default {
  async getCategoryL1List({commit}){
    const result = await reqCategoryL1List();
    const categoryL1List = result.data;
    commit(CATEGORYL1LIST,categoryL1List);
  },
  getId({commit},id){
    commit(ID,id);
  },
  async getDaRen({commit}){
    const result = await reqDaRen();
    if (result.code === 200){
      const daren = result.data
      console.log(result.data)
      console.log(daren)
      commit(DAREN,daren)
    }

  }
}
