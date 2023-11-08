var catalogSysId = "5fe6db8f1b142810d9bdbb31dd4bcb93";
var criteriaSysId = "ba83cbd6db092c506b0c660cd39619fe"; 
var action = "setAvailable"; //setAvailable/setNotAvailable. Default is setAvailable

var setCategories = true;
var setItems = true;
var actionTable = "";

if(setCategories) {
	actionTable = action == "setAvailable" ? "sc_category_user_criteria_mtom" : "sc_category_user_criteria_no_mtom";
	var categories = new GlideRecord("sc_category");
	categories.addQuery("sc_catalog", catalogSysId);
	categories.query();
	while(categories.next()) {
		var criteriaRec = new GlideRecord(actionTable);
		criteriaRec.addQuery("sc_category", categories.sys_id + "");
		criteriaRec.addQuery("user_criteria", criteriaSysId);
		criteriaRec.query();
		if(!criteriaRec.hasNext()) {
			criteriaRec.initialize();
			criteriaRec.setValue("sc_category", categories.sys_id + "");
			criteriaRec.setValue("user_criteria", criteriaSysId);
			criteriaRec.insert();
		}	
	}
}

if(setItems) {
	actionTable = action == "setAvailable" ? "sc_cat_item_user_criteria_mtom" : "sc_cat_item_user_criteria_no_mtom";
	var items = new GlideRecord("sc_cat_item");
	items.addEncodedQuery("sc_catalogsLIKE" + catalogSysId);
	items.query();
	while(items.next()) {
		var criteriaRec = new GlideRecord(actionTable);
		criteriaRec.addQuery("sc_cat_item", items.sys_id + "");
		criteriaRec.addQuery("user_criteria", criteriaSysId);
		criteriaRec.query();
		if(!criteriaRec.hasNext()) {
			criteriaRec.initialize();
			criteriaRec.setValue("sc_cat_item", items.sys_id + "");
			criteriaRec.setValue("user_criteria", criteriaSysId);
			criteriaRec.insert();
		}	
	}	
}