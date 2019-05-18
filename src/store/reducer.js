import { puzzles } from 'src/datas';

/**
 * Initial State
 */
const initialState = {
  dataHomePage: [],
  puzzles: [...puzzles],
  loginForm: {
    email: '',
    password: '',
    loading: false,
    loggedIn: false,
    error: false
  },
  registerForm: {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    loading: false,
    signedUp: false,
    error: false
  },
  usersToken: '',
  indexQuiz: 0,
  dataHomeGame: {},
  categoriesQuizzs: [],
  currentSlugCatAge: '',
  currrentSlugCatQuizzs: '',
  quizzsByWorldId: [],
  idCatAge: '',
  questionsOfQuiz: [],
  loaded: false,
  disabledButton: true,
  message: '',
  score: 0,
  myScore: false,
  answerTrue: false,
  error404: false,
  descriptionCurrentQuiz: '',
  currentNameQuiz: ''
};

/**
 * Types
 */
export const DATA_HOME_PAGE = 'DATA_HOME_PAGE';
export const DATA_HOME_GAME = 'DATA_HOME_GAME';

// login
const HANDLE_LOGIN_CHANGE = 'HANDLE_LOGIN_CHANGE';
export const LOGIN_SUBMIT = 'ON_LOGIN_SUBMIT';
const LOGIN_RESET = 'LOGIN_RESET';
const LOGIN_ERROR = 'LOGIN_ERROR';
const LOGGED_IN = 'LOGGED_IN';

// forgotten
export const FORGOTTEN_SUBMIT = 'FORGOTTEN_SUBMIT';

// signup
const REGISTER_INPUT_CHANGE = 'REGISTER_INPUT_CHANGE';
export const SIGNUP_SUBMIT = 'SIGNUP_SUBMIT';
const SIGNEDUP = 'SIGNEDUP';
const SIGNUP_ERROR = 'SIGNUP_ERROR';
const SIGNUP_RESET = 'SIGNUP_RESET';

// quiz
const INCREMENT_INDEX_QUIZ = 'INCREMENT_INDEX_QUIZ';
export const CATEGORIES_QUIZZS = 'CATEGORIES_QUIZZS';
const CURRENT_SLUG_CAT_AGE = 'CURRENT_SLUG_CAT_AGE';
const CURRENT_SLUG_CAT_QUIZZS = 'CURRENT_SLUG_CAT_QUIZZS';
export const QUESTION_BY_ID = 'QUESTION_BY_ID';
const RECEIVED_DATA_QUESTIONS = 'RECEIVED_DATA_QUESTIONS';
const CHOSEN_ANSWER = 'CHOSEN_ANSWER';
const UPDATE_SCORE = 'UPDATE_SCORE';
const GET_MESSAGE = 'GET_MESSAGE';
const MY_SCORE = 'MY_SCORE';
const INITIAL_QUIZ = 'INITIAL_QUIZ';
const ANSWER_IS_TRUE = 'ANSWER_IS_TRUE';
export const QUIZ_BY_WORLD_ID = 'QUIZ_BY_WORLD_ID';
export const ERROR_404 = 'ERROR_404';

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DATA_HOME_PAGE:
      return {
        ...state,
        dataHomePage: [...action.data],
        error404: false
      };
    // form
    case HANDLE_LOGIN_CHANGE:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          [action.name]: action.text,
          error: false
        }
      };

    case LOGIN_SUBMIT:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          loading: true
        }
      };

    case LOGGED_IN:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          loading: false,
          loggedIn: true
        },
        usersToken: action.token
      };

    case LOGIN_ERROR:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          error: true,
          loading: false
        }
      };

    case LOGIN_RESET:
      return {
        ...state,
        loginForm: {
          ...initialState.loginForm
        }
      };

    case REGISTER_INPUT_CHANGE:
      return {
        ...state,
        registerForm: {
          ...state.registerForm,
          [action.name]: action.text
        }
      };

    case SIGNUP_SUBMIT:
      return {
        ...state,
        registerForm: {
          ...state.registerForm,
          loading: true
        }
      };

    case SIGNEDUP:
      return {
        ...state,
        registerForm: {
          ...state.registerForm,
          loading: false,
          signedUp: true
        }
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        registerForm: {
          ...state.registerForm,
          error: true
        }
      };

    case SIGNUP_RESET:
      return {
        ...state,
        registerForm: {
          ...initialState.registerForm
        }
      };

    case FORGOTTEN_SUBMIT:
      return {
        ...state
      };

    case INCREMENT_INDEX_QUIZ:
      return {
        ...state,
        indexQuiz: state.indexQuiz + 1,
        disabledButton: true,
        message: '',
        answerTrue: false
      };
    case DATA_HOME_GAME:
      return {
        ...state,
        dataHomeGame: { ...action.data },
        error404: false
      };
    case CATEGORIES_QUIZZS:
      return {
        ...state,
        categoriesQuizzs: [...action.data],
        error404: false
      };
    case CURRENT_SLUG_CAT_AGE:
      return {
        ...state,
        currentSlugCatAge: action.category,
        idCatAge: action.id
      };
    case CURRENT_SLUG_CAT_QUIZZS:
      return {
        ...state,
        currrentSlugCatQuizzs: action.slug
      };
    case QUIZ_BY_WORLD_ID:
      return {
        ...state,
        quizzsByWorldId: action.data,
        error404: false
      };
    case QUESTION_BY_ID:
      return {
        ...state,
        loaded: false
      };
    case RECEIVED_DATA_QUESTIONS:
      return {
        ...state,
        loaded: true,
        questionsOfQuiz: [...action.dataQuestions],
        descriptionCurrentQuiz: action.dataDescription,
        currentNameQuiz: action.dataName,
        error404: false
      };
    case CHOSEN_ANSWER:
      return {
        ...state,
        disabledButton: false
      };
    case UPDATE_SCORE:
      return {
        ...state,
        score: state.score + 1
      };
    case GET_MESSAGE:
      return {
        ...state,
        message: action.message
      };
    case MY_SCORE:
      return {
        ...state,
        myScore: true
      };
    case INITIAL_QUIZ:
      return {
        ...state,
        indexQuiz: 0,
        message: '',
        myScore: false,
        score: 0,
        disabledButton: true,
        answerTrue: false
      };
    case ANSWER_IS_TRUE:
      return {
        ...state,
        answerTrue: true
      };
    case ERROR_404: {
      return {
        ...state,
        error404: true
      };
    }
    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const handleLoginChange = (text, name) => ({
  type: HANDLE_LOGIN_CHANGE,
  text,
  name
});

export const registerInputChange = (text, name) => ({
  type: REGISTER_INPUT_CHANGE,
  text,
  name
});

export const loginSubmit = () => ({
  type: LOGIN_SUBMIT
});

export const loggedIn = token => ({
  type: LOGGED_IN,
  token
});

export const loginError = () => ({
  type: LOGIN_ERROR
});

export const loginReset = () => ({
  type: LOGIN_RESET
});

export const forgottenSubmit = () => ({
  type: FORGOTTEN_SUBMIT
});

export const getAllCategoriesQuizzs = () => ({
  type: CATEGORIES_QUIZZS
});

export const currentSlugCatQuizzs = slug => ({
  type: CURRENT_SLUG_CAT_QUIZZS,
  slug
});

export const dataForHomePage = () => ({
  type: DATA_HOME_PAGE
});

export const signupSubmit = () => ({
  type: SIGNUP_SUBMIT
});

export const signedUp = () => ({
  type: SIGNEDUP
});

export const signeUpError = () => ({
  type: SIGNUP_ERROR
});

export const signeUpReset = () => ({
  type: SIGNUP_RESET
});

export const dataForHomeGame = categoryId => ({
  type: DATA_HOME_GAME,
  categoryId
});

export const getQuizByWorldId = worldId => ({
  type: QUIZ_BY_WORLD_ID,
  worldId
});

export const getQuestionsByQuizId = id => ({
  type: QUESTION_BY_ID,
  id
});

export const getMyScore = () => ({
  type: MY_SCORE
});

export const userChosenAnswer = () => ({
  type: CHOSEN_ANSWER
});

export const updateScore = () => ({
  type: UPDATE_SCORE
});

export const getMessage = message => ({
  type: GET_MESSAGE,
  message
});

export const messageScore = state => {
  const { score } = state;
  return score < 5 ? 'bad' : 'good';
};

export const answerIsTrue = () => ({
  type: ANSWER_IS_TRUE
});

export const handleClickButtonNext = () => ({
  type: INCREMENT_INDEX_QUIZ
});

export const initialQuiz = () => ({
  type: INITIAL_QUIZ
});

export const receivedDataQuestions = (
  dataQuestions,
  dataDescription,
  dataName
) => ({
  type: RECEIVED_DATA_QUESTIONS,
  dataQuestions,
  dataDescription,
  dataName
});

export const infosCatAge = (category, id) => ({
  type: CURRENT_SLUG_CAT_AGE,
  category,
  id
});

export const getPage404 = () => ({
  type: ERROR_404
});
/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
