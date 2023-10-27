import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import React from 'react';

import styles from './faqs.module.css';

export const FAQs = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <section id="faq" className={styles.FAQWrapper}>
      <h2>FAQs</h2>
      <h3>Motion Wellbeing</h3>
      <Accordion
        className={styles.accordion}
        expanded={expanded === 'panel10'}
        onChange={handleChange('panel10')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel10bh-content"
          id="panel10bh-header"
        >
          <Typography>
            <strong>What do I get when I sign up for Motion Wellbeing?</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            When you sign up to our Standard membership (free) you get access to
            15 activities and the community of users. When you upgrade to our
            Premium membership (£17.99/month) you get access to over 100 varied
            wellbeing activities (videos and print outs), an activity planner,
            data for CQC reports and much more.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className={styles.accordion}
        expanded={expanded === 'panel12'}
        onChange={handleChange('panel12')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel12bh-content"
          id="panel12bh-header"
        >
          <Typography>
            <strong>What activities are on Motion Wellbeing?</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Motion Wellbeing has over 100 wellbeing activities that are always
            being added to! Activities vary significantly having been designed
            to meet a wide range of needs and interests for you and your
            residents. From chair-based exercise to cultural celebration
            activities, Motion Wellbeing will support you to deliver truly
            person-centred care.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={styles.accordion}
        expanded={expanded === 'panel13'}
        onChange={handleChange('panel13')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel13bh-content"
          id="panel13bh-header"
        >
          <Typography>
            <strong>How long do I have to sign up for?</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            When you sign up it will be on a monthly rolling basis. You will be
            billed monthly. If you cancel your subscription, which you can do at
            any time, you will have access to the platform until your paid month
            expires.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={styles.accordion}
        expanded={expanded === 'panel14'}
        onChange={handleChange('panel14')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel14bh-content"
          id="panel14bh-header"
        >
          <Typography>
            <strong>
              What does 'created by Activity Coordinators for Activity
              Coordinators' mean?
            </strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Activity Coordinators and residents are at the heart of everything
            we do, because we know how amazing you are! All of services have
            been designed.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={styles.accordion}
        expanded={expanded === 'panel15'}
        onChange={handleChange('panel15')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel15bh-content"
          id="panel15bh-header"
        >
          <Typography>
            <strong>What technology do I need?</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Just a screen (e.g. TV, laptop, interactive table) and a stable wifi
            connection.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={styles.accordion}
        expanded={expanded === 'panel16'}
        onChange={handleChange('panel16')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel16bh-content"
          id="panel16bh-header"
        >
          <Typography>
            <strong>Who creates the activities?</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            All of the activities have been created by Motion and our partners,
            with years of experience delivering wellbeing activities to a wide
            range of individuals.
          </p>
        </AccordionDetails>
      </Accordion>
    </section>
  );
};
