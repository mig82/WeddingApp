define({
  
  	init: function _init() {},
  
  	preShow: function _preShow() {},
    
  	postShow: function _postShow() {
      	var $ctrl = this;
        var $frm = this.view;
      	
      	require(['MenuCtrl'], function _reqMenuCtrlCallback(menuCtrl){
          	var menu = $frm.WeddingMenu.mainMenuFlx;
          	var menuOpts = $frm.WeddingMenu.menuOptsSgm;
          	$frm.menuBtn.onTouchEnd = menuCtrl.showMenu.bind($ctrl, menu);
      		$frm.WeddingMenu.hideMenuBtn.onTouchEnd = menuCtrl.hideMenu.bind($ctrl, menu);
          	menuOpts.onRowClick = menuCtrl.selectOption.bind($ctrl, menuOpts);
        });
      
      	require(['Router'], function _reqRouterCallback(router){
          	$frm.backBtn.onTouchEnd = router.go2.bind($ctrl, 'home', {});
        });
      	
    },
    
  	onHide: function _onHide() {},
    
  	onDestroy: function _onDestroy() {},
    
  	bindFormEvents: function _bindFormEvents() {
        var $frm = this.view;
        $frm.init = this.init;
        $frm.preShow = this.preShow;
        $frm.postShow = this.postShow;
        $frm.onHide = this.onHide;
        $frm.onDestroy = this.onDestroy;
    },
    
  	onNavigate: function _onNavigate(context, isBackNavigation) {
        if (!this.bound) {
            this.bindFormEvents();
            this.bound = true;
        }
    }
});