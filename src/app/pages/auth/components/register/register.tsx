import React, { useCallback, useState } from 'react';
import { Button, EmailInput, PasswordInput } from '@components/ui-kit';

import './style.scss';

export const Register = () => {
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

  console.log(email, password);

  return (
    <div className="register">
      <div className="register-inputs">
        <EmailInput
          onChange={onEmailChange}
          label="Username"
          type="text"
          id="username"
        />
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
        <PasswordInput
          onChange={onPasswordChange}
          label="Confirm Password"
          id="confirm-password"
        />
      </div>

      <div className="register-button">
        <Button type="submit" label="Signup" />
      </div>
    </div>
  );
};
