import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase } from '@mui/material';
import { ReactNode, useEffect, useRef, useState } from 'react';
type Props = {
  placeholder: string;
  data: any[];
  searchKey: string;
  searchedData: (data: null | any[]) => void;
  children?: ReactNode;
};

import styles from './Search.module.css';

const ActivitySearch = (props: Props) => {
  const { data, searchKey, onSearch, searchedData } = props;
  const [isClicked, setIsClicked] = useState(false);
  const searchRef = useRef(null);

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsClicked(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const [searchedDataResult, setSearchedDataResult] = useState<null | any[]>(
    null
  );

  useEffect(() => {
    if (data) {
      if (searchValue !== '') {
        const result = data?.filter((item: any) => {
          if (!item?.[searchKey]) return false;
          return item?.[searchKey]
            ?.toLowerCase()
            .includes(searchValue.toLowerCase());
        });

        setSearchedDataResult(result);
      } else {
        setSearchedDataResult(data);
      }
    }
  }, [searchValue, data]);

  useEffect(() => {
    searchedData(searchedDataResult);
  }, [searchedDataResult]);

  return (
    <div className={styles.search} ref={searchRef}>
      <IconButton
        className={` ${styles.searchIcon} ${isClicked ? styles.clicked : ''}`}
        onClick={() => setIsClicked(true)}
      >
        <SearchIcon
          className={` ${styles.searchIcon} ${isClicked ? styles.clicked : ''}`}
        />
      </IconButton>

      <InputBase
        className={`${styles.inputBase} ${isClicked ? styles.clicked : ''}`}
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        onBlur={() => setIsClicked(false)}
      />
      {isClicked && (
        <IconButton
          className={styles.closeButton}
          onClick={() => setIsClicked(false)}
        >
          <CloseIcon />
        </IconButton>
      )}
      {props.children}
    </div>
  );
};

export default ActivitySearch;
