/**
 * spoonacular API
 * The spoonacular Nutrition, Recipe, and Food API allows you to access over 380,000 recipes, thousands of ingredients, 800,000 food products, and 100,000 menu items. Our food ontology and semantic recipe search engine makes it possible to search for recipes using natural language queries, such as \"gluten free brownies without sugar\" or \"low fat vegan cupcakes.\" You can automatically calculate the nutritional information for any recipe, analyze recipe costs, visualize ingredient lists, find recipes for what's in your fridge, find recipes based on special diets, nutritional requirements, or favorite ingredients, classify recipes into types and cuisines, convert ingredient amounts, or even compute an entire meal plan. With our powerful API, you can create many kinds of food and especially nutrition apps.  Special diets/dietary requirements currently available include: vegan, vegetarian, pescetarian, gluten free, grain free, dairy free, high protein, whole 30, low sodium, low carb, Paleo, ketogenic, FODMAP, and Primal.
 *
 * The version of the OpenAPI document: 1.1
 * Contact: mail@spoonacular.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/com.spoonacular.client/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/com.spoonacular.client/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SpoonacularApi);
  }
}(this, function(expect, SpoonacularApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SpoonacularApi.MealPlanningApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('MealPlanningApi', function() {
    describe('addMealPlanTemplate', function() {
      it('should call addMealPlanTemplate successfully', function(done) {
        //uncomment below and update the code to test addMealPlanTemplate
        //instance.addMealPlanTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addToMealPlan', function() {
      it('should call addToMealPlan successfully', function(done) {
        //uncomment below and update the code to test addToMealPlan
        //instance.addToMealPlan(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addToShoppingList', function() {
      it('should call addToShoppingList successfully', function(done) {
        //uncomment below and update the code to test addToShoppingList
        //instance.addToShoppingList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('clearMealPlanDay', function() {
      it('should call clearMealPlanDay successfully', function(done) {
        //uncomment below and update the code to test clearMealPlanDay
        //instance.clearMealPlanDay(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('connectUser', function() {
      it('should call connectUser successfully', function(done) {
        //uncomment below and update the code to test connectUser
        //instance.connectUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFromMealPlan', function() {
      it('should call deleteFromMealPlan successfully', function(done) {
        //uncomment below and update the code to test deleteFromMealPlan
        //instance.deleteFromMealPlan(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFromShoppingList', function() {
      it('should call deleteFromShoppingList successfully', function(done) {
        //uncomment below and update the code to test deleteFromShoppingList
        //instance.deleteFromShoppingList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteMealPlanTemplate', function() {
      it('should call deleteMealPlanTemplate successfully', function(done) {
        //uncomment below and update the code to test deleteMealPlanTemplate
        //instance.deleteMealPlanTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('generateMealPlan', function() {
      it('should call generateMealPlan successfully', function(done) {
        //uncomment below and update the code to test generateMealPlan
        //instance.generateMealPlan(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('generateShoppingList', function() {
      it('should call generateShoppingList successfully', function(done) {
        //uncomment below and update the code to test generateShoppingList
        //instance.generateShoppingList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMealPlanTemplate', function() {
      it('should call getMealPlanTemplate successfully', function(done) {
        //uncomment below and update the code to test getMealPlanTemplate
        //instance.getMealPlanTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMealPlanTemplates', function() {
      it('should call getMealPlanTemplates successfully', function(done) {
        //uncomment below and update the code to test getMealPlanTemplates
        //instance.getMealPlanTemplates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMealPlanWeek', function() {
      it('should call getMealPlanWeek successfully', function(done) {
        //uncomment below and update the code to test getMealPlanWeek
        //instance.getMealPlanWeek(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getShoppingList', function() {
      it('should call getShoppingList successfully', function(done) {
        //uncomment below and update the code to test getShoppingList
        //instance.getShoppingList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
