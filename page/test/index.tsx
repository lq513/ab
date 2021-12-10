import React, { useEffect } from 'react';
import { Button } from 'antd-mobile';

// 测试css是否被tree shaking
import './index.css';

// 测试静态文件打包
import text from 'assets/1.txt';
import cat from 'assets/cat.jpg';
// const cat = require('../public/1.gif').default;
console.log(import.meta.url, 2222222);

// import { a } from '@/tools';
// a('./static/1.gif');

const Test = () => {
  useEffect(() => {
    // 测试cros跨域
    // fetch('http://localhost:3002/getJsDoc').then(res => {
    //   console.log(res);
    // })
    //   .catch(e=>console.log(e));
  }, []);

  return (
    <>
      {/* <img src={cat} /> */}
      <h1 className="title">测试标题111111</h1>
      <p style={{ padding: '10px', lineHeight: '1.1', color: 'var(--grey-9-rgb)' }}>{text.toString()}</p>
      <div id="ignore" className='testcss'>测试css</div>
      <Button type="warning" className="btn">test antd</Button>
      <div className="footer">
        <div>{new Date().toLocaleString()}</div>
        <a id="ignore1">webpack | </a>
        <a id="ignore2">babel | </a>
        <a id="ignore3">postcss | </a>
        <a id="ignore4">typescript | </a>
        <a id="ignore5">react-router</a>
      </div>
    </>
  );
};

export default Test;