import { createSlice } from '@reduxjs/toolkit';

export const handleAnswer = createSlice({
  name: 'answer',
  initialState: {
    value: {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
      9: '',
      10: '',
      11: '',
      12: '',
      13: '',
      14: '',
      15: '',
      16: '',
      17: '',
      18: '',
      19: '',
      20: '',
      21: '',
      22: '',
      23: '',
      24: '',
      25: '',
      26: '',
      27: '',
      28: '',
      29: '',
      30: '',
      31: '',
      32: '',
      33: '',
      34: '',
      35: '',
      36: '',
      37: '',
      38: '',
      39: '',
      40: ''
    },
    readingAnswer: {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
      9: '',
      10: '',
      11: '',
      12: '',
      13: '',
      14: '',
      15: '',
      16: '',
      17: '',
      18: '',
      19: '',
      20: '',
      21: '',
      22: '',
      23: '',
      24: '',
      25: '',
      26: '',
      27: '',
      28: '',
      29: '',
      30: '',
      31: '',
      32: '',
      33: '',
      34: '',
      35: '',
      36: '',
      37: '',
      38: '',
      39: '',
      40: ''
    },
    writingAnswer: {
      1: '',
      2: ''
    },
    audio: {
      1: true,
      2: true,
      3: true,
      4: true,
      // 5 only use as parameter for 4
      5: true
    },
    postTestListening: {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
      9: '',
      10: '',
      11: '',
      12: '',
      13: '',
      14: '',
      15: '',
      16: '',
      17: '',
      18: '',
      19: '',
      20: '',
      21: '',
      22: '',
      23: '',
      24: '',
      25: '',
      26: '',
      27: '',
      28: '',
      29: '',
      30: '',
      31: '',
      32: '',
      33: '',
      34: '',
      35: '',
      36: '',
      37: '',
      38: '',
      39: '',
      40: ''
    },
    postTestReading: {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
      9: '',
      10: '',
      11: '',
      12: '',
      13: '',
      14: '',
      15: '',
      16: '',
      17: '',
      18: '',
      19: '',
      20: '',
      21: '',
      22: '',
      23: '',
      24: '',
      25: '',
      26: '',
      27: '',
      28: '',
      29: '',
      30: '',
      31: '',
      32: '',
      33: '',
      34: '',
      35: '',
      36: '',
      37: '',
      38: '',
      39: '',
      40: ''
    },
    postTestWriting: {
      1: '',
      2: ''
    },
    postTestAudio: {
      1: true,
      2: true,
      3: true,
      4: true,
      // 5 only use as parameter for 4
      5: true
    }
  },
  reducers: {
    updateAnswer: (state, action) => {
      state.value = action.payload;
    },
    updateReadingAnswer: (state, action) => {
      state.readingAnswer = action.payload;
    },
    updateWritingAnswer: (state, action) => {
      state.writingAnswer = action.payload;
    },
    updateAudio: (state, action) => {
      state.audio = action.payload;
    },
    updatePostTestListeningAnswer: (state, action) => {
      state.postTestListening = action.payload;
    },
    updatePostTestReadingAnswer: (state, action) => {
      state.postTestReading = action.payload;
    },
    updatePostTestWritingAnswer: (state, action) => {
      state.postTestWriting = action.payload;
    },
    updatePostTestAudio: (state, action) => {
      state.postTestAudio = action.payload;
    }
  }
});

export const {
  updateAnswer,
  updateReadingAnswer,
  updateWritingAnswer,
  updateAudio,
  updatePostTestListeningAnswer,
  updatePostTestAudio,
  updatePostTestWritingAnswer,
  updatePostTestReadingAnswer
} = handleAnswer.actions;

export default handleAnswer.reducer;
