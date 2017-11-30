// Define a root UI component that exposes the main view
jQuery.sap.declare("css_test.Component");

sap.ui.core.UIComponent.extend("css_test.Component", {
	
	metadata: {
		name: "TestApplication",
		version: "1.0",
		includes: ["css/style.css"],
		dependencies: {
			libs: ["sap.ui.core", "sap.m", "sap.ui.layout"],
			components: []
		},
		rootView: "css_test.view.Main",
		config: {
			fullWidth: true,
			resourceBundle: "i18n/i18n.properties",
			serviceConfig: {
				name: "",
				serviceUrl: ""
			}
		},
		routing: {
			// The default values for routes
			config: {
				routerClass: "sap.m.routing.Router",
				viewType: "XML",
				viewPath: "css_test.view",
				controlId: "idAppControl", // This is the control in which new views are placed
				controlAggregation: "detailPages", // This is the aggregation in which the new views will be placed
				bypassed: {
					target: ["master"]
				},
				async: "true"
			},
			
			routes: [
			    {
			    	pattern: "",
					name: "master",
					target: ["master"],
					targetAggregation: "masterPages"
				},
				{
			    	pattern: "",
					name: "masterSecond",
					target: ["master"],
					targetAggregation: "masterPages"
				},
				{
					pattern: "home",
					name: "detailHome",
					target: ["master", "detailHome"]
				},
				{
					pattern: "example",
					name: "example",
					target: ["master", "example"]
				}
			    
			],
			targets: {
				master: {
					viewName: "MasterFirst",
					viewLevel: 1,
					viewId: "master",
					controlAggregation: "masterPages"
				},
				masterSecond: {
					viewName: "MasterSecond",
					viewLevel: 1,
					viewId: "masterSecond",
					controlAggregation: "masterPages"
				},
				detailHome: {
					viewName: "DetailHome",
					viewId: "detailHome",
					viewLevel: 2
				},
				example: {
					viewName: "Example",
					viewId: "example",
					viewLevel: 2
				}
			}
		}
	},
	
	
	
	init: function() {
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
		
		// Always use absolute paths relative to our own component
		// (relative paths will fail if running in the Fiori Launchpad)
		var sRootPath = jQuery.sap.getModulePath("css_test");
		
		
		// The metadata is read to get the location of the i18n language files later
		var mConfig = this.getMetadata().getConfig();
		
		// Set i18n model
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl: [sRootPath, mConfig.resourceBundle].join("/")
		});
		this.setModel(i18nModel, "i18n");
		
		// Initialize router and navigate to the first page
		this.getRouter().initialize();
	}
	
});