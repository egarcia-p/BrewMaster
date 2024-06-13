// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Difficulty = {
  "EASY": "EASY",
  "MEDIUM": "MEDIUM",
  "HARD": "HARD"
};

const { Recipe, User } = initSchema(schema);

export {
  Recipe,
  User,
  Difficulty
};