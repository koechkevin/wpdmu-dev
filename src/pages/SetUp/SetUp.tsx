import React, { FC, useEffect, useState } from 'react';
import { Props } from './SetUp.interface';
import { CreateAccount, SlidePointer } from '../../components';
import { createStyles, Paper, Slide, Theme, Typography } from '@material-ui/core';
import classes from './SetUp.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import Exception from '../../Exception/Exception';
import usePrevious from '../../utils/usePrevious';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '../../redux/interfaces';
import { submit } from '../../redux/actions/actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      backgroundColor: theme.palette.primary.main,
    },
    submit: {
      padding: '16px 8px',
      textTransform: 'none',
    },
    content: {
      color: theme.palette.primary.contrastText,
    },
    link: {
      color: theme.palette.primary.main,
    },
  }),
);
const SetUp: FC<Props> = (props) => {
  const styles = useStyles();
  const {
    history: {
      location: { hash },
    },
  } = props;
  const [currentStep, setCurrentStep] = useState<number>(() => {
    const currentHash = hash.split('#');
    const current = currentHash[currentHash.length - 1] || '0';
    return parseInt(current, 10);
  });

  const previousStep = usePrevious(currentStep);

  useEffect(() => {
    window.location.hash = `${currentStep}`;
  }, [currentStep]);

  const { loading } = useSelector((state: Store) => ({
    loading: state.accountSetUp.submitting,
  }));

  const dispatch = useDispatch();

  const direction = !previousStep ? 'down':(previousStep || 1) < currentStep ? 'left' : 'right';

  return (
    <Paper elevation={0} className={classes.signup}>
      <div className={classes.form}>
        <SlidePointer style={{ position: 'absolute', top: 16, right: 16 }} currentStep={currentStep} totalSteps={3} />
        {currentStep === 1 && (
          <Slide in={currentStep === 1} timeout={1000} mountOnEnter unmountOnExit direction={direction}>
            <Paper elevation={0}>
              <CreateAccount
                loading={loading}
                onSubmit={(values: any) => submit(values, dispatch, () => setCurrentStep(2))}
              />
            </Paper>
          </Slide>
        )}
        {currentStep === 2 && (
          <Slide in={currentStep === 2} timeout={1000} mountOnEnter unmountOnExit direction={direction}>
            <Paper elevation={0}>
              <Exception onBack={() => setCurrentStep(1)} exception={404} text={'Page Not Found'} />
            </Paper>
          </Slide>
        )}
      </div>
      <div className={[classes.header, styles.header].join(' ')}>
        <div className={[classes.content, styles.content].join(' ')}>
          <Typography variant="h4" style={{ marginBottom: 32 }}>
            Dummy Heading
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default SetUp;
