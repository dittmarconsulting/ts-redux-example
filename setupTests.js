require('stacktrace-parser');
import jestFetchMock from 'jest-fetch-mock';

global.fetch = jestFetchMock;
global.self = {};
