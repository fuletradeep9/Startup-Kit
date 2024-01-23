import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient, { axiosMD } from '@app/package/axios/axios';
import apiUrls from '@app/constants/apiUrls';


export const getHomeList = createAsyncThunk('home/getHomeList', async (data) => {
  try {
    console.log(' Log input home/getHomeList body ', data);
    const response = await apiClient.get(apiUrls.LOGIN());
    return response;
  } catch (err) {
    console.log(' home/getHomeList error ', err);
    return {
      isError: 1,
      message: 'Please try again' + `\n${err.toString()}`,
    };
  }
});

// export const getHomeUserList = createAsyncThunk('home/getHomeUserList', async (data) => {
//   try {
//     console.log(' Log input home/getHomeUserList body ', data);
//     const response = await apiClient.get(apiUrls.HISTORY_USER_GET(data));
//     return response;
//   } catch (err) {
//     console.log(' home/getHomeUserList error ', err);
//     return {
//       isError: 1,
//       message: 'Please try again' + `\n${err.toString()}`,
//     };
//   }
// });

// export const getHomeUserItemList = createAsyncThunk('home/getHomeUserItemList', async (data) => {
//   try {
//     console.log(' Log input home/getHomeUserItemList body ', data);
//     const response = await apiClient.get(apiUrls.HISTORY_USER_ITEM_GET(data));
//     return response;
//   } catch (err) {
//     console.log(' home/getHomeUserItemList error ', err);
//     return {
//       isError: 1,
//       message: 'Please try again' + `\n${err.toString()}`,
//     };
//   }
// });

const initialState = {
  isLoadingRequest: false,
  requestLoader: '',
  homeList: undefined,
  homeUserList: undefined,
  homeUserItemList: undefined,
  status: 'idle',
  error: undefined,
  paginate: {
    page: 0,
    take: 10
  },
  total: 0,
  isListEnd: false,
  searchText: null
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    clearError(state) {
      state.error = undefined;
    },
    reset(state) {
      state.isLoadingRequest = false;
      state.requestLoader = '';
      state.homeList = undefined;
      state.status = 'idle';
      state.error = undefined;
    },
    updateHomeList(state, action) {
      state.homeList = action.payload
    },
    resetHomeList(state) {
      state.isLoadingRequest = false;
      state.requestLoader = '';
      state.homeList = undefined;
      state.status = 'idle';
      state.error = undefined;
      state.paginate.page = 0;
      state.total = 0;
      state.isListEnd = false;
      state.searchText = null;
    },
    setPagination(state, action) {
      state.paginate.page = action.payload;
    },
    setSearchText(state, action) {
      state.searchText = action.payload;
    },
    default: initialState
  },
  extraReducers: (builder) => {
    builder.addCase(getHomeList.pending, (state) => {
      state.status = 'loading';
      state.isLoadingRequest = true;
      state.requestLoader = 'getHomeList';
      state.error = undefined;
    });
    builder.addCase(getHomeList.fulfilled, (state, action) => {
      // console.log("=====>>>", action.payload);
      if (action.payload.isError === 0) {
        state.status = 'succeeded';
        state.isLoadingRequest = false;
        state.requestLoader = 'getHomeList';
        state.error = undefined;
        state.total = action.payload.meta
        if (action.payload.data == null || action.payload.data?.length == 0) {
          state.isListEnd = true;
        } else {
          const homeList = state.homeList || []
          state.homeList = [...homeList, ...action.payload.data];
          state.isListEnd = false;
        }
      } else {
        state.status = 'failed';
        state.isLoadingRequest = false;
        state.requestLoader = 'getHomeList';
        state.error = action.payload?.message;
        state.isListEnd = false;
      }
    });
    builder.addCase(getHomeList.rejected, (state, action) => {
      state.status = 'failed';
      state.isLoadingRequest = false;
      state.requestLoader = 'getHomeList';
      const { error } = action;
      state.error = error;
      state.isListEnd = false;
    });
  },
});

export const {
  clearError,
  reset,
  updateHomeList,
  resetHomeList,
  resetHomeUserList,
  resetHomeUserItemList,
  setPagination,
  setSearchText
} = homeSlice.actions;

export default homeSlice.reducer;
