import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { TextInput } from '@components/ui-kit';
import { useGetCurrentUserQuery, useUpdateUserMutation } from '@store/user';

import './style.scss';

export const Account = () => {
  const [updateUser] = useUpdateUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors: FormErrors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      username: '',
      address: '',
    },
  });
  const { data: userData } = useGetCurrentUserQuery({});

  const user = userData?.user;
  const [email, setEmail] = useState<string | undefined>(user?.email);
  const [username, setUsername] = useState<string | undefined>(user?.username);
  const [address, setAddress] = useState<string | undefined>(user?.address);

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

  const onAddressChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setAddress(event.target.value);
    },
    [],
  );

  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/auth');
  };

  const onFinish = async () => {
    await updateUser({ data: { username, email, address } });
  };

  return (
    <form className="account" onSubmit={handleSubmit(onFinish)}>
      <div className="account-inputs">
        <TextInput
          validation={{
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
          value={username}
          id="username"
        />
        {FormErrors?.username?.message && (
          <div className="register-inputs-error_container">
            {FormErrors?.username?.message}
          </div>
        )}
        <TextInput
          validation={{
            ...register('email', {
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                message: 'invalid email address',
              },
            }),
          }}
          onChange={onEmailChange}
          label="Email"
          type="text"
          value={email}
          id="email-address"
        />
        {FormErrors?.email?.message && (
          <div className="register-inputs-error_container">
            {FormErrors?.email?.message}
          </div>
        )}

        <TextInput
          validation={{
            ...register('address', {
              minLength: {
                value: 4,
                message: 'Min length is 4',
              },
            }),
          }}
          onChange={onAddressChange}
          type="text"
          value={address}
          label="Address"
          id="address"
        />
        {FormErrors?.address?.message && (
          <div className="register-inputs-error_container">
            {FormErrors?.address?.message}
          </div>
        )}
      </div>
      <div className="account-submit">
        <button onClick={onLogout} className="account-submit-btn" type="button">
          Logout
        </button>
        <button className="account-submit-btn" type="submit">
          Edit
        </button>
      </div>
    </form>
  );
};
