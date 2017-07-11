// Potential libraries

// superagent - https://visionmedia.github.io/superagent/ *
// axios - https://github.com/mzabriskie/axios

import axios from 'axios';

var http = axios.create({
  baseURL: 'https://reddit.com/r/'
})

export http;
