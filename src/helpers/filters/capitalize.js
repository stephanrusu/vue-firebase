import Vue from 'vue';

Vue.filter('capitalize', (value) => {
  if (!value) return '';
  const updatedValue = value.toString();
  return updatedValue.charAt(0).toUpperCase() + updatedValue.slice(1);
});
