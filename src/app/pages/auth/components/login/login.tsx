import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, EmailInput, PasswordInput } from '@components/ui-kit';
import { useAppDispatch } from '@core/hooks';
import { useGetCurrentUserQuery, useLoginUserMutation } from '@store/user';
import { setToken, setUser } from '@store/user/models/auth-slice';

import './style.scss';

export const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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

  const { data: allLoggedUser } = useGetCurrentUserQuery(loggedUser?.token);

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
        <form className="login" onSubmit={onFinish}>
          <div className="login-inputs">
            <EmailInput
              onChange={onEmailChange}
              label="Email Address"
              type="email"
              id="email-address"
            />
            <PasswordInput
              onChange={onPasswordChange}
              label="Password"
              id="password"
            />
          </div>

          <div className="login-button">
            <Button type="submit" label="Login" />
          </div>
        </form>
      )}
    </>
  );
};
