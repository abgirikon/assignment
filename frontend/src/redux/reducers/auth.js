import {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  AUTH_USER,
  SET_USER_DATA,
  PROJECT_LIST,
  CREATE_PROJECT, UPDATE_PROJECT, GET_TEST_CASE_BY_ID, CLEAR_TESTCASE_INFO,STOP_JOB, RUN_JOB_DATA, CREATE_TEST_STEPS,CLEAR_TEST_STEP_LIST,
  GET_TESTCASE, CREATE_TESTCASE, GET_TEST_STEP_LIST, DELETE_TEST_STEPS, GET_ATTRIBUTES, GET_VALIDATIONS, GET_ALL_TESTCASES, CLEAR_ATTRIBUTES, CLEAR_VALIDATIONS, DELETE_TEST_CASE, UPDATE_TESTCASE, UPDATE_FILE_IN_TEST_STEP
} from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  isLoggedIn: null,
  user: null,
  listProject: null,
  testList: null,
  testStepList: null,
  attributesList: null,
  validationList: null,
  allTestCasesList: null,
  testCaseObject: null,
  testcaseInfo: null,
  stopJob:null,
  signup:null
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_USER:
      if (user) {
        return {
          ...state,
          isLoggedIn: true,
          user: user,
        };
      } else {
        return {
          ...state,
          isLoggedIn: null,
          user: null,
        };
      }

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };

    case PROJECT_LIST:
      return {
        ...state,
        listProject: payload,
      };

    case CREATE_PROJECT:
      return {
        ...state,
        isProjectCreated: true,
        projectsList: payload.data,
      };

    case UPDATE_PROJECT:
      return {
        ...state,
        isProjectUpdated: true,
        user: payload.data,
      };

    case GET_TESTCASE:
      return {
        ...state,
        testList: payload,
      };

    case GET_TEST_CASE_BY_ID:
      return {
        ...state,
        testCaseObject: payload,
      };

    case CREATE_TESTCASE:
      return {
        ...state,
        isTestcaseCreated: true,
        testCaseObject: payload,
      };

      case DELETE_TEST_CASE:
        return {
          ...state,
          isTestCaseDeleted: true,
      };

      case UPDATE_TESTCASE:
        return {
          ...state,
          isTestCaseUpdated: true,
      };

    case GET_ALL_TESTCASES:
      return {
        ...state,
        allTestCasesList: payload,
      };


    case GET_TEST_STEP_LIST:
      return {
        ...state,
        isTestcaseCreated: true,
        testStepList: payload,
      };

      case CLEAR_TEST_STEP_LIST:
        console.log("Clear Test Step");
        return {
          ...state,
          testStepList: null,
      };

      case CREATE_TEST_STEPS:
        return {
          ...state,
          isTeststepCreated: true, 
      };

      case UPDATE_FILE_IN_TEST_STEP:
        return {
          ...state,
          isFileUploaded: true, 
      };

    case DELETE_TEST_STEPS:
      return {
        ...state,
        isDeleted: true,
      };

    case GET_ATTRIBUTES:
      return {
        ...state,
        attributesList: payload,
      };

    case CLEAR_ATTRIBUTES:
      return {
        ...state,
        attributesList: null,
      };

    case CLEAR_TESTCASE_INFO:
      return {
        ...state,
        testCaseObject: null,
      };

    case GET_VALIDATIONS:
      return {
        ...state,
        validationsList: payload,
      };

    case CLEAR_VALIDATIONS:
      return {
        ...state,
        validationList: null
      }


    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    case SET_USER_DATA:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };

    case RUN_JOB_DATA:
      return {
        ...state,
        runJobStatus: payload
      };
    
    case STOP_JOB:
        return {
          ...state,
          stopJob: payload
        };
    case SIGNUP_SUCCESS:
        return {
          ...state,
          signup:payload
        }
    default:
      return state;
  }
};

export default auth;
