import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import workReducer from '../features/work/workSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		work: workReducer,
	},
});
