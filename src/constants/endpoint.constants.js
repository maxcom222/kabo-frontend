// src/constants/endpoint.constants.js

const appDomain = process.env.REACT_APP_DOMAIN;
const apiVersion = process.env.REACT_APP_API_VERSION;

export const endpointConstants = {
  LOGIN: `${appDomain}/login`,
  GET_ACCOUNT_DATA: `${appDomain}/${apiVersion}/user/details`,
  PAUSE_SUBSCRIPTION: `${appDomain}/${apiVersion}/user/subscriptions/pause`,
  GET_SUBSCRIPTION_DATA: `${appDomain}/${apiVersion}/user/subscriptions`,
  CANCEL_SUBSCRIPTION: `${appDomain}/${apiVersion}/user/subscriptions/cancel`,
  GET_RECIPE_DATA: `${appDomain}/${apiVersion}/onboarding/recipes`,
  UPDATE_MEAL_PLAN: `${appDomain}/${apiVersion}/user/subscriptions/meal_plan`,
  GET_ORDER_DATA: `${appDomain}/${apiVersion}/user/orders`,
};
