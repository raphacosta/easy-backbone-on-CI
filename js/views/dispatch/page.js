define([
  'jquery',
  'lodash',
  'backbone',
  'vm',
  'text!templates/dispatch/page.html'
], function($, _, Backbone, Vm, dispatchPageTemplate){
  var DispatchPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(dispatchPageTemplate);
    },
    events: {
      'click .add-view': 'addView'
    },
    counter: 1,
    addView: function () {
      var RandomView = Backbone.View.extend({});
      var randomView = Vm.create(this, 'RandomView ' + this.counter, RandomView);
      this.counter++;
      return false;
    }
  });
  return DispatchPage;
});
