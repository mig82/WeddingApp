define(['Console'], function (console) {

  	function _goto(friendlyName, context){
      	console.info("Navigate to '" + friendlyName + "'");

		try{
			(new kony.mvc.Navigation(friendlyName)).navigate(context);
		}
		catch(e){
			alert(`An error occurred while trying to navigate to form by friendly name ${friendlyName}: ${e.message}`);
		}
    }

    return {
        go2: _goto
    };
});
