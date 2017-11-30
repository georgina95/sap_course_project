jQuery.sap.declare("css_test.util.ODataManager");

css_test.util.ODataManager = function(oComponent) {
	this._oMainController = oComponent;
	this._oConstants = this._oMainController.constants;
	
	var sServiceUrlFieldValues = this._oConstants.Services.urlFieldValues;
	var sServiceUrlMain = this._oConstants.Services.urlMain;
	
	this._oModelFV = new sap.ui.model.odata.ODataModel(sServiceUrlFieldValues, {
		json: true,
		loadMetadataAsync: true
	});
	//this._oModelFV.setUseBatch(true);
	
	this._oModelMain = new sap.ui.model.odata.ODataModel(sServiceUrlMain, {
		json: true,
		loadMetadataAsync: true
	});
};