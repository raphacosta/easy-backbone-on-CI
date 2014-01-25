/*
  @author: Hashtag Consulting
  @description: Solutions page listing all the present solutions
  @date: 2014-01-25
*/
define([
  'jquery',
  'lodash',
  'backbone',
  'models/solutions'
], function($, _, Backbone, model){
  
  //declaring new collection
  solutionsCollection = Backbone.Collection.extend({
    model: model,
    /* LOCAL TESTING API 
    * url: 'http://localhost:8080/FlashDispatch-war/v1.0/slug/solutions/'
    */
    url: 'http://154.0.160.77:8080/FlashDispatch-war/v1.0/slug/solutions/'
  });

  //returning object
  return solutionsCollection;
  
});