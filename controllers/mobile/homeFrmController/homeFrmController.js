define({
  
  	_init: function _init() {},
  
  	_preShow: function _preShow() {
      	this.view.backBtn.isVisible = false;
    },
    
  	_postShow: function _postShow() {
      	var $ctrl = this;
        var $frm = this.view;
      	
      	require(['MenuCtrl'], function _reqMenuCtrlCallback(menuCtrl){
          	menuCtrl.setUp($ctrl, $frm);
        });
    
    },
    
  	_onHide: function _onHide() {},
    
  	_onDestroy: function _onDestroy() {},
    
  	bindFormEvents: function _bindFormEvents() {
        var $frm = this.view;
        $frm.init = this._init;
        $frm.preShow = this._preShow;
        $frm.postShow = this._postShow;
        $frm.onHide = this._onHide;
        $frm.onDestroy = this._onDestroy;
    },
    
  	onNavigate: function _onNavigate(context, isBackNavigation) {
        this.bindFormEvents();
        this.bound = true;
    }
});