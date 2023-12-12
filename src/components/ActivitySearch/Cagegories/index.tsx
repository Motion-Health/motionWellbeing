import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import router from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

import styles from './Categories.module.css';

const Categories = ({ categories }) => {
  const listRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = listRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
  };
  // const checkOverflow = () => {
  //   console.log('checkOverflow');
  //   const scrollWidth = listRef.current.scrollWidth;
  //   const clientWidth = listRef.current.clientWidth;
  //   console.log(listRef.current);
  //   console.log(scrollWidth, clientWidth);
  //   setIsOverflowing(scrollWidth > clientWidth);
  //   console.log(isOverflowing);
  // };

  useEffect(() => {
    listRef.current.addEventListener('scroll', checkScroll);
    return () => listRef.current.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollList = (direction) => {
    listRef.current.scrollBy({
      left: direction === 'right' ? 200 : -200,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`${styles.categories} ${isOverflowing ? 'overflowing' : ''}`}
      ref={listRef}
    >
      {showLeftArrow && <ArrowBackIosIcon onClick={() => scrollList('left')} />}
      {categories.map((category) => (
        <ListItem
          key={category.title}
          onClick={() =>
            router.push(
              {
                pathname: router.pathname,
                query: { filter: category.filter },
              },
              undefined,
              { shallow: true }
            )
          }
          style={{ width: 'fit-content' }}
          disablePadding
        >
          <ListItemButton style={{ padding: '0', paddingRight: '5px' }}>
            <ListItemText
              style={{ width: 'max-content' }}
              primary={category.title}
              className={styles.listItem}
            />
          </ListItemButton>
        </ListItem>
      ))}
      {showRightArrow && (
        <ArrowForwardIosIcon onClick={() => scrollList('right')} />
      )}
    </div>
  );
};

export default Categories;
