sap.ui.define([
        'css_test/controller/BaseController',
   		'jquery.sap.global',
		'sap/m/MessageToast'
   	], function(BaseController, jQuery, MessageToast) {
   	"use strict";
    
   	return BaseController.extend("css_test.controller.Main", {
   		onInit: function(){
   		},
   		
   		onNavHome: function() {
   			var sId = "detailHome";
			
			var oSelectedItem = {
					masterId: "master",
					projectId: sId
			};
			this.showDetail(oSelectedItem);
   		}
   		
   	});
});