define(['ojs/ojcore', 'ojs/ojmodel'], function(oj) {

  var CountryFactory = {

    resourceUrl: "https://restcountries.eu/rest/v2/name/stan",

    // Create a single country instance.
    createCountryModel: function() {
      var Country = oj.Model.extend({urlRoot:     this.resourceUrl,
                                   idAttribute: "name"});
      return new Country();
    },

    // Create a country collection.
    createCountryCollection: function() {
      console.log('createCountryCollection');
      var Countries = oj.Collection.extend({url:   this.resourceUrl,
                                         model: this.createCountryModel()});
      return new Countries();
    }
  }

  return CountryFactory;
});