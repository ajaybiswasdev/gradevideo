import {
  GET_CONNECTIONS,
  GET_CONNECTIONS_SUCCESS,
  GET_CONNECTIONS_FAIL,
  GET_TUTORS_FAIL,
  GET_TUTORS,
  GET_TUTORS_SUCCESS,
  GET_PLANS,
  GET_PLANS_SUCCESS,
  GET_PLANS_FAIL,
  GET_LEVELS,
  GET_LEVELS_SUCCESS,
  GET_LEVELS_FAIL,
  GET_SUBJECTS,
  GET_SUBJECTS_FAIL,
  GET_SUBJECTS_SUCCESS,
  GET_SCHOOLS,
  GET_SCHOOLS_FAIL,
  GET_SCHOOLS_SUCCESS,
  GET_CITIES,
  GET_CITIES_FAIL,
  GET_CITIES_SUCCESS,
  GET_BLOG_LIST,
  GET_BLOG_LIST_SUCCESS,
  GET_BLOG_LIST_FAIL,
  GET_BRAINTREEKEY,
  GET_BRAINTREEKEY_FAIL,
  GET_BRAINTREEKEY_SUCCESS,
  GET_JOBS,
  GET_JOBS_FAIL,
  GET_JOBS_SUCCESS,
  GET_CHANNELS,
  GET_CHANNELS_FAIL,
  GET_CHANNELS_SUCCESS,
  GET_CHANNEL_DETAIL,
  GET_CHANNEL_DETAIL_FAIL,
  GET_CHANNEL_DETAIL_SUCCESS,
  GET_VIDEO_DETAIL,
  GET_VIDEO_DETAIL_FAIL,
  GET_VIDEO_DETAIL_SUCCESS,
  GET_HOME_DATA,
  GET_HOME_DATA_FAIL,
  GET_HOME_DATA_SUCCESS,
  GET_TV_DATA,
  GET_TV_DATA_FAIL,
  GET_TV_DATA_SUCCESS,
  GET_UNIVERSITY_LADING_DATA,
  GET_UNIVERSITY_LADING_DATA_FAIL,
  GET_UNIVERSITY_LADING_DATA_SUCCESS,
  INIT_APP,
} from "../Type";
import {
  getConnections,
  getTutors,
  getPlans,
  getLevels,
  getSubjects,
  getSchools,
  getCities,
  getBlogListing,
  getBraintreekey,
  getJobs,
  getChannels,
  getChannelDetail,
  getVideoDetail,
  getHomeData,
  getGradeTvData,
  getUniversityLandingData
} from "../../Api/Core";


export const initAppAction = () => (dispatch) => {
  dispatch({ type: INIT_APP });
};


export const getChannelsAction = () => async (dispatch) => {
  dispatch({ type: GET_CHANNELS });
  const res = await getChannels();
  if (res && res.data && res.data.data) {
    dispatch({ type: GET_CHANNELS_SUCCESS, payload: res.data.data });
  } else {
    dispatch({ type: GET_CHANNELS_FAIL, payload: res.data });
  }
};

export const getChannelDetailAction = (channel_id) => async (dispatch) => {
  dispatch({ type: GET_CHANNEL_DETAIL });
  const res = await getChannelDetail(channel_id);
  if (res && res.data && res.data.data) {
    dispatch({ type: GET_CHANNEL_DETAIL_SUCCESS, payload: res.data.data });
  } else {
    dispatch({ type: GET_CHANNEL_DETAIL_FAIL, payload: res.data });
  }
};

export const getVideoDetailAction = (channel_id) => async (dispatch) => {
  dispatch({ type: GET_VIDEO_DETAIL });
  const res = await getVideoDetail(channel_id);
  if (res && res.data && res.data.data) {
    dispatch({ type: GET_VIDEO_DETAIL_SUCCESS, payload: res.data.data });
  } else {
    dispatch({ type: GET_VIDEO_DETAIL_FAIL, payload: res.data });
  }
};


export const getGradeTvDataAction = () => async (dispatch) => {
  dispatch({ type: GET_TV_DATA });
  const res = await getGradeTvData();
  if (res && res.data && res.success) {
    dispatch({ type: GET_TV_DATA_SUCCESS, payload: res.data });
  } else {
    dispatch({ type: GET_TV_DATA_FAIL, payload: res.data });
  }
};