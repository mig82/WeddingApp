define({
  
  	showMenu: function _showMenu() {
      	
      	console = require('Console');
      	console.info('Showing menu');
      
      	this.view.mainMenuFlx.animate(
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
    },
  
  	hideMenu: function _hideMenu() {
      	
      	console = require('Console');
      	console.info('Hiding menu');
      
      	this.view.mainMenuFlx.animate(
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
      
    },
    
  	init: function _init() {},
  
  	preShow: function _preShow() {},
    
  	postShow: function _postShow() {
        var $frm = this.view;
        $frm.menuBtn.onClick = this.showMenu;
      	$frm.hideMenuBtn.onClick = this.hideMenu;
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
    
  	onNavigate: function _onNavigate() {
        if (!this.bound) {
            this.bindFormEvents();
            this.bound = true;
        }
    }
});