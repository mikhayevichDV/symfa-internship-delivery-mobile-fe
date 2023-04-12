import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthButton, PasswordInput, TextInput } from '@components/ui-kit';
import { useAppDispatch, useAppSelector } from '@core/hooks';
import {
  setToken,
  setUser,
  useGetCurrentUserQuery,
  useLoginUserMutation,
} from '@store/user';

import './style.scss';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const selectedToken: string = useAppSelector(state => state.user.token);

  const onEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [],
  );

  const onPasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    [],
  );
  const redirect = useNavigate();
  const dispatch = useAppDispatch();

  const [loginUser, { data: loggedUser, isLoading, isSuccess }] =
    useLoginUserMutation();

  const { data: allLoggedUser } = useGetCurrentUserQuery(selectedToken);

  const onFinish = async () => {
    if (email && password) {
      await loginUser({ email, password });
      dispatch(setUser(allLoggedUser.user));
    }
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken(loggedUser.token));
      redirect('/client');
    }
  }, [isSuccess]);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <form className="login" onSubmit={handleSubmit(onFinish)}>
          <div className="login-inputs">
            <TextInput
              validation={{
                ...register('email', {
                  required: { value: true, message: 'Required field!' },
                }),
              }}
              onChange={onEmailChange}
              label="Email Address"
              type="email"
              id="email"
            />
            {errors?.email?.message && (
              <div className="register-inputs-error_container">
                {errors?.email?.message}
              </div>
            )}
            <PasswordInput
              validation={{
                ...register('password', {
                  required: { value: true, message: 'Required field!' },
                }),
              }}
              onChange={onPasswordChange}
              label="Password"
              id="password"
            />
            {errors?.password?.message && (
              <div className="register-inputs-error_container">
                {errors?.password?.message}
              </div>
            )}
          </div>

          <div className="login-button">
            <AuthButton type="submit" label="Login" />
          </div>
        </form>
      )}
    </>
  );
};
