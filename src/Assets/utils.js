import md5 from 'md5';

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
