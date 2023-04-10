import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, PasswordInput, TextInput } from '@components/ui-kit';
import { useCreateUserMutation } from '@store/user';

import './style.scss';

export const Register = () => {
  const [createdUser] = useCreateUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
  });
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const navigate = useNavigate();

  const onEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [],
  );

  const onUsernameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value);
    },
    [],
  );

  const onPasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    [],
  );

  const onConfirmPasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setConfirmPassword(event.target.value);
    },
    [],
  );

  console.log(email, username, password, confirmPassword);

  const onFinish = async () => {
    await createdUser({ username, email, password });
    reset();
    navigate('/auth');
  };

  return (
    <form className="register" onSubmit={handleSubmit(onFinish)}>
      <div className="register-inputs">
        <TextInput
          rest={{
            ...register('username', {
              minLength: {
                value: 4,
                message: 'Min length is 4',
              },
              maxLength: {
                value: 12,
                message: 'Max length is 12',
              },
            }),
          }}
          onChange={onUsernameChange}
          type="text"
          label="Username"
          id="username"
        />
        {errors?.username?.message && (
          <div className="register-inputs-error_container">
            {errors?.username?.message}
          </div>
        )}
        <TextInput
          rest={{
            ...register('email', {
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                message: 'invalid email address',
              },
            }),
          }}
          onChange={onEmailChange}
          label="Email"
          type="email"
          id="email-address"
        />
        {errors?.email?.message && (
          <div className="register-inputs-error_container">
            {errors?.email?.message}
          </div>
        )}
        <PasswordInput
          rest={{
            ...register('password', {}),
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
        <PasswordInput
          rest={{
            ...register('confirmPassword', {}),
          }}
          onChange={onConfirmPasswordChange}
          label="Confirm password"
          id="confirm-password"
        />
        {errors?.confirmPassword?.message && (
          <div className="register-inputs-error_container">
            {errors?.confirmPassword?.message}
          </div>
        )}
      </div>

      <div className="register-button">
        <Button type="submit" label="Signup" />
      </div>
    </form>
  );
};
