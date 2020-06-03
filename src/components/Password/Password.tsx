import React, { FC, useState } from 'react';
import classes from './password.module.scss';
import { Props } from './Password.interface';
import visibility from '../../assets/visibility.svg';
import visibleOff from '../../assets/visibility-off.svg';
import Input from '../Input/Input';

const Password: FC<Props> = (props) => {
  const { className, label, id, type, ...restProps } = props;
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div className={classes.password}>
      <Input
        type={visible ? 'text' : 'password'}
        id={id}
        placeholder={label}
        {...restProps}
      />
      <div role="button" aria-label="view password" onClick={() => setVisible((v) => !v)} className={classes.view}>
        <img alt="view password" src={visible ? visibility : visibleOff} />
      </div>
    </div>
  );
};

export default Password;
