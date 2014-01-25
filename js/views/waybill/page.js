define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/waybill/page.html'
], function($, _, Backbone, waybillPageTemplate){
  var WaybillPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(waybillPageTemplate);
    }
  });
  return WaybillPage;
});
