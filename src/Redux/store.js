import { configureStore } from '@reduxjs/toolkit';
import handleAnswer from './handleAnswer';

export default configureStore({
  reducer: { answer: handleAnswer }
});
