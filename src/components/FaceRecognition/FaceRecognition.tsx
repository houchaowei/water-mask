/*
 * @Author: houchaowei
 * @Date: 2021-04-21 12:56:32
 * @LastEditTime: 2021-04-29 11:31:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-component-library/src/components/FaceRecognition/FaceRecognition.tsx
 */
import React from "react";
import Button from "./../Button/index";

interface Images {
  face1: string,
  face2: string,
  face3: string,
  face4: string,
}
interface IProps {
  code: number,
  name: string,
  idCard: string,
  images: Images,
  limitSize: number,
  onSuccess: (file: File) => void,
  onError: (msg: string) => void
}

function FaceRecognition(props: IProps) {
  const {
    code,
    name,
    idCard,
    images,
    limitSize,
    onError,
    onSuccess
  } = props;
  // 提交按钮
  const commit = (e: any) => {
    const file = e.target.files[0];
    const fileSize = limitSize * 1024 * 1024;
    if (file.size > fileSize) {
      // Toast.info('视频大于20M，请重新录制视频');
      onError('视频大于20M，请重新录制视频');
      return;
    }
    onSuccess(file);
  };
  return (
    <div className='faceRecognition'>
      <div>
        <div className='title'>请录制一段您本人朗读如下数字的视频</div>
        <p className='name'>{name}（{idCard}）</p>
      </div>
      <div className='number'>{code}</div>
      <div className='message'>
        <ul className='faceDes'>
          <li><img src={images.face1} alt='' /> <p>人脸清晰、完整在视频中央</p></li>
          <li><img src={images.face2} alt='' /> <p>仅您本人出镜 无他人干扰</p></li>
          <li><img src={images.face3} alt='' /> <p>确保录音权限 使用普通话</p></li>
          <li><img src={images.face4} alt='' /> <p>视频时长3~6 秒</p></li>
        </ul>
      </div>
      <div className='uploadBox'>
        <div className='upload'>
          <Button className='up-btn' btnType='primary'>开始录制视频</Button>
          <input
            type='file'
            accept='video/*'
            capture='camcorder'
            id='upload'
            onChange={(e) => commit(e)}
          />
        </div>
      </div>
    </div>
  );
};

FaceRecognition.defaultProps = {
  name: '张三',
  idCard: '4123 **** **** 19',
  code: 4567,
  images: {
    face1: './images/face1.png',
    face2: './images/face1.png',
    face3: './images/face1.png',
    face4: './images/face1.png',
  },
  limitSize: 20,
  onSuccess: (file: File) => console.log('onSuccess', file),
  onError: (msg: string) => console.log(msg)
}

export default FaceRecognition;