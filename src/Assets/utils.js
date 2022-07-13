import md5 from 'md5';
import { SecondaryColor } from './colorPalette';
import React from 'react';

export const ROUTE_BUSINESS_ENGLISH = 'business-english';
export const ROUTE_TOEFL = 'toefl';
export const ROUTE_ACADEMIC_WRITING = 'academic-writing';
export const ROUTE_ENGLISH_CONVERSATION = 'english-conversation';
export const ROUTE_IELTS = 'ielts';
export const ROUTE_GENERAL_ENGLISH = 'general-english';
export const ROUTE_TRANSLATION_SERVICE = 'translation-service';

export const ROUTE_HOME = '/';
export const ROUTE_ABOUT_US = 'about-us';
export const ROUTE_TESTIMONIALS = 'testimonials';
export const ROUTE_OUR_TEAM = 'our-team';
export const ROUTE_OUR_PROGRAM = 'our-program';
export const ROUTE_ENGLISH_COURSES = 'english-course';
export const ROUTE_FREE_TRIAL = 'free-trial';

export const ROUTE_PRE_TEST = 'pre-test';
export const ROUTE_POST_TEST = 'post-test';
export const ROUTE_GENERATE_TEST_CODE = 'generate-test-code';
export const SCORE_VIEW = 'score-view';

export const DESKTOP_SIZE = '1440px';
export const LAPTOP_SIZE = '1024px';
export const TABLET_SIZE = '768px';
export const PHONE_SIZE = '425px';

export const getCurrentDate = () => {
  const date = new Date();

  let month = date.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;

  let day = date.getDate();
  day = day < 10 ? `0${day}` : day;

  return date.getFullYear() + '-' + month + '-' + day;
};

export const testCode = md5(getCurrentDate());

export const convertListeningScore = (score) => {
  if (score >= 39) {
    return 9;
  }

  if (score >= 37) {
    return 8.5;
  }

  if (score >= 35) {
    return 8;
  }

  if (score >= 32) {
    return 7.5;
  }

  if (score >= 30) {
    return 7;
  }

  if (score >= 26) {
    return 6.5;
  }

  if (score >= 23) {
    return 6;
  }

  if (score >= 18) {
    return 5.5;
  }

  if (score >= 16) {
    return 5;
  }

  if (score >= 13) {
    return 4.5;
  }

  if (score >= 10) {
    return 4;
  }

  if (score >= 8) {
    return 3.5;
  }

  if (score >= 6) {
    return 3;
  }

  if (score >= 4) {
    return 2.5;
  }

  if (score >= 0) {
    return 0;
  }
};

export const convertReadingScore = (score) => {
  if (score >= 39) {
    return 9;
  }

  if (score >= 37) {
    return 8.5;
  }

  if (score >= 35) {
    return 8;
  }

  if (score >= 33) {
    return 7.5;
  }

  if (score >= 30) {
    return 7;
  }

  if (score >= 27) {
    return 6.5;
  }

  if (score >= 23) {
    return 6;
  }

  if (score >= 19) {
    return 5.5;
  }

  if (score >= 15) {
    return 5;
  }

  if (score >= 13) {
    return 4.5;
  }

  if (score >= 10) {
    return 4;
  }

  if (score >= 8) {
    return 3.5;
  }

  if (score >= 6) {
    return 3;
  }

  if (score >= 4) {
    return 2.5;
  }

  if (score >= 0) {
    return 0;
  }
};

export const TimeOneHour = Date.now() + 3600000;

export const TimeHalfHour = Date.now() + 1800000;

export const renderer = ({ hours, minutes, seconds, completed }) => {
  let formatMinutes = minutes <= 10 ? `0${minutes}` : minutes;
  let formatSeconds = seconds <= 10 ? `0${seconds}` : seconds;

  if (completed) {
    return <span>Times up</span>;
  }
  if (minutes === 10 || minutes === 5) {
    return (
      <>
        <span style={{ color: SecondaryColor, fontWeight: 700, fontSize: 30 }}>
          {formatMinutes}:{formatSeconds}
        </span>{' '}
        left
      </>
    );
  } else {
    return (
      <>
        <span>
          {hours > 0 ? `${hours}:` : ''}
          {formatMinutes}:{formatSeconds}
        </span>{' '}
        left
      </>
    );
  }
};
