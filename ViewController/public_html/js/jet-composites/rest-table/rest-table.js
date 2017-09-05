define(['ojs/ojcore', 'knockout', 'jquery', 'CountryFactory', 'ojs/ojknockout', 'ojs/ojmodel', 'ojs/ojtable', 'ojs/ojcollectiontabledatasource'], function (oj, ko, $, CountryFactory) {

    function RestTableComponentModel(context) {
        var self = this;

        self.countryCollection = CountryFactory.createCountryCollection();
        self.dataSource = ko.observable();

        this.dataSource(new oj.CollectionTableDataSource(this.countryCollection));
        this.countryCollection.fetch();
    }

    return RestTableComponentModel;

});