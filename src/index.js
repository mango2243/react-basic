// 入口文件夹
import { createRoot } from 'react-dom/client';
import App from './06_组件通信/发布订阅案例'

const container = document.getElementById('app');
const root = createRoot(container); 
root.render(<App />);