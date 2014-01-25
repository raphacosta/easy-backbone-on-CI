/*
  @author: Hashtag Consulting
  @description: Solutions page listing all the present solutions
  @date: 2014-01-25
*/
define([
  'lodash',
  'backbone'
], function(_, Backbone) {
  //declaring a new model.
  var solutionsModel = Backbone.Model.extend({
    initialize: function(){
    }

  });
  //returning object
  return solutionsModel;

});