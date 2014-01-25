/*
  @author: Hashtag Consulting
  @description: Solutions page listing all the present solutions
  @date: 2013-01-25
*/
define([
  'jquery',
  'handlebars',
  'lodash',
  'backbone',
  'text!templates/solutions/page.html',
  'solutionsCollection'
], function($, Handlebars, _, Backbone, solutionsPageTemplate, solutionsCollection){
  
  var SolutionsPage = Backbone.View.extend({
    el: '.page',
    initialize: function () {
      var self = this;
      this.collection = new solutionsCollection();
      
      this.collectionList = this.collection.fetch({ 
        success: function () { 
          self.render(); 
        } 
      });
    },
    render: function () {
      template = Handlebars.compile(solutionsPageTemplate);
      try {
        data = JSON.parse(this.collectionList.responseText);
      } catch (error) {
        data = this.collectionList.responseText;
      }

      context = {collection: data}
      html = template(context);
      
      this.$el.html(html);
    }
  });
  return SolutionsPage;
  
});
