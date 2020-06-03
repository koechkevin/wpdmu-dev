import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Props } from './CreateAccount.interface';
import useStyles from './CreateAccount.styles';
import {Button, CircularProgress, MenuItem, Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Input, Password, Select } from '../index';
import classes from './CreateAccount.module.scss';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const CreateAccount: FC<Props> = (props) => {
  const { onSubmit, loading } = props;
  const styles = useStyles();
  const [values, setValues] = useState({
    name: '',
    email: '',
    userType: 'null',
    password: '',
  });

  const [isEmailValid, setEmailValid] = useState<boolean>(true);
  const { name, email, userType, password } = values;

  const onChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | any>) => {
    e.persist();
    setValues((val) => ({ ...val, [e.target.name]: e.target.value }));
  };

  return (
    <div style={{ minWidth: '50%', paddingTop: 16 }}>
      <div>
        <Typography variant="h4" style={{ marginBottom: 32, fontWeight: 'bold' }}>
          Let's set up your account
        </Typography>
        <Typography style={{ marginBottom: 32 }}>
          Already have an account?{' '}
          <Link className={styles.link} to="">
            Sign in
          </Link>
        </Typography>
      </div>
      <form
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          onSubmit(values);
        }}
        style={{ marginBottom: 32 }}
      >
        <div className={classes.wrapper}>
          <fieldset style={{ border: 'none', padding: 0 }}>
            <Input required onChange={onChange} value={name} name="name" label={'Your name'} />
          </fieldset>
        </div>
        <div className={classes.wrapper}>
          <fieldset style={{ border: 'none', padding: 0  }}>
            <Input
              onFocus={() => setEmailValid(true)}
              onBlur={() => setEmailValid(emailRegex.test(email))}
              onChange={onChange}
              value={email}
              name="email"
              error={!isEmailValid}
              id="set-up-email"
              label="Email address"
              type="email"
              required
            />
            {!isEmailValid && (
              <label htmlFor="set-up-email">
                <Typography color="error" style={{ marginTop: 8 }}>
                  Enter a valid email address
                </Typography>
              </label>
            )}
          </fieldset>
        </div>
        <div className={classes.wrapper}>
          <fieldset style={{ border: 'none', padding: 0  }}>
            <Select
              onChange={onChange}
              required
              name="userType"
              value={userType}
              style={{ marginBottom: 16, height: 56 }}
              defaultValue="null"
              label=""
            >
              <MenuItem selected disabled value="null">
                I would describe my user type as
              </MenuItem>
              <MenuItem value={10}>Developer</MenuItem>
            </Select>
          </fieldset>
        </div>
        <div className={classes.wrapper}>
          <fieldset style={{ border: 'none', padding: 0  }}>
            <Password
              onChange={onChange}
              value={password}
              name="password"
              id="set-up-password"
              error={!!password && password.length < 8}
              label="Password"
            />
            <label htmlFor="set-up-password">
              <Typography color={!!password && password.length < 8 ? 'error' : 'inherit'} style={{ marginTop: 8 }}>
                Minimum 8 characters
              </Typography>
            </label>
          </fieldset>
        </div>
        <fieldset style={{ border: 'none', padding: 0  }}>
          <Button
            className={[classes.submit, styles.submit].join(' ')}
            color="primary"
            type="submit"
            disableElevation
            disabled={!name || !email || !userType || password.length < 8}
            variant="contained"
            style={{ width: '100%', height: 56, textTransform: 'none' }}
          >
            {loading ? <CircularProgress size={24} color="inherit"/> : 'Next'}
          </Button>
        </fieldset>
      </form>
      <div style={{ maxWidth: 500 }}>
        <Typography>
          By clicking the "Next" button, you agree to creating a free account , and to{' '}
          <Link className={styles.link} to="">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link className={styles.link} to="">
            Privacy Policy
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default CreateAccount;
