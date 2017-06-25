define(['Router', 'Console'], function (router, console) {
   
  	function _showMenu(formId, menuFlx) {
      	
      console.info('Showing menu from form ' + formId);

      menuFlx.animate(
        kony.ui.createAnimation({
          "100": {
            "left": "0%",
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            }
          }
        }), {
          "delay": 0,
          "iterationCount": 1,
          "fillMode": kony.anim.FILL_MODE_FORWARDS,
          "duration": 0.3
        }, {
          "animationEnd": function showMenuCallback(){}
        });
    }
  
  	function _hideMenu(formId, menuFlx, hideMenuCallback) {

      console.info('Hiding menu from form ' + formId);

      menuFlx.animate(
        kony.ui.createAnimation({
          "100": {
            "left": "-100%",
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            }
          }
        }),
        {
          "delay": 0,
          "iterationCount": 1,
          "fillMode": kony.anim.FILL_MODE_FORWARDS,
          "duration": 0.3
        },
        {
          "animationEnd": hideMenuCallback
        });
    }
  
  	function _selectOption(formId, menuFlx, menuSgm){
	    //var selectedIndex = $menuSgm.selectedIndex[0];
    	var option = menuSgm.selectedItems[0];
      	console.info('Selected menu option ' + JSON.stringify(option));
      	//var formFriendlyName = option.rowIdLbl.text;
      	var formFriendlyName = option.rowIdLbl;
      	//router.go2(formFriendlyName);
      
      	_hideMenu(formId, menuFlx, function(){
        	router.go2(formFriendlyName);
        });
      	
    }
  
    return {
        showMenu: _showMenu,
        hideMenu: _hideMenu,
      	selectOption: _selectOption
    };
});