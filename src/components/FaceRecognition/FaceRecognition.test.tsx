/*
 * @Author: your name
 * @Date: 2021-04-21 13:11:52
 * @LastEditTime: 2021-04-26 15:39:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-component-library/src/components/FaceRecognition/FaceRecognition.test.tsx
 */
import React from 'react'
import { render } from '@testing-library/react'
import FaceRecognition from './FaceRecognition'

const defaultProps = {
  code: 4434,
  sceneWeb: '1',
  stage: '1',
  loanCode: '1123141',
  scene: '1',
  orderCode: '1234567890',
  name: '李三',
  idCard: '45678765432456789',
  onSuccess: jest.fn()
}

describe('test FaceRecognition component', () => {
  it('should render the correct code dom', () => {
    const wrapper = render(<FaceRecognition {...defaultProps}></FaceRecognition>)
    const code = wrapper.getByText(defaultProps.code);
    const name = wrapper.getByText(`${defaultProps.name}（${defaultProps.idCard}）`);
    expect(code).toHaveClass('number')
    expect(name).toHaveClass('name')
  })
})