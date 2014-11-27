// ember/app/adapters/application.js
import DS from 'ember-data';
import config from '../config/environment';

export default DS.FirebaseAdapter.extend({
  firebase: new Firebase("https://glowing-torch-716.firebaseio.com")
});