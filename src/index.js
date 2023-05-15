// 入口文件夹
import { createRoot } from 'react-dom/client';
import App from './test'


const container = document.getElementById('app');
const root = createRoot(container); 
root.render(<App />);