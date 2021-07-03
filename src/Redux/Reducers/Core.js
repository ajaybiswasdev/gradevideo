import {
  GET_BRAINTREEKEY,
  GET_BRAINTREEKEY_SUCCESS,
  GET_BRAINTREEKEY_FAIL,
  INIT_APP,
  GET_BLOG_LIST_SUCCESS,
  GET_CHANNELS,
  GET_CHANNELS_SUCCESS,
  GET_CHANNELS_FAIL,
  GET_CHANNEL_DETAIL,
  GET_CHANNEL_DETAIL_SUCCESS,
  GET_CHANNEL_DETAIL_FAIL,
  GET_VIDEO_DETAIL,
  GET_VIDEO_DETAIL_SUCCESS,
  GET_VIDEO_DETAIL_FAIL,
  GET_HOME_DATA,
  GET_HOME_DATA_SUCCESS,
  GET_HOME_DATA_FAIL,
  GET_TV_DATA,
  GET_TV_DATA_SUCCESS,
  GET_TV_DATA_FAIL,
} from "../Type";

const INITIAL = {
  tutors: null,
  connections: null,
  subjects: null,
  levels: null,
  plans: null,
  schools: null,
  cities: null,
  braintreeKey: null,
  channels: null,
  channelData: null,
  videoDetailData: null,
  homeData: null,
  tvDatas: null,
  universityLadingData: null
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    // BLOS LIST
    case GET_BLOG_LIST_SUCCESS:
      return { ...state, bloglist: action.payload };
    default:
      return state;

    // BRAINTREEKEY
    case GET_BRAINTREEKEY:
      return { ...state, braintreeKey: null };
    case GET_BRAINTREEKEY_SUCCESS:
      const { token } = action.payload;
      return { ...state, braintreeKey: token };
    case GET_BRAINTREEKEY_FAIL:
      return { ...state, braintreeKey: null };

    // CHANNELS
    case GET_CHANNELS:
      return { ...state, channels: null };
    case GET_CHANNELS_SUCCESS:
      return { ...state, channels: action.payload };
    case GET_CHANNELS_FAIL:
      return { ...state, channels: null };

    // CHANNEL DETAIL
    case GET_CHANNEL_DETAIL:
      return { ...state, channelData: null };
    case GET_CHANNEL_DETAIL_SUCCESS:
      return { ...state, channelData: action.payload };
    case GET_CHANNEL_DETAIL_FAIL:
      return { ...state, channelData: null };

    // VIDEO DETAIL
    case GET_VIDEO_DETAIL:
      return { ...state, videoDetailData: null };
    case GET_VIDEO_DETAIL_SUCCESS:
      return { ...state, videoDetailData: action.payload };
    case GET_VIDEO_DETAIL_FAIL:
      return { ...state, videoDetailData: null };

    // HOME DATA
    case GET_HOME_DATA:
      return { ...state, homeData: null };
    case GET_HOME_DATA_SUCCESS:
      return { ...state, homeData: action.payload };
    case GET_HOME_DATA_FAIL:
      return { ...state, homeData: null };

    // TV DATA
    case GET_TV_DATA:
      return { ...state, tvDatas: null };
    case GET_TV_DATA_SUCCESS:
      return { ...state, tvDatas: action.payload };
    case GET_TV_DATA_FAIL:
      return { ...state, tvDatas: null };

   
  }
};
