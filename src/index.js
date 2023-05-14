// 入口文件夹
import { createRoot } from 'react-dom/client';
import App from './09_ReactHooks/9_useMemo'


const container = document.getElementById('app');
const root = createRoot(container); 
root.render(<App />);