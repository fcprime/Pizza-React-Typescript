import { forwardRef } from 'react';
import styles from './Search.module.css';
import cn from 'classnames';
import { SearchProps } from './Search.props';

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input(
  { className, isValid = true, ...props },
  ref,
) {
  return (
    <div className={styles['input-wrapper']}>
      <img
        className={styles['search-icon']}
        src="/search-icon.svg"
        alt="search icon"
      />
      <input
        {...props}
        ref={ref}
        className={cn(className, styles['input'], {
          [styles['invalid']]: !isValid,
          // [styles['input-title']]: appearance === 'title',
        })}
      />
    </div>
  );
});

export default Search;
