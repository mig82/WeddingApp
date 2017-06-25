define(['Console'], function (console) {
   	
  	function _goto(friendlyName, context){
      	console.info("Navigate to '" + friendlyName + "'");
      	var $frm = new kony.mvc.Navigation(friendlyName);
		$frm.navigate(context);
    }
  
    return {
        go2: _goto
    };
});