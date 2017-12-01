sap.ui.define([
	"css_test/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("css_test.controller.Example", {

		onInit: function() {
			this.setDetailView(this.getView());
		}
		
		/**
		 * Here begins the controller for the MapPage Fragment.
		 * Be prepared!
		 **/
		 
		 
	});
});