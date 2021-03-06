export const TYPE_MESSAGES = 'messages';
export const TYPE_SPONSORS = 'sponsors';
export const TYPE_NOTIFICATIONS = 'notifications';
export const TYPE_PHARMACIES = 'pharmacies';
export const TYPE_ACTIVE_SPONSOR = 'activeSponsor';
export const TYPE_TOPICS = 'topics';
export const TYPE_LOGIN = 'login';
export const TYPE_REGISTER = 'register';
export const TYPE_LOGOUT = 'logout';
export const TYPE_AUTH = 'auth';
export const TYPE_HOME = 'home';
export const TYPE_USERS = 'users';

export const ROUTE_HOME = '/';
export const ROUTE_MESSAGES = `/${TYPE_MESSAGES}`;
export const ROUTE_SPONSORS = `/${TYPE_SPONSORS}`;
export const ROUTE_NOTIFICATIONS = `/${TYPE_NOTIFICATIONS}`;
export const ROUTE_PHARMACIES = `/${TYPE_PHARMACIES}`;
export const ROUTE_TOPICS = `/${TYPE_TOPICS}`;
export const ROUTE_LOGIN = `/${TYPE_LOGIN}`;
export const ROUTE_REGISTER = `/${TYPE_REGISTER}`;
export const ROUTE_AUTH = `/${TYPE_AUTH}`;

export const PAGE_SIZE = 10;

export const PUSH_NOTIFICATION_POLLEN_TYPE_TOPICS = {
  birk: 'birk_topic',
  bynke: 'bynke_topic',
  el: 'el_topic',
  elm: 'elm_topic',
  græs: 'graes_topic',
  hassel: 'hassel_topic',
  alternaria: 'alternaria_topic',
  cladosporium: 'cladosporium_topic',
};

export const TO_ALL_TOPIC = 'pollen_allerts';

export const PUSH_NOTIFICATION_LOCATION_TOPICS = {
  east: '48_pollen_station_topic',
  west: '49_pollen_station_topic',
};
