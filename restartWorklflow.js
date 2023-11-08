var aux = new GlideRecord("sc_req_item");
aux.get("8196ed07db57a4102f3a0ad9f49619a7"); //SC_REQ_ITEM SYS_ID

var workflow = new Workflow();
workflow.restartWorkflow(aux, true);