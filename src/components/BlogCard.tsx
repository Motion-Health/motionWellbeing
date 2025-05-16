import Link from 'next/link';
import React from 'react';

import styles from './BlogCard.module.css';

interface BlogCardProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
  linkUrl: string;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  imageUrl,
  imageAlt,
  linkUrl,
  className = '',
}) => {
  return (
    <div className={className}>
      <Link href={linkUrl} className={styles.cardLink}>
        <div className={styles.cardWrapper}>
          <img className={styles.blogImage} src={imageUrl} alt={imageAlt} />
          <div className={styles.titleWrap}>
            <div className={styles.title}>
              <h3 className={styles.blogTitle}>{title}</h3>
            </div>
          </div>
          <div className={styles.linkWrap}>
            <p className={styles.readMore}>Read more</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
