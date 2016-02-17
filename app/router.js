import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('cashboxes', function() {
    this.route('new', { path: '/new' });
    this.route('show', { path: '/:cashbox_id' });
    this.route('edit', { path: '/:cashbox_id/edit' });

    this.resource('books', { resetNamespace: true }, function() {
      this.route('show', { path: '/:book_id' });
      this.route('edit', { path: '/:book_id/edit' });
    });
  });
});

export default Router;
