import {categoriesApi} from './categories-api';
import {questionsApi} from './questions-api';

export const apiMiddlewares = [
  categoriesApi.middleware,
  questionsApi.middleware,
];
