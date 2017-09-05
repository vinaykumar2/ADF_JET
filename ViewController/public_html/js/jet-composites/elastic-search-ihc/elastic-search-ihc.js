define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojtable'], function (oj, ko, $) {

        function RestIHCTableComponentModel(ordersData) {
            var self = this;

            self.dataArray = ko.observableArray();
            var url = 'http://pprt31:9200/111a/customer_order/_search?q=customer_name:Huisman&size=20';

           $.getJSON(url, function (data) {
                console.log(JSON.stringify(data));
                var hits = data.hits.hits;
                for (var i = 0; i < hits.length; i++) {
                    var _source = hits[i]._source;
                    self.dataArray.push({
                        order_no: _source.order_no,
                        authorize_code: _source.authorize_code,
                        bill_addr_no: _source.bill_addr_no,
                        contract: _source.contract,
                        company: _source.company,
                        country_code: _source.country_code,
                        currency_code: _source.currency_code,
                        customer_no: _source.customer_no,
                        customer_name: _source.customer_name,
                        state: _source.state,
                        delivery_terms: _source.delivery_terms,
                        language_code: _source.language_code,  
                        market_code: _source.market_code,  
                        note_id: _source.note_id,  
                        order_code: _source.order_code,  
                        order_id: _source.order_id,  
                        language_code: _source.language_code,    
                    });
                }
            });
    
             self.dataSource = new oj.ArrayTableDataSource(
                    self.dataArray,
                    { idAttribute: 'order_no' }
                );
        }

return RestIHCTableComponentModel;

    });