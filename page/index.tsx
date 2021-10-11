import React, { useState, useEffect } from 'react';
import reactDom from 'react-dom';
import { Button } from 'antd-mobile';
import Home from './home';

import c from '../public/a.jpg';

// import 'antd-mobile/dist/antd-mobile.less';
import styles from './index.less';
console.log(styles, 222222);

import { a } from '@/mod';

const A = (props:object) => {
  const [num, setNum] = useState(1);

  useEffect(() => {
    a('../public/a.jpg');
  }, []);

  return (
    <>
      <img src={c} />
      <div onClick={()=>{ setNum(2); }}>{num}</div>
      <Home/>
      <Button type="warning">11</Button>
    </>
  );
};

document.addEventListener('keydown', (oEvent) => {
  //获取键盘的keyCode值
  const KeyCode = oEvent.key;
  // console.log(oEvent, 11111111);
  //获取ctrl 键对应的事件属性
  const bCtrlKeyCode = oEvent.ctrlKey || oEvent.metaKey;
  if ( KeyCode.toLowerCase() === 'u' && bCtrlKeyCode  ) {
    oEvent.preventDefault();
    window.location.href = 'https://github.com/lq513/ab';
  }
});

reactDom.render(<A />, document.getElementById('root'));
