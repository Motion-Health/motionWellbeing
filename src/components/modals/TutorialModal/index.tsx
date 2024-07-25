import CircleIcon from "@mui/icons-material/Circle";
import { Box, Button, Dialog, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import Carousel from "react-material-ui-carousel";

import theme from "@/styles/theme";

const TutorialModal = () => {
  const [isCarouselOpen, setIsCarouselOpen] = useState(true);
  const [carouselPageIndex, setCarouselPageIndex] = useState<
    number | undefined
  >(0);

  const shouldDisplayFullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      open={isCarouselOpen}
      fullScreen={shouldDisplayFullScreen}
      className="tutorial-modal-wrapper"
    >
      <Carousel
        autoPlay={false}
        next={(pageIndex) => setCarouselPageIndex(pageIndex)}
        prev={(pageIndex) => setCarouselPageIndex(pageIndex)}
        index={carouselPageIndex}
        indicators={!shouldDisplayFullScreen}
        navButtonsAlwaysInvisible={true}
        IndicatorIcon={<CircleIcon sx={{ fontSize: "1.2rem" }} />}
        indicatorIconButtonProps={{
          style: {
            color: "#DDDDDD",
            padding: "1.2rem",
            height: "1rem",
            width: "1rem",
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: theme.palette.secondary.dark,
          },
        }}
        className="tutorial-modal-box"
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: shouldDisplayFullScreen ? "3rem auto" : "3rem",
          padding: shouldDisplayFullScreen ? "2rem 1rem" : "0",
          width: "25.25rem",
          alignItems: "center",
          justifyContent: "center",
          overflow: "auto",
        }}
      >
        {tutorialModalScreens.map((screen, index) => {
          const pageNumber = index + 1;

          return (
            <Box
              key={screen.header.split(" ").join("-")}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div className={`tutorial-modal-page-image-${pageNumber}`}>
                {screen?.imageSource && (
                  <img src={screen.imageSource} alt={screen.imageAlt} />
                )}

                {screen?.youTubeVideoId && (
                  <iframe
                    width="404"
                    height="280"
                    src={`https://www.youtube.com/embed/${screen.youTubeVideoId}?rel=0`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Tutorial video"
                    style={{ border: 0 }}
                  />
                )}
              </div>

              <Typography
                variant="h2"
                sx={{ mt: "1.5rem" }}
                className={`tutorial-modal-page-header-${pageNumber}`}
              >
                {screen.header}
              </Typography>

              <Typography
                variant="body2"
                sx={{ mt: "1.5rem" }}
                className={`tutorial-modal-page-paragraph-${pageNumber}`}
              >
                {screen.paragraph}
              </Typography>

              <Button
                variant="contained"
                name="continue"
                sx={{
                  mt: "1.5rem",
                  width: "210px",
                  alignItems: "center",
                }}
                className={`tutorial-modal-page-continue-button-${pageNumber}`}
                onClick={() => {
                  if (carouselPageIndex !== tutorialModalScreens.length - 1) {
                    setCarouselPageIndex(carouselPageIndex! + 1);
                  } else {
                    setIsCarouselOpen(false);
                  }
                }}
              >
                Continue
              </Button>
            </Box>
          );
        })}
      </Carousel>
    </Dialog>
  );
};

type TutorialModalScreen = {
  imageSource?: string;
  imageAlt?: string;
  youTubeVideoId?: string;
  header: string;
  paragraph: string;
};

const tutorialModalScreens: TutorialModalScreen[] = [
  {
    youTubeVideoId: "3B4Ba2nvXt0",
    header: "Take a look around",
    paragraph:
      "Welcome. Watch our short demo video to see how we can help you plan, deliver and rate activities.",
  },
  {
    imageSource: "/assets/images/modal/person-centred-activities.png",
    imageAlt: "Screenshot of 'activities' screen",
    header: "Person-centred activities",
    paragraph:
      "Over 100 person-centred wellbeing activities for you and those that you care for.",
  },
  {
    imageSource: "/assets/images/modal/my-planner.png",
    imageAlt: "Screenshot of 'my planner' screen",
    header: "My planner",
    paragraph:
      "Premium members save time and get ahead by using 'My planner' to schedule all of your activities.",
  },
  {
    imageSource: "/assets/images/modal/rate-activities.png",
    imageAlt: "Screenshot of ratings screen",
    header: "Rate activities",
    paragraph:
      "Once you've completed an activity give it a rating so we know what to create more of.",
  },
  {
    imageSource: "/assets/images/modal/our-community.png",
    imageAlt: "Screenshot of 'community' screen",
    header: "Our community",
    paragraph: "Be part of the Motion community and see what others are up to.",
  },
];
export default TutorialModal;
