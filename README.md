
## React组件

### 安装
```bash
npm install water-mask-page
```

# WaterMaskPage 页面脱敏水印

## Demo
https://houchaowei.github.io/water-mask/src-components-water-mask-page-water-mask-page/
## 使用
```js
import { WaterMaskPage } from 'water-mask-page';
import 'water-mask-page/dist/index.css';

<WaterMaskPage color="red" fontSize={15} width={100} height={100} content={`脱敏内容`}>
  <div style={{ height: '200px', width: '200px' }}>
    这里是需要脱敏背景的内容区域
  </div>
</WaterMaskPage>
```

