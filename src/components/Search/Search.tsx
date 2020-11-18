import * as React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import styles from './Search.module.css';
import { ChangeEvent } from "react";

interface SearchComponentProps {
  /** onChange handler for input */
  onChange: (arg0: ChangeEvent<HTMLInputElement>) => void;
  /** Displayed placeholder for input */
  placeholder: string;
  /** value for input */
  value: string;
}

/**
 * Component for search
 *
 * @param onChange - methods for handle search input changes
 * @param placeholder - placeholder for search
 * @param value - search value
 */
const SearchComponent = ({
  onChange,
  placeholder,
  value,
}: SearchComponentProps) => {
  return (
    <div className={styles.searchWrapper}>
      <input type="text" onChange={onChange} placeholder={placeholder} value={value} className={styles.search}/>
      <SearchIcon className={styles.icon}/>
    </div>
  )
}

export const Search: React.FC<SearchComponentProps> = React.memo(SearchComponent);
