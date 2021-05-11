import { request } from '../utils';
import { endpointConstants } from '../constants';

const getAccountData = () => {
  const requestOptions = request.options('GET', {}, true, false);

  return fetch(endpointConstants.GET_ACCOUNT_DATA, requestOptions)
    .then(request.handleResponse)
    .then((res) => res);
};

const getSubscriptionData = () => {
  const requestOptions = request.options('GET', {}, true, false);

  return fetch(endpointConstants.GET_SUBSCRIPTION_DATA, requestOptions)
    .then(request.handleResponse)
    .then((res) => res);
};

const getRecipeData = () => {
  const requestOptions = request.options('GET', {}, true, false);

  return fetch(endpointConstants.GET_RECIPE_DATA, requestOptions)
    .then(request.handleResponse)
    .then((res) => res);
};

const getOrderData = () => {
  const requestOptions = request.options('GET', {}, true, false);

  return fetch(endpointConstants.GET_ORDER_DATA, requestOptions)
    .then(request.handleResponse)
    .then((res) => res);
};

const pauseSubscription = (data) => {
  const requestOptions = request.options(
    'POST',
    JSON.stringify({ dog_id: data.dogId, pause_until: data.pauseUntil }),
    true,
    true
  );

  return fetch(endpointConstants.PAUSE_SUBSCRIPTION, requestOptions)
    .then(request.handleResponse)
    .then((res) => res);
};

const cancelSubscription = (userId) => {
  const requestOptions = request.options(
    'POST',
    JSON.stringify({ id: userId }),
    true,
    false
  );

  return fetch(endpointConstants.CANCEL_SUBSCRIPTION, requestOptions)
    .then(request.handleResponse)
    .then((res) => res);
};

export const userService = {
  getAccountData,
  getRecipeData,
  getSubscriptionData,
  getOrderData,
  pauseSubscription,
  cancelSubscription,
  getSubscriptionData,
};
