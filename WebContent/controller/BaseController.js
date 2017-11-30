/* Global History */
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function(Controller, History) {
	"use strict";
	
	return Controller.extend("css_test.controller.BaseController", {
		
		_setModel: function(modelPath, sModelName) {
			//setting the model
			var oModel = new sap.ui.model.json.JSONModel();
		    oModel.loadData(modelPath,"",false);
		    this.getView().setModel(oModel, sModelName);
		},

   		getSplitAppObj : function() {
   			var result = this.byId("idAppControl");
   			if (!result) {
   				jQuery.sap.log.info("SplitApp object can't be found");
   			}
   			return result;
   		},
		/**
		 * Convenience method for accessing the router in every controller of the application.
		 * @public
		 * @returns {sap.ui.core.routing.Router} the router for this component
		 */
		getRouter: function() {
			return this.getOwnerComponent().getRouter();
		},
		
		showDetail: function(oSelectedItem) {
			//var bReplace = !Device.system.phone;
			var bReplace = true;
			
			this.getRouter().navTo(oSelectedItem.projectId, {
				masterId: oSelectedItem.masterId,
				projectId: oSelectedItem.projectId
			}, bReplace);
		},
		
		setMasterView: function(oView) {
			this.getMainController().oMasterView = oView;
		},
		setDetailView: function(oView) {
			this.getMainController().oDetailView = oView;
		},
		
		/**
		 * Convenience method for getting the view model by name in every controller of the application.
		 * @public
		 * @param {string} sName the model name
		 * @returns {sap.ui.model.Model} the model instance
		 */
		getModel: function(sName) {
			return this.getView().getModel(sName);
		},
		
		/**
		 * Convenience method for setting the view model in every controller of the application.
		 * @public
		 * @param {sap.ui.model.Model} oModel the model instance
		 * @param {string} sName the model name
		 * @returns {sap.ui.mvc.View} the view instance
		 */
		setModel: function(oModel, sName) {
			return this.getView().setModel(oModel, sName);
		},
		
		/**
		 * Convenience method for getting the resource bundle.
		 * @public
		 * @returns {sap.ui.model.resource.ResourceModel} the resourceModel of the component
		 */
		getResourceBundle: function() {
			return this.getOwnerComponent().getModel("i18n").getResourceBundle();
		},
		
		getMainController: function() {
			return this.getOwnerComponent().getAggregation("rootControl").getController();
		}
		
	});

});