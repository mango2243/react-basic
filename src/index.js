// 入口文件夹
import { createRoot } from 'react-dom/client';
import App from './08_生命周期/15_异步'


const container = document.getElementById('app');
const root = createRoot(container); 
root.render(<App />);