define({
  
  	init: function _init() {},
  
  	preShow: function _preShow() {},
    
  	postShow: function _postShow() {
      	var $ctrl = this;
        var $frm = this.view;
      	
      	require(['MenuCtrl'], function _reqMenuCtrlCallback(menuCtrl){
          	var menu = $frm.WeddingMenu.mainMenuFlx;
          	var menuOpts = $frm.WeddingMenu.menuOptsSgm;
          	
          	$frm.menuBtn.onTouchEnd = function _menuBtn_onTouchEnd(){
              	menuCtrl.showMenu($ctrl.view.id, menu);
            };
          
      		$frm.WeddingMenu.hideMenuBtn.onTouchEnd = function _hideBtn_onTouchEnd(){
              	menuCtrl.hideMenu($ctrl.view.id, menu);
            };
          
          	menuOpts.onRowClick = function _menuOpts_onRowClick(){
              	menuCtrl.selectOption($ctrl.view.id, menu, menuOpts);
            };
          
        });
      
      	require(['Router'], function _reqRouterCallback(router){
          	$frm.backBtn.onTouchEnd = function _backBtn_onTouchEnd(){
            	router.go2('home', {});
            };
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