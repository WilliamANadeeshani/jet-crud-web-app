/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['ojs/ojcore'],
        function (oj) {
            var GetPeoplehandler = {
                resourceGetPeopleUrl:  'http://127.0.0.1:7101/ADF_REST_Service-RESTWebService-context-root/rest/v1/People',

                //Create single people instance
                createPersonModel: function () {
                    var Person = oj.Model.extend({
                        urlRoot: this.resourceGetPeopleUrl,
                        idAttribute: "PersonId"
                    });
                    return new Person();
                },

                // create people collection 
                createPeopleCollection: function () {
                    var People = oj.Collection.extend({
                        url: this.resourceGetPeopleUrl,
                        model: this.createPersonModel()
                    });
                    return new People();
                }
            };
            return GetPeoplehandler;
        });

