sap.ui.define([], function () {
	"use strict";

	return {

		tagList: function (aTags) {
			return aTags.map(x => x.tagText);
		}
	};
});
