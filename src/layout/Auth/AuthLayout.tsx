import { Outlet } from 'react-router-dom';
import styles from './AuthLayout.module.css';

const AuthLayout = () => {
  return (
    <div className={styles['layout']}>
      <div className={styles['logo']}>
        <img
          src="/logo.svg"
          alt="logo image"
        />
      </div>
      <div className={styles['content']}>
        <div className={styles['login-pass']}>
          Login: a@gmail.com
          <span>Password: 123</span>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
