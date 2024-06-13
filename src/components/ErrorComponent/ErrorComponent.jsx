import React from 'react';
import './ErrorComponent.scss';
import { Alert } from 'antd';

export default function ErrorComponent() {
  return (
    <div>
      <Alert
        type='error'
        message='Hm, something went wrong...'
        banner
        className='error'
      />
    </div>
  );
}
