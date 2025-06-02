import React from 'react';

import { MotionBenefit } from './data';
import styles from './MotionBenefitsSection.module.css';

interface BenefitTileProps extends MotionBenefit {}

const BenefitTile: React.FC<BenefitTileProps> = ({ title, description }) => {
  return (
    <div className={styles.featureColumn}>
      <div className={styles.featureBox}>
        <h3 className={`${styles.motionBenefitsTitle} mbr-fonts-style`}>
          <strong>{title}</strong>
        </h3>
        <p className={`${styles.motionBenefitsText} mbr-fonts-style display-7`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default BenefitTile;
