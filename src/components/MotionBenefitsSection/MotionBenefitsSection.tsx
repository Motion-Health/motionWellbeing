import React from 'react';

import BenefitTile from './BenefitTile';
import { motionBenefits } from './data';
import styles from './MotionBenefitsSection.module.css';

const MotionBenefitsSection: React.FC = () => {
  return (
    <div
      className={styles.motionHelpsSection}
      id="how-motion-helps-your-care-organisation"
    >
      <div className={`row ${styles.howMotionWorks}`}>
        <div className="text-center">
          <div className="title-wrapper">
            <h2
              className={`mbr-section-title mbr-fonts-style ${styles.motionWorksTitle} display-2`}
            >
              <strong>How Motion helps your care organisation</strong>
            </h2>
          </div>
        </div>
      </div>

      <div className={`row ${styles.tilesContainer}`}>
        {motionBenefits.map((benefit, index) => (
          <div key={index} className="col-12 col-lg-4 card mb-4">
            <BenefitTile
              title={benefit.title}
              description={benefit.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MotionBenefitsSection;
