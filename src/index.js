import dva from 'dva';
import './index.css';
import counter from './models/counter/counter.js';
import myapp from './myapp.js';

//// 1. Initialize
//const app = dva();
//
//// 2. Plugins
//// app.use({});
//
//// 3. Model
//app.model(require('./models/counter/count1'));
//app.model(require('./models/counter/count2'));
//
//// 4. Router
//app.router(require('./router'));
//
//// 5. Start
//app.start('#root');


//4. Router
myapp.router(require('./router'));

// 5. Start
myapp.start('#root');