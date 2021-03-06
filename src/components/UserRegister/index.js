import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import  ArrowBack  from '@material-ui/icons/ArrowBack';
import ScrollAnimation from 'react-animate-on-scroll';
import './UserRegister.scss'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  button: {
    margin:'20px auto',
    borderRadius: '0',
    fontSize: '10px'
   },

  button__back: {
    margin:' 10px auto',
    borderRadius: '0',
    fontSize: '10px',
    padding: '0px'

  }
}));

const UserRegister = (props) => {

  const {onSubmit,email,password, onChangeEmail, onChangePassword,
   emailValid, passwordValid,emailError,passwordError,name,nameError,
   nameValid,onChangeName, passwordConfirm, passwordConfirmError,
   deleteLoginError, passwordConfirmValid, onChangePasswordConfirm}= props;

   const classes = useStyles();

  return (
    <ScrollAnimation
      animateIn='fadeIn'
      duration={2}>
      <div className='register-block'>
        <Link to='/'>
          <Button
            variant='contained'
            color='secondary'
            size='small'
            className={classes.button__back}
            onClick={deleteLoginError} >
            <ArrowBack/>
          </Button>
        </Link>
        <form className={classes.container}  autoComplete='on'>
          <span className='register-block__header'>Регистрация</span>
          <TextField
            autoFocus='true'
            id='outlined-email-input'
            label='Имя'
            className={classes.textField}
            name='Имя'
            margin='normal'
            variant='outlined'
            value={name}
            onChange={onChangeName}
            error={nameError}
          />
        <span className='register-block__errors'>{nameValid}</span>
          <TextField
            id='outlined-email-input'
            label='Email'
            className={classes.textField}
            type='email'
            name='email'
            autoComplete='email'
            margin='normal'
            variant='outlined'
            value={email}
            onChange={onChangeEmail}
            error={emailError}
          />
        <span className='register-block__errors'>{emailValid}</span>
          <TextField
            id='outlined-password-input'
            label='Пароль'
            className={classes.textField}
            type='password'
            margin='normal'
            variant='outlined'
            value={password}
            onChange={onChangePassword}
            error={passwordError}
          />
        <span className='register-block__errors'>{passwordValid}</span>
          <TextField
            id='outlined-password-input'
            label='Подтвердите пароль'
            className={classes.textField}
            type='password'
            margin='normal'
            variant='outlined'
            value={passwordConfirm}
            onChange={onChangePasswordConfirm}
            error={passwordConfirmError}
          />
        <span className='register-block__errors'>{passwordConfirmValid}</span>
          <Button variant='contained'
            color='primary'
            className={classes.button}
            onClick={onSubmit}
          >
            Зарегистрироваться
          </Button>
        </form>
      </div>
    </ScrollAnimation>


  );
};

export default  UserRegister;
