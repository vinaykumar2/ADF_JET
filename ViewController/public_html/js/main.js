/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
'use strict';

/**
 * Example of Require.js boostrap javascript
 */

requirejs.config( {
    baseUrl : 'js',

    // Path mappings for the logical module names
    // Update the main-release-paths.json for release mode when updating the mappings
    paths :
    //injector:mainReleasePaths
    {
        'knockout' : 'libs/knockout/knockout-3.4.0.debug',
        'jquery' : 'libs/jquery/jquery-3.1.1',
        'jqueryui-amd' : 'libs/jquery/jqueryui-amd-1.12.0',
        'promise' : 'libs/es6-promise/es6-promise',
        'hammerjs' : 'libs/hammer/hammer-2.0.8',
        'ojdnd' : 'libs/dnd-polyfill/dnd-polyfill-1.0.0',
        'ojs' : 'libs/oj/v3.1.0/debug',
        'ojL10n' : 'libs/oj/v3.1.0/ojL10n',
        'ojtranslations' : 'libs/oj/v3.1.0/resources',
        'text' : 'libs/require/text',
        'signals' : 'libs/js-signals/signals',
        'customElements' : 'libs/webcomponents/CustomElements',
        'proj4' : 'libs/proj4js/dist/proj4-src',
        'css' : 'libs/require-css/css',
        'CountryFactory' : 'services/CountryFactory',
        'CustomerOrderFactory' : 'services/CustomerOrderFactory'
    }
    //endinjector
,
    // Shim configurations for modules that do not expose AMD
    shim :  {
        'jquery' :  {
            exports : ['jQuery', '$']
        }
    }
});

/**
 * A top-level require call executed by the Application.
 * Although 'ojcore' and 'knockout' would be loaded in any case (they are specified as dependencies
 * by the modules themselves), we are listing them explicitly to get the references to the 'oj' and 'ko'
 * objects in the callback
 */
 require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojtoolbar', 'ojs/ojmenu', 'ojs/ojchart', 'ojs/ojselectcombobox', 'jet-composites/basic-chart/loader', 'jet-composites/gantt-chart/loader', 'jet-composites/rest-table/loader', 'jet-composites/rest-table-with-filters/loader', 'jet-composites/elastic-search-table/loader', 'jet-composites/elastic-search-ihc/loader'], function (oj, ko) {
    // this callback gets executed when all required modules are loaded

    /* ------Basic Page------ */

    var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
    self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

    // Header
    // Application Name used in Branding Area
    self.appName = ko.observable("App Name");
    // User Info used in Global Navigation area
    self.userLogin = ko.observable("john.hancock@oracle.com");

    // Footer
    function footerLink(name, id, linkTarget) {
        this.name = name;
        this.linkId = id;
        this.linkTarget = linkTarget;
    }
    self.footerLinks = ko.observableArray([new footerLink('About Oracle', 'aboutOracle', 'http://www.oracle.com/us/corporate/index.html#menu-about'), new footerLink('Contact Us', 'contactUs', 'http://www.oracle.com/us/corporate/contact/index.html'), new footerLink('Legal Notices', 'legalNotices', 'http://www.oracle.com/us/legal/index.html'), new footerLink('Terms Of Use', 'termsOfUse', 'http://www.oracle.com/us/legal/terms/index.html'), new footerLink('Your Privacy Rights', 'yourPrivacyRights', 'http://www.oracle.com/us/legal/privacy/index.html')]);


    /*----- Basis main.js -----*/
    function ViewModel() {
        var self = this;

    }

    ko.applyBindings(new ViewModel(), document.body);

});