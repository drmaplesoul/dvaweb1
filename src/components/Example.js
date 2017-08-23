import { connect } from 'dva';
import React from 'react';

const Example = (paras) => {
  const {dispatch,name} = paras;
  const {count} = paras[name];

  function add(){
    dispatch({
      type:`${name}/add`
    });
  }
  return (
    <div>
      {name} Value:{count} <button onClick={add}>{name}_Add</button>
    </div>
  );
};

Example.propTypes = {
};

export default connect(state=>state)(Example);
