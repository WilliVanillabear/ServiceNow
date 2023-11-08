var strREQList =
'REQ0020469\n'+
'REQ0021655\n'+
'REQ0023408\n'+
'REQ0025202\n'+
'REQ0025036\n'+
'REQ0025406\n'+
'REQ0025684\n'+
'REQ0025685\n'+
'REQ0025686\n'+
'REQ0025687\n'+
'REQ0025698\n'+
'REQ0025699\n'+
'REQ0025412';

var reqArray = strREQList.split("\n");
var j = 0;
for (i = 0; i < reqArray.length; i++){
	var req = reqArray[i].toString().trim();

	// Update state to Closed Complete = 3
	var request = new GlideRecord('sc_request');
	request.addQuery('number', req);
	request.query();
	if(request.next()){
		request.state = 3; // 3 = Closed Complete
		request.active = false;
		request.comments = 'Request closed according SCTASK0023810';
		request.update();
		}
	}

	
