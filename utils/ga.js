// utils/ga.js
import ReactGA from 'react-ga';

export const initGA = (trackingId) => {
  ReactGA.initialize(trackingId);
};

export const logButtonClick = (buttonName) => {
  ReactGA.event({
    category: 'User Interaction',
    action: 'Button Click',
    label: buttonName,
  });
};

export const logFormSubmission = (formName) => {
  ReactGA.event({
    category: 'User Interaction',
    action: 'Form Submission',
    label: formName,
  });
};
