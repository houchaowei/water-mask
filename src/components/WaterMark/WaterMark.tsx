/*
 * @Author: houchaowei
 * @Date: 2021-04-29 11:41:58
 * @LastEditTime: 2021-04-29 11:45:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-component-library/src/components/WaterMark/WaterMark.tsx
 */
import React, { ReactChild, useEffect } from "react";

interface IProps {
  children?: ReactChild,
  fontSize?: number, // 字体大小
  color?: string, // 脱敏字体颜色
  content: string, // 脱敏内容
  width?: number, // 脱敏字体间距宽度
  height: number, // 脱敏字体间距高度
  opacity: number, // 脱敏字体透明度
  feedHeight?: number,
  rotate?: number,
  zIndex?: number,
  textAlign: 'center' | 'end' | 'left' | 'right' | 'start',
  textBaseline: 'alphabetic' | 'bottom' | 'hanging' | 'ideographic' | 'middle' | 'top',
}

function WaterMark(props: IProps) {
  const {
    children,
  } = props;

  useEffect(() => {
    watermark(props);
  }, []);

  const currentMask = () => {
    let container: any = document.querySelector('#__water_mask');
    let node = null;
    container && container.childNodes.forEach((childNode: any) => {
      const classes = childNode.classList;
      if (classes.contains('__wm')) {
        node = childNode;
      }
    });
    return node;
  };

  const watermark = (params: IProps) => {
    let container = document.querySelector('#__water_mask');
    const {
      fontSize,
      opacity,
      color: fillStyle,
      content,
      width,
      height,
      textAlign,
      textBaseline,
      feedHeight = 28,
      rotate = -20,
      zIndex = 1000,
    } = params;
    const canvas = document.createElement('canvas');
    const widthStr = `${width}px;`;
    canvas.setAttribute('width', widthStr);
    canvas.setAttribute('height', String(height) + 'px');
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    ctx.font = `${fontSize}px Microsoft Yahei`;
    ctx.fillStyle = fillStyle;
    ctx.rotate((Math.PI / 180) * rotate);
    ctx.globalAlpha = opacity / 100;
    // 处理换行
    const textArray = decodeURIComponent(content).split('\n');
    textArray.forEach((str, index) => {
      ctx.fillText(str, 0, height / 2 + index * feedHeight);
    });
    const base64Url = canvas.toDataURL();
    const __wm = currentMask();
    const watermarkDiv = __wm || document.createElement('div');
    const styleStr = `
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      z-index:${zIndex};
      pointer-events:none;
      background-repeat:repeat;
      background-image:url('${base64Url}')
    `;

    watermarkDiv.setAttribute('style', styleStr);
    watermarkDiv.classList.add('__wm');
    if (!__wm && container) {
      // container.style.position = 'relative';
      container.insertBefore(watermarkDiv, container.firstChild);
    }
  }
  return (
    <div id='__water_mask'>
      {children}
    </div>
  );
};

WaterMark.defaultProps = {
  children: (
    <div style={{ width: '100px', height: '200px' }}>
      欢迎使用脱敏水印！
    </div>
  ),
  fontSize: 16,
  color: '#999',
  opacity: 30,
  content: '脱敏水印',
  width: 150,
  height: 100,
  textAlign: 'left',
  textBaseline: 'middle',
}

export default WaterMark;