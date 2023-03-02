import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchWorks } from './fetchWork';

const initialState = {
	works: [],
	isLoading: false,
	hasLoaded: false,
	hasErrored: false,
	errorMessage: '',
};

export const loadWorksAsync = createAsyncThunk(
	'work/loadWorks',
	async () => {
		let result;
		await fetchWorks().then(res => {
			result = res;
		});
		return result;
	}
);

export const workSlice = createSlice({
	name: 'work',
	initialState,
	reducers: {
		loadWorks: (state, action) => {
			state.works = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadWorksAsync.pending, (state) => {
				state.isLoading = true;
				state.hasLoaded = false;
				state.hasErrored = false;
			})
			.addCase(loadWorksAsync.fulfilled, (state, action) => {
				state.isLoading = false;
				state.hasLoaded = true;
				state.hasErrored = false;
				state.works = action.payload;
			})
			.addCase(loadWorksAsync.rejected, (state, action) => {
				state.isLoading = false;
				state.hasLoaded = false;
				state.hasErrored = true;
				state.errorMessage = action.errorMessage;
			});
	},
});

export const { loadWorks } = workSlice.actions;

export default workSlice.reducer; 
