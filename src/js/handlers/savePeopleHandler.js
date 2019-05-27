/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['ojs/ojcore'],
        function (oj) {
            var SavePersonhandler = {

                savePeopleURL: 'http://127.0.0.1:7101/ADF_REST_Service-RESTWebService-context-root/rest/v1/People',

                createPersonModel: function () {
                    var Person = oj.Model.extend({
                        urlRoot: this.savePeopleURL,
                        idAttribute: "PersonId"
                    });
                    return new Person();
                },

                createPeopleCollection: function () {
                    var People = oj.Collection.extend({
                        url: this.savePeopleURL + "?limit=50",
                        model: this.createPersonModel(),
                        comparator: 'PersonId'
                    });
                    return new People();
                }
            };

            return SavePersonhandler;
        }
);


