/**
 * Created by Administrator on 2017/8/23 0023.
 */
import dva from 'dva';
import counter from './models/counter/counter.js';

const myapp =  dva();
myapp.model(counter('1'));
myapp.model(counter('2'));
export default myapp;