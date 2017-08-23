/**
 * Created by Administrator on 2017/8/23 0023.
 */

export default (name)=> {
    return {
        namespace: 'counter_' + name,
        state: {
            count: 1
        },

        subscriptions: {
            setup({ dispatch, history }) {  // eslint-disable-line
            },
        },

        effects: {
            *fetch({ payload }, { call, put }) {  // eslint-disable-line
                yield put({type: 'save'});
            },
        },

        reducers: {
            save(state, action){
                return {...state, ...action.payload}
            },
            add(state, action){
                return {...state, count: state.count + 1};
            },
        },
    }
}
