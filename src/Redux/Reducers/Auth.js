import {
  GET_AUTH_SIGN_IN,
  GET_AUTH_SIGN_IN_SUCCESS,
  GET_AUTH_SIGN_IN_FAIL,
  GET_AUTH_SIGN_OUT,
  GET_AUTH_SIGN_OUT_SUCCESS,
  GET_AUTH_SIGN_OUT_FAIL,
  GET_AUTH_SIGN_UP,
  GET_AUTH_SIGN_UP_SUCCESS,
  GET_AUTH_SIGN_UP_FAIL,
  GET_PROFILE_UPDATE,
  GET_PROFILE_UPDATE_SUCCESS,
  GET_PROFILE_UPDATE_FAIL,
  GET_AUTH_HUBSPOT_SIGN_UP,
  GET_AUTH_HUBSPOT_SIGN_UP_SUCCESS,
  GET_AUTH_HUBSPOT_SIGN_UP_FAIL,
  GET_AUTH_FORGOT_PASSWORD,
  GET_AUTH_FORGOT_PASSWORD_SUCCESS,
  GET_AUTH_FORGOT_PASSWORD_FAIL,
  GET_AUTH_RESET_PASSWORD,
  GET_AUTH_RESET_PASSWORD_SUCCESS,
  GET_AUTH_RESET_PASSWORD_FAIL,
  TUTOR_SIGN_UP,
  TUTOR_SIGN_UP_SUCCESS,
  TUTOR_SIGN_UP_FAIL,
  MAILCHIMP,
  MAILCHIMP_SUCCESS,
  MAILCHIMP_FAIL,
  INIT_APP,
  GET_SEND_NONCE_TO_SERVER,
  GET_SEND_NONCE_TO_SERVER_SUCCESS,  
  GET_SEND_NONCE_TO_SERVER_FAIL,
  GET_TV_SUBSCRIBE,
  GET_TV_SUBSCRIBE_SUCCESS,
  GET_TV_SUBSCRIBE_FAIL,
  GET_TUTOR_PROFILE_UPDATE,
  GET_TUTOR_PROFILE_UPDATE_SUCCESS,
  GET_TUTOR_PROFILE_UPDATE_FAIL,
} from "../Type";
const INITIAL = {
  signIn: null,
  signUp: null,
  signOut: null,
  tutorSignUp: null,
  forgotPassword: null,
  resetPassword: null,
  token: "",
  user: {},
  signErr: null,
  signupHubspotStatus: null,
  hubspotErr: null,
  profileUpdate: null,
  profileUpdateErr: null,
  nonceUpdate: null,
  nonceUpdateErr: null,
  subscribeRes: null,
  subscribeErr: '',
  tutorProfileUpdateStatus: null,
  tutorProfileUpdateErr: null,
};
export default (state = INITIAL, action) => {
  switch (action.type) {
    case INIT_APP: {
      const user = JSON.parse(sessionStorage.getItem("user"));
      const token = sessionStorage.getItem("token");
      console.log("INIT APP", sessionStorage);
      return { ...state, user: user, token: token, signErr: null };
    }
    // SIGNIN
    case GET_AUTH_SIGN_IN:
      return { ...state, signIn: null };
    case GET_AUTH_SIGN_IN_SUCCESS: {
      const { token, user } = action.payload;
      console.log(action);
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("user", JSON.stringify(user));

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(token));

      return { ...state, user: user, token: token };
    }
    case GET_AUTH_SIGN_IN_FAIL:
      const {error} = action.payload
      return { ...state, user: null ,token: null, signErr: error };

    

    // SIGNUPHUBSPOT
    case GET_AUTH_HUBSPOT_SIGN_UP:
      return { ...state, message: null };
    case GET_AUTH_HUBSPOT_SIGN_UP_SUCCESS: {
      const { message } = action.payload;
      return { ...state, signupHubspotStatus: message};
    }
    case GET_AUTH_HUBSPOT_SIGN_UP_FAIL:
      const {errors} = action.payload
      return { ...state, hubspotErr: errors };

    // TUTORSIGNUP
    case TUTOR_SIGN_UP:
      return { ...state, tutorSignUp: null };
    case TUTOR_SIGN_UP_SUCCESS:
      const { token, user } = action.payload;
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("user", JSON.stringify(user));

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(token));
      
      // return { ...state, tutorSignUp: action.payload };
      return { ...state, user: user, token: token };
    case TUTOR_SIGN_UP_FAIL: {
      const {message} = action.payload
      return { ...state, signErr: action.payload };
    }
    
    

    // TV SUBSCRIBE
    case GET_TV_SUBSCRIBE:
      return { ...state, subscribeRes: null };
    case GET_TV_SUBSCRIBE_SUCCESS: {
      return { ...state, subscribeRes: action.payload.message};
    }
    case GET_TV_SUBSCRIBE_FAIL:
      return { ...state, subscribeRes: null, subscribeErr: action.payload.message };


    case GET_TUTOR_PROFILE_UPDATE_FAIL:
      return { ...state, tutorProfileUpdateStatus: null, tutorProfileUpdateErr: action.payload.error };

    default:
      return state;
  }
};
