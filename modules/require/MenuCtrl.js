define(['Router', 'Console'], function (router, console) {
   
  	function _showMenu($menuFlx) {
      	
      console.info('Showing menu from form ' + this.view.id);

      $menuFlx.animate(
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
  
  	function _hideMenu($menuFlx) {

      console.info('Hiding menu from form ' + this.view.id);

      $menuFlx.animate(
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
          "animationEnd": function hideMenuCallback(){}
        });
    }
  
  	function _selectOption($menuSgm){
	    //var selectedIndex = $menuSgm.selectedIndex[0];
    	var option = $menuSgm.selectedItems[0];
      	console.info('Selected menu option ' + JSON.stringify(option));
      	var state = option.rowIdLbl.text; 
      	router.go2('contact');
    }
  
    return {
        showMenu: _showMenu,
        hideMenu: _hideMenu,
      	selectOption: _selectOption
    };
});