/**
 * Created by jiahang Lee on 2017/6/22.
 */
app.model({
  namespace:'todo',
  state:[],
  reducers:{
    add(state,{payload:todo}){
      //保存数据到state
      return [...state,todo];
    },
  },
  effects:{
    *save({ payload:todo },{ put,call }){
      yield call(saveTodoToServer,todo);
      yield put ({type: 'add',payload:todo});
    },
  },
  subscriptions:{
    setup({history,dispatch}){
      return history.listen(({pathname})=>{
        if(pathname === '/'){
          dispatch({type:'load'});
        }
      });
    },
  },
});
