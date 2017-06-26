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
      
      	$frm.addToCalendarBtn.onTouchEnd = function(){
          	try{
    
                alert("Adding wedding event to calendar");

              	kony.application.openURL("calendar://test");
              
                /*var ceremony = {
                    summary: "Ceremonia Religiosa",
                    start: "14/07/2017 19:00:00",
                    finish:"14/07/2017 20:00:45", 
                    alarm: 3600, //An hour before
                    note: "En Basílica de San Miguel",
                    access: "public" //public|private|confidential
                };
                kony.phone.addCalendarEvent(ceremony);
              	kony.phone.findCalendarEvents(ceremony);*/
              
              	/*var ceremony = "https://www.google.com/calendar/event" + 
                    "eid=NzIwNm0ycHE2Z2x1c2c1dDNoaG90b2xnbnAgbWlndWVsYW5nZWx4Zm1AbQ";*/
              	
            }
            catch (PhoneError){
                alert("error in addCalendarEvent:: " + PhoneError);
            }
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