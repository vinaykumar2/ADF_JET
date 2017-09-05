
define(['ojs/ojcore', 'knockout', 'jquery', 'promise', 'ojs/ojknockout', 'ojs/ojmodel', 'ojs/ojtable', 'ojs/ojinputtext', 'ojs/ojselectcombobox', 'ojs/ojcollectiontabledatasource', 'ojs/ojtimezonedata', 'ojs/ojdatetimepicker'],
    function (oj, ko, $) {

        function restFilterComponentModel(context) {
            var self = this;

            /* date-picker*/
            self.value = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date()));
            self.toValue = ko.observable();
            /*date-picker*/


        }
        return restFilterComponentModel;
    });