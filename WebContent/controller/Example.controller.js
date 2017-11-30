sap.ui.define([
	"css_test/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
	"use strict";
	
	return BaseController.extend("css_test.controller.Example", {
		
		onInit: function() {
			
			this.setDetailView(this.getView());
			
		}		
		
	});
});