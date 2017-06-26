define({
  
  	_init: function _init() {},
  
  	_preShow: function _preShow() {},
    
  	_postShow: function _postShow() {
      	var $ctrl = this;
        var $frm = this.view;
      	
      	require(['MenuCtrl'], function _reqMenuCtrlCallback(menuCtrl){
          	menuCtrl.setUp($ctrl, $frm);
        });
      
      	require(['Router'], function _reqRouterCallback(router){
          	$frm.backBtn.onTouchEnd = function _backBtn_onTouchEnd(){
            	router.go2('home', {});
            };
        });
      
      	$frm.goToHotelFlx.onTouchEnd = function _goToHotelFlx_onTouchEnd (){
          	kony.application.openURL('http://www.ayrehoteles.com/hoteles/ayre-gran-hotel-colon/');
        };
      	
      	$frm.goToTempleFlx.onTouchEnd = function _goToTempleFlx_onTouchEnd (){
          	kony.application.openURL('http://www.bsmiguel.es/');
        };
      
      	$frm.getDirectionsBtn.onTouchEnd = function _getDirectionsBtn_onTouchEnd(){
          	kony.application.openURL('https://www.google.es/maps/dir/Basilica+Pontificia+de+san+Miguel,+Calle+de+San+Justo,+4,+28005+Madrid/Ayre+Gran+Hotel+Col%C3%B3n,+Calle+del+Pez+Volador,+Madrid/@40.4141431,-3.7055437,14z/am=t/data=!4m14!4m13!1m5!1m1!1s0xd422878ec114737:0x7a2dc3e0a1cbf76a!2m2!1d-3.7097013!2d40.414254!1m5!1m1!1s0xd4226026f361355:0x8acfecb6850cf07b!2m2!1d-3.669204!2d40.413003!5i1');
        };
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