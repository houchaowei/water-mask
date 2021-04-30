## React业务组件库

### 安装
```bash
npm install @bk/ddd-business-component
```

### 业务组件
#### WaterMark 脱敏水印
```js
import { WaterMark } from '@bk/ddd-business-component';
import '@bk/ddd-business-component/dist/index.css';

<WaterMark color="red" fontSize={15} width={100} height={100}>
  <div style={{ height: '200px', width: '200px' }}>
    这里是需要脱敏背景的内容区域
  </div>
</WaterMark>
```


#### FaceRecognition 人脸识别在H5的应用
```js
import { FaceRecognition } from '@bk/ddd-business-component';
import '@bk/ddd-business-component/dist/index.css';
<FaceRecognition />
```