/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * create module
 */
define(['knockout', 'jquery', 'handlers/savePeopleHandler', 'ojs/ojlabel', 'ojs/ojinputtext', 'ojs/ojbutton', 'ojs/ojmodel', 'ojs/ojcollectiontabledatasource'],
        function (ko, $, savePeopleHandler) {
            /**
             * The view model for the main content view template
             */
            function CreateViewModel() {
                var self = this;
                self.peopleCollection = savePeopleHandler.createPeopleCollection();
                self.DeptCol = ko.observable();
                self.DeptCol(this.peopleCollection);

                self.addDPerson = function (formElement, event) {
                    var recordAttrs = {
                        PersonId: $("#newPersonId").val(),
                        PersonName: $("#newPersonName").val(),
                        PersonEmail: $("#newPersonEmail").val(),
                        PersonDesignation: $("#newPersonDesignation").val(),
                        links: {People: {rel: 'child', href: self.serviceURL}}
                    };

                    self.DeptCol().create(recordAttrs,
                            {
                                'contentType': 'application/vnd.oracle.adf.resourceitem+json',
                                success: function (response) {
                                    alert('Success in Create');
                                },
                                error: function (jqXHR, textStatus, errorThrown) {
                                    alert('Error in Create: ' + textStatus);
                                }
                            });
                };
            }
            return CreateViewModel;
        });
