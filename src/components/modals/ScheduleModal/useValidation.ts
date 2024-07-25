// useValidation.ts
import { useCallback, useState } from "react";

type ValidationHook = {
  showTitleError: boolean;
  showStartError: boolean;
  showEndError: boolean;
  validateForm: (formSubmitData: Event) => void;
  resetValidation: () => void;
};

const useValidation = (): ValidationHook => {
  const [showTitleError, setShowTitleError] = useState<boolean>(false);
  const [showStartError, setShowStartError] = useState<boolean>(false);
  const [showEndError, setShowEndError] = useState<boolean>(false);

  const hideValidationErrors = useCallback(() => {
    setShowTitleError(false);
    setShowStartError(false);
    setShowEndError(false);
  }, []);

  const validateForm = useCallback(
    (formSubmitData: Event) => {
      hideValidationErrors();

      if (!formSubmitData?.title) {
        setShowTitleError(true);
      }

      if (!formSubmitData?.start) {
        console.log("show start error");
        console.log(formSubmitData);
        setShowStartError(true);
      }

      if (!formSubmitData?.end) {
        setShowEndError(true);
      }
    },
    [hideValidationErrors]
  );

  const resetValidation = useCallback(() => {
    hideValidationErrors();
  }, [hideValidationErrors]);

  return {
    showTitleError,
    showStartError,
    showEndError,
    validateForm,
    resetValidation,
  };
};

export default useValidation;
