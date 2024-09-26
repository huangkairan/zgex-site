import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

(function() {
  const BASE_FONT_SIZE = 16; // 基础字体大小
  const BASE_WIDTH = 1920; // 设计稿基准宽度
  const MIN_FONT_SIZE = 12; // 最小字体大小
  const MAX_FONT_SIZE = 20; // 最大字体大小

  function adjustFontSize() {
    const html = document.documentElement;
    const clientWidth = html.clientWidth;
    let fontSize = (BASE_FONT_SIZE * clientWidth) / BASE_WIDTH;
    
    // 限制字体大小在最小值和最大值之间
    fontSize = Math.min(Math.max(fontSize, MIN_FONT_SIZE), MAX_FONT_SIZE);
    
    html.style.fontSize = fontSize + 'px';
  }

  // 页面加载时调整字体大小
  window.addEventListener('load', adjustFontSize);
  
  // 窗口大小改变时调整字体大小
  window.addEventListener('resize', adjustFontSize);
})();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
