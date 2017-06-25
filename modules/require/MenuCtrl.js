define(['Router', 'Console'], function (router, console) {

  	function _setUp($ctrl, $frm){
      
      	var menu = $frm.WeddingMenu.mainMenuFlx;
        var menuOpts = $frm.WeddingMenu.menuOptsSgm;
          	
        _sendMenuToBackground($frm.WeddingMenu, $frm.mainFlx);
              	
        $frm.menuBtn.onTouchEnd = function _menuBtn_onTouchEnd(){
          	_bringMenuToForeground($frm.WeddingMenu, $frm.mainFlx);
          	_showMenu($ctrl.view.id, menu);
        };
          
      	$frm.WeddingMenu.hideMenuBtn.onTouchEnd = function _hideBtn_onTouchEnd(){
             _sendMenuToBackground($frm.WeddingMenu, $frm.mainFlx);
             _hideMenu($ctrl.view.id, menu);
        };
          
        menuOpts.onRowClick = function _menuOpts_onRowClick(){
            _selectOption($ctrl.view.id, menu, menuOpts);
        };
    }
  
  	function _bringMenuToForeground(menuFlx, screenMainFlx){
    	menuFlx.zIndex = 3;
        screenMainFlx.zIndex = 2;
    }
  
  	function _sendMenuToBackground(menuFlx, screenMainFlx){
      	menuFlx.zIndex = 1;
        screenMainFlx.zIndex = 2;
    }
  
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
      	setUp: _setUp
      	/*bringMenuToForeground: _bringMenuToForeground,
      	sendMenuToBackground: _sendMenuToBackground,
        showMenu: _showMenu,
        hideMenu: _hideMenu,
      	selectOption: _selectOption*/
    };
});