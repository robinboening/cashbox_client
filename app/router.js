import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('cashboxes', function() {
    this.route('show', { path: '/:cashbox_id' });
    this.route('edit', { path: '/:cashbox_id/edit' });

    this.route('books', { resetNamespace: true }, function() {
      this.route('show', { path: '/:book_id' });
    });
  });
});

export default Router;
