// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'vm'
], function ($, _, Backbone, Vm) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Pages
      'dispatch': 'dispatch',
      'waybill': 'waybill',
      'solutions': 'solutions',
      
      // Default - catch all
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(options){
    var appView = options.appView;
    var router = new AppRouter(options);
    router.on('route:solutions', function () {
      require(['views/solutions/page'], function (SolutionsPage) {
        var SolutionsPage = Vm.create(appView, 'SolutionsPage', SolutionsPage);
        SolutionsPage.render();
      });
    });
    router.on('route:defaultAction', function (actions) {
      require(['views/dashboard/page'], function (DashboardPage) {
        var dashboardPage = Vm.create(appView, 'DashboardPage', DashboardPage);
        dashboardPage.render();
      });
    });
    router.on('route:waybill', function () {
     require(['views/waybill/page'], function (WaybillPage) {
        var waybillPage = Vm.create(appView, 'WaybillPage', WaybillPage);
        waybillPage.render();
      });
    });
    router.on('route:dispatch', function (DispatchPage) {
      require(['views/dispatch/page'], function (DispatchPage) {
        var dispatchPage = Vm.create(appView, 'DispatchPage', DispatchPage);
        dispatchPage.render();
      });
    });
    
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
