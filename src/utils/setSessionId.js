import axios from 'axios';

const setSessionId = session_id => {
  if (session_id) {
    axios.defaults.params = {};
    axios.defaults.params['session_id'] = session_id;
  } else {
    delete axios.defaults.params['session_id'];
  }
};

export default setSessionId;
