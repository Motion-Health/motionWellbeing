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
    setIsOverflowing(scrollWidth > clientWidth);
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + 5 < scrollWidth - clientWidth);
  };

  useEffect(() => {
    const listElement = listRef.current;
    checkScroll();
    listElement.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    return () => {
      listElement.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scrollList = (direction) => {
    listRef.current.scrollBy({
      left: direction === 'right' ? 200 : -200,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`${styles.categories} ${
        isOverflowing ? styles.overflowing : ''
      }`}
      ref={listRef}
    >
      <div
        className={`${styles.arrowContainerLeft} ${
          showLeftArrow ? '' : styles.disabled
        }`}
      >
        <ArrowForwardIosIcon onClick={() => scrollList('left')} />
      </div>

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
          <ListItemButton className={styles.listItem}>
            <ListItemText
              style={{ width: 'max-content' }}
              primary={category.title}
            />
          </ListItemButton>
        </ListItem>
      ))}
      <div
        className={`${styles.arrowContainer} ${
          showRightArrow ? '' : styles.disabled
        }`}
      >
        <ArrowForwardIosIcon onClick={() => scrollList('right')} />
      </div>
    </div>
  );
};

export default Categories;
