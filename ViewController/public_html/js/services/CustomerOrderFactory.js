define(['ojs/ojcore', 'ojs/ojmodel'], function (oj) {

    var CustomerOrderFactory = {

        //Lokale instantie van Elastic Search moet gestart zijn.
        resourceUrl : "http://localhost:9200/documents/letters/2/_source",

        // Create a single CustomerOrder instance.
        createCustomerOrderModel : function () {
            console.log('createCustomerOrderModel');
            var CustomerOrder = oj.Model.extend( {
                urlRoot : this.resourceUrl, idAttribute : "summary"
            });
            return new CustomerOrder();
        },

        // Create a CustomerOrder collection.
        createCustomerOrderCollection : function () {
            console.log('createCustomerOrderCollection');
            var CustomerOrders = oj.Collection.extend( {
                url : this.resourceUrl, model : this.createCustomerOrderModel()
            });
            return new CustomerOrders();
        }
    }

    return CustomerOrderFactory;
});