sap.ui.define([
	"css_test/controller/BaseController",
	"sap/ui/Device",
	"sap/ui/table/TreeTable",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	'sap/m/MessageToast'
], function(BaseController, Device, TreeTable, JSONModel, Filter, MessageToast) {
	"use strict";

	return BaseController.extend("css_test.controller.Master", {

		onInit: function() {

			this.setMasterView(this.getView());

			var oSelectedItem = {
				masterId: "master",
				projectId: "detailHome"
			};
			this.showDetail(oSelectedItem);
		},

		onNavMaster: function(oEvent) {
			this.getSplitAppObj().toMaster(this.createId("masterSecond"));
		},

		onNavDetail: function(sPageId){
		var oSelectedItem = {
					masterId: "master",
					projectId: sPageId
			};
			this.showDetail(oSelectedItem);
		},
		
		onSearchOwner: function(oEvt) {

			// add filter for search
			var aFilters = [];
			var sQuery = oEvt.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("owner", sap.ui.model.FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			}

			// update list binding
			var list = this.getView().byId("masterList");
			var binding = list.getBinding("items");
			binding.filter(aFilters, "Application");
		},

		onSearchTags: function(oEvt) {

			// add filter for search
			var aFilters = [];
			var sQuery = oEvt.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("tags", sap.ui.model.FilterOperator.Any, sQuery);
				aFilters.push(filter);
			}

			// update list binding
			var list = this.getView().byId("masterList");
			var binding = list.getBinding("items");
			binding.filter(aFilters, "Application");
		},

		_onPressOwner: function(oEvent) {
			var oSelectedItem = oEvent.getSource().getSelectedItem();
			var sPath = oSelectedItem.getBindingContextPath();
			
			MessageToast.show("Pressed : " + oSelectedItem.getTitle());
			
			var oModel = this.getView().getModel("model");
			var oSelectedNode = oModel.getObject(sPath);
			
			var oTechnical = this.getView().getModel("technical");
			oTechnical.setProperty("/selectedItem", oSelectedNode);
			
			this.onNavDetail("example");
		},

		onSelectMenu: function(oEvent) {
			var sId = oEvent.getParameter("item").getProperty("key");

			var oSelectedItem = {
				masterId: "master",
				projectId: sId
			};
			this.showDetail(oSelectedItem);
		},

		onAfterRendering: function() {
			console.log("Done rendering");
		}

	});
});