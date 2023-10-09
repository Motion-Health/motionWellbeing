import Image from 'next/image';
import React, { memo, useCallback, useRef, useState } from 'react';

import styles from './hero.module.css';

interface HeroProps {
  children: React.ReactNode;
  mode?: 'small' | 'large';
  theme?: 'light' | 'dark';
  backgroundImage?: string;
  videoSrc?: string;
}

const Hero: React.FC<HeroProps> = ({
  children,
  mode = 'large',
  theme = 'light',
  backgroundImage,
  videoSrc,
}) => {
  const [isMuted, setIsMuted] = useState<any>(true);
  const video: any = useRef(null);

  const navigateToServices = useCallback(() => {
    document.getElementById('services')?.scrollIntoView({
      top: 140,
      behavior: 'smooth',
    });
  }, []);
  return (
    <section className={styles.hero}>
      <div className={styles.herowrapper}>
        {videoSrc && (
          <div className={styles.videoContainer}>
            <Image
              src="/assets/home/FallbackImage.jpg"
              alt="Video poster"
              layout="fill"
              objectFit="cover"
            />
            <video
              className={styles.herovideo}
              ref={video}
              autoPlay={true}
              loop
              muted={isMuted}
              width="320"
              height="240"
            >
              <source
                src="/assets/home/video.mp4"
                type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
              ></source>
            </video>
          </div>
        )}

        <div className={styles.heroContent}>
          {children}

          <div className={styles.arrow}>
            <button
              className={styles.arrowButton}
              onClick={navigateToServices}
              aria-label="Navigate to Services"
            >
              <svg
                width="80"
                height="48"
                viewBox="0 0 80 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.4657 30.7844L32.7157 24.0344C32.577 23.891 32.4996 23.6994 32.4996 23.5C32.4996 23.3006 32.577 23.109 32.7157 22.9656C32.8578 22.8248 33.0499 22.7458 33.25 22.7458C33.4502 22.7458 33.6422 22.8248 33.7844 22.9656L39.25 28.4406L39.25 13.75C39.25 13.5511 39.329 13.3603 39.4697 13.2197C39.6104 13.079 39.8011 13 40 13C40.1989 13 40.3897 13.079 40.5304 13.2197C40.671 13.3603 40.75 13.5511 40.75 13.75L40.75 28.4406L46.2157 22.9656C46.3614 22.846 46.5464 22.7849 46.7347 22.7942C46.923 22.8034 47.1011 22.8824 47.2344 23.0157C47.3677 23.149 47.4466 23.3271 47.4559 23.5154C47.4651 23.7037 47.404 23.8887 47.2844 24.0344L40.5344 30.7844C40.3922 30.9252 40.2002 31.0042 40 31.0042C39.7999 31.0042 39.6078 30.9252 39.4657 30.7844Z"
                  fill="white"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="79"
                  height="47"
                  rx="23.5"
                  stroke="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default memo(Hero);
