import React from "react";
import styles from "./faqs.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const FAQs = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <section id="faq" className={styles.FAQWrapper}>
      <h2>FAQs</h2>
      <h3>Tailored Exercise Programme</h3>
      <Accordion
        className={styles.accordion}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>
            <strong>What is included in the package?</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            When you join Motions tailored exercise programme you receive a
            weekly session delivered by the same instructor, a package of
            sensory exercise equipment, a live-streaming device, as well as
            monthly impact reports (for the CQC) and ongoing support. All of
            this is included in the £45/session fee.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={styles.accordion}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography>
            <strong>How long do I have to sign up for?</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            We know that it's important to see if our sessions are right for
            your residents, which is why we offer a 3-month trial. Once you've
            experienced how amazing they are you can sign up for 9 months.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={styles.accordion}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel1bh-header"
        >
          <Typography>
            <strong>
              What does 'live-streamed exclusively to your residents' mean?
            </strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            We deliver our sessions via livestream to a communal area in your
            home (e.g. lounge). Each session is tailored for your residents and
            is only delivered to your residents, not other homes at the same
            time! This means residents can speak to and build up a meaningful
            relationship with their Motion Motivator (instructor).
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className={styles.accordion}
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography>
            <strong>How often do sessions take place?</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Sessions take place weekly or fortnightly so that residents make
            continued progress and build a meaningful relationship with their
            Motivator. We work with you to find a day and time that works best!
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={styles.accordion}
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography>
            <strong>
              What does 'live-streamed exclusively to your residents' mean?
            </strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            We deliver our sessions via livestream to a communal area in your
            home (e.g. lounge). Each session is tailored for your residents and
            is only delivered to your residents, not other homes at the same
            time! This means residents can speak to and build up a meaningful
            relationship with their Motion Motivator (instructor).
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={styles.accordion}
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography>
            <strong>How often do sessions take place?</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Sessions take place weekly or fortnightly so that residents make
            continued progress and build a meaningful relationship with their
            Motivator. We work with you to find a day and time that works best!
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={styles.accordion}
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8bh-content"
          id="panel8bh-header"
        >
          <Typography>
            <strong>Who delivers the sessions?</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            All sessions are delivered by qualified Motion Motivators
            (instructors), who are experts in exercise and wellbeing for older
            adults. Our team of Motivators are passionate, energetic and
            supportive. We buddy your home up with one of our Motivators who
            will deliver all of your sessions.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={styles.accordion}
        expanded={expanded === "panel9"}
        onChange={handleChange("panel9")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9bh-content"
          id="panel9bh-header"
        >
          <Typography>
            <strong>What technology do I need?</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>Just a TV and a stable wifi connection.</p>
        </AccordionDetails>
      </Accordion>
      <h3>Motion Wellbeing</h3>
      <Accordion
        className={styles.accordion}
        expanded={expanded === "panel10"}
        onChange={handleChange("panel10")}
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
        expanded={expanded === "panel12"}
        onChange={handleChange("panel12")}
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
        expanded={expanded === "panel13"}
        onChange={handleChange("panel13")}
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
        expanded={expanded === "panel14"}
        onChange={handleChange("panel14")}
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
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
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
        expanded={expanded === "panel15"}
        onChange={handleChange("panel15")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel15bh-content"
          id="panel15bh-header"
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
