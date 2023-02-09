window.__require=function t(e,o,n){function i(a,s){if(!o[a]){if(!e[a]){var l=a.split("/");if(l=l[l.length-1],!e[l]){var c="function"==typeof __require&&__require;if(!s&&c)return c(l,!0);if(r)return r(l,!0);throw new Error("Cannot find module '"+a+"'")}a=l}var p=o[a]={exports:{}};e[a][0].call(p.exports,function(t){return i(e[a][1][t]||t)},p,p.exports,t,e,o,n)}return o[a].exports}for(var r="function"==typeof __require&&__require,a=0;a<n.length;a++)i(n[a]);return i}({GameDirector:[function(t,e,o){"use strict";cc._RF.push(e,"6d088A7nYNLd6wJkhsMlfmq","GameDirector");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=t("../../Script/Common/yyComponent"),s=t("../../Script/GameSpecial/GameEventType"),l=t("../../Script/Common/Action3dManager"),c=t("../../Script/Common/UIManager"),p=t("../../Script/Common/PlayerData"),h=t("../../Script/Common/AudioManager"),u=t("../../Script/Common/GameData"),d=t("../../Script/Common/PowerManager"),v=t("../../Script/Common/Loader"),y=t("../../Script/GameSpecial/GlobalEnum"),f=t("../../Script/Advert/AdvertManager"),m=t("../../Script/Common/GlobalPool"),g=cc._decorator,b=g.ccclass,E=g.property,S=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.bg=null,e.touchMask=null,e.defaultUIs=[],e.lobbyUIs=[],e.levelUIs=[],e.persistUIs=[],e.levelMng=null,e.uiActMng=null,e.recommendFlowStepFinish=!1,e.chosedLevel=null,e}return i(e,t),e.prototype.onLoad=function(){},e.prototype.start=function(){this.init(),this.loadGameData()},e.prototype.update=function(t){this.uiActMng.update(t),this.customUpdate(t)},e.prototype.initTouchMask=function(){this.touchMask.active=!1,this.touchMaskCount=0},e.prototype.resetTouchMask=function(){this.touchMask.active=!1,this.touchMaskCount=0},e.prototype.showTouchMask=function(t){void 0===t&&(t=1),this.touchMaskCount+=t,this.touchMask.active=!0},e.prototype.hideTouchMask=function(t){void 0===t&&(t=1),this.touchMaskCount-=t,this.touchMaskCount<=0&&(this.touchMaskCount=0,this.touchMask.active=!1)},e.prototype.pauseLevel=function(){this.emit(s.EventType.DirectorEvent.pauseLevel)},e.prototype.resumeLevel=function(){this.emit(s.EventType.DirectorEvent.resumeLevel)},e.prototype.showUI=function(t,e){this.emit(s.EventType.UIEvent.enter,t,e)},e.prototype.showUIs=function(t){for(var e=t.length-1;e>=0;--e)this.emit(s.EventType.UIEvent.enter,t[e])},e.prototype.hideUI=function(t){this.emit(s.EventType.UIEvent.exit,t)},e.prototype.hideUIs=function(t){for(var e=t.length-1;e>=0;--e)this.emit(s.EventType.UIEvent.exit,t[e])},e.prototype.initDefaultUIs=function(){for(var t=this.defaultUIs.length-1;t>=0;--t)this.defaultUIs[t].init()},e.prototype.initUIConfig=function(){this.lobbyUIs=[],this.lobbyUIs.push(y.GlobalEnum.UI.lobby),this.lobbyUIs.push(y.GlobalEnum.UI.shop),this.lobbyUIs.push(y.GlobalEnum.UI.chooseLevel),this.lobbyUIs.push(y.GlobalEnum.UI.touchBanner),this.levelUIs=[],this.levelUIs.push(y.GlobalEnum.UI.levelInfo),this.levelUIs.push(y.GlobalEnum.UI.levelTeach),this.levelUIs.push(y.GlobalEnum.UI.awardUI),this.levelUIs.push(y.GlobalEnum.UI.winUI),this.levelUIs.push(y.GlobalEnum.UI.loseUI),this.levelUIs.push(y.GlobalEnum.UI.trySkin),this.levelUIs.push(y.GlobalEnum.UI.pauseLevel),this.levelUIs.push(y.GlobalEnum.UI.resurgence),this.levelUIs.push(y.GlobalEnum.UI.touchBanner),this.persistUIs=[],this.persistUIs.push(y.GlobalEnum.UI.playerAssetBar),this.persistUIs.push(y.GlobalEnum.UI.tipPower),this.persistUIs.push(y.GlobalEnum.UI.getPower),this.persistUIs.push(y.GlobalEnum.UI.configSetting)},e.prototype.initActMng=function(){this.uiActMng=l.default.getMng(l.ActionMngType.UI)},e.prototype.init=function(){this.initUIConfig(),this.initActMng(),this.initTouchMask(),this.initModels(),this.initDefaultUIs(),this.initCustomUpdateState(),this.registAllCustomUpdate(),this.onEvents()},e.prototype.initModels=function(){f.default.init(),c.default.init(this.node.getChildByName("UI")),h.default.init(),u.default.init(),d.default.init()},e.prototype.onEvents=function(){this.on(s.EventType.DirectorEvent.enterLevel,this.onEnterLevel,this),this.on(s.EventType.DirectorEvent.enterLobby,this.enterGameLobby,this),this.on(s.EventType.DirectorEvent.playerWin,this.onLevelWin,this),this.on(s.EventType.DirectorEvent.playerLose,this.onLevelLose,this),this.on(s.EventType.DirectorEvent.hideGameLobby,this.hideGameLobbyUI,this),this.on(s.EventType.DirectorEvent.chooseTrySkinFinish,this.onChooseTrySkinFinish,this),this.on(s.EventType.UIEvent.showTouchMask,this.showTouchMask,this),this.on(s.EventType.UIEvent.hideTouchMask,this.hideTouchMask,this),this.on(s.EventType.LevelEvent.resurgence,this.onResurgence,this),this.on(s.EventType.GameFlow.enterLevel,this.onEnterGameFlowLevel,this)},e.prototype.registAllCustomUpdate=function(){this.registCustomUpdate(y.GlobalEnum.DirectState.level,this.stepLevelPlaying)},e.prototype.reset=function(){this.levelMng&&this.levelMng.exit(),this.resetTouchMask(),this.resetCustomUpdateState()},e.prototype.loadGameData=function(){var t=this;v.default.loadBundleDir("MainScene","JSONData",function(e){for(var o=[],n=0,i=e.length;n<i;++n)o.push(e[n].name);u.default.setData(e,o),t.emit(s.EventType.DirectorEvent.enterLobby),t.enterCustomUpdateState(y.GlobalEnum.DirectState.lobby)},cc.JsonAsset,!1)},e.prototype.enterGameLobby=function(){this.levelMng&&this.levelMng.exit(),this.hideUIs(this.levelUIs),this.hideUIs(this.persistUIs),console.log("\u663e\u793aUI lobby"),this.showUI(y.GlobalEnum.UI.lobby),this.enterCustomUpdateState(y.GlobalEnum.DirectState.lobby)},e.prototype.hideGameLobbyUI=function(){this.hideUIs(this.lobbyUIs),this.hideUIs(this.persistUIs),this.hideUI(y.GlobalEnum.UI.lobby)},e.prototype.onEnterLevel=function(t){this.chosedLevel=t,this.levelMng||this.loadLevelScene(),this.emit(s.EventType.GameFlow.enterLevel)},e.prototype.getCurLevel=function(){return p.default.getData("gameData.curLevel")},e.prototype.showTrySkin=function(){this.pauseLevel(),this.showUI(y.GlobalEnum.UI.trySkin,y.GlobalEnum.GoodsType.playerSkin)},e.prototype.onChooseTrySkinFinish=function(){this.hideUI(y.GlobalEnum.UI.trySkin),this.showTeachAnim()},e.prototype.showTeachAnim=function(){},e.prototype.loadLevelScene=function(){var t=this;v.default.loadBundle("LevelScene",function(){v.default.loadBundleDir("LevelScene","MultiplePrefab",function(e){for(var o=e.length-1;o>=0;--o){var n=e[o];m.default.createPool(n.name,n,n.name)}v.default.loadBundleRes("LevelScene","SinglePrefab/LevelManager",function(e){if(!t.levelMng){var o=cc.instantiate(e);t.node.getChildByName("LevelManager").addChild(o),t.levelMng=o.getComponent("LevelManager"),t.levelMng.init()}t.onLoadLevelFinish(),v.default.loadBundle("LevelUI",function(){v.default.loadBundleArray("LevelUI",["AwardUI/AwardUI","WinUI/WinUI"],function(){},cc.Prefab,!1)},!1,!1)},cc.Prefab,!0)},cc.Prefab,!0)},!0,!0)},e.prototype.onLoadLevelFinish=function(){this.checkEnterLevelScene()},e.prototype.onEnterGameFlowLevel=function(){this.recommendFlowStepFinish=!0,this.checkEnterLevelScene()},e.prototype.checkEnterLevelScene=function(){this.levelMng&&this.recommendFlowStepFinish&&(this.recommendFlowStepFinish=!1,this.enterLevelScene())},e.prototype.enterLevelScene=function(t){if(this.levelData){var e=this.levelData;this.levelData=null,this.chosedLevel=null,this._enterLevelScene(e)}else void 0===t&&(t=this.chosedLevel?this.chosedLevel:this.getCurLevel()),this.chosedLevel=null,u.default.getLevelData(t,this._enterLevelScene.bind(this))},e.prototype._enterLevelScene=function(t){this.hideGameLobbyUI(),this.hideUIs(this.levelUIs),this.levelMng.enterLevel(t),this.showUI(y.GlobalEnum.UI.levelInfo,t),this.enterCustomUpdateState(y.GlobalEnum.DirectState.level)},e.prototype.onLevelWin=function(t){t=c.default.getUI(y.GlobalEnum.UI.levelInfo).getData(),this.winData=t,this.updateLevelRecord(t),this.addCurLevel(t),c.default.existUI(y.GlobalEnum.UI.awardUI)?this.emit(s.EventType.UIEvent.enter,y.GlobalEnum.UI.awardUI,{data:this.winData}):this.emit(s.EventType.UIEvent.enter,y.GlobalEnum.UI.winUI,{data:this.winData})},e.prototype.addCurLevel=function(t){var e=p.default.getData("gameData.curLevel");t.lv===e&&this.emit(s.EventType.PlayerDataEvent.updatePlayerData,{type:"gameData",attribute:"gameData.curLevel",value:1,mode:"+"})},e.prototype.updateLevelRecord=function(t){var e=p.default.getData("gameData.levelRecords");(!e[t.lv]||e[t.lv]<t.star)&&(e[t.lv]=t.star,this.emit(s.EventType.PlayerDataEvent.updatePlayerData,{attribute:"gameData.levelRecords",value:e,mode:"=",save:!0,emit:!1}))},e.prototype.onLevelLose=function(t){t=c.default.getUI(y.GlobalEnum.UI.levelInfo).getData(),this.loseData=t,this.emit(s.EventType.UIEvent.enter,y.GlobalEnum.UI.loseUI,{data:this.loseData})},e.prototype.onResurgence=function(){this.hideUIs(this.lobbyUIs),this.hideUI(y.GlobalEnum.UI.playerAssetBar)},e.prototype.stepLevelPlaying=function(t){this.levelMng.running(t)},r([E(cc.Node)],e.prototype,"bg",void 0),r([E(cc.Node)],e.prototype,"touchMask",void 0),r([E([a.default])],e.prototype,"defaultUIs",void 0),r([b],e)}(a.default);o.default=S,cc._RF.pop()},{"../../Script/Advert/AdvertManager":void 0,"../../Script/Common/Action3dManager":void 0,"../../Script/Common/AudioManager":void 0,"../../Script/Common/GameData":void 0,"../../Script/Common/GlobalPool":void 0,"../../Script/Common/Loader":void 0,"../../Script/Common/PlayerData":void 0,"../../Script/Common/PowerManager":void 0,"../../Script/Common/UIManager":void 0,"../../Script/Common/yyComponent":void 0,"../../Script/GameSpecial/GameEventType":void 0,"../../Script/GameSpecial/GlobalEnum":void 0}],GameLobby:[function(t,e,o){"use strict";cc._RF.push(e,"69ef72xiQlAL4AzHd4vX34+","GameLobby");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=t("../../Script/Common/yyComponent"),s=t("../../Script/GameSpecial/GlobalEnum"),l=t("../../Script/GameSpecial/GameEventType"),c=t("../../Script/Common/PlayerData"),p=t("../../Script/GameSpecial/GameConfig"),h=t("../../Script/Common/Action3dManager"),u=cc._decorator,d=u.ccclass,v=u.property,y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._uiType=s.GlobalEnum.UI.lobby,e.btnAudio=null,e.audioOpen=null,e.audioClose=null,e.btnStartGame=null,e.chosedLevel=null,e.moreGameTipIcon=null,e.curLevelLabel=null,e}return i(e,t),Object.defineProperty(e.prototype,"uiType",{get:function(){return this._uiType},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.initBtnAudio(),this.onEvents(),this.setCurLevel()},e.prototype.onEvents=function(){this.on(l.EventType.LevelEvent.choseLevelItem,this.onChoseLevelItem,this)},e.prototype.reset=function(){},e.prototype.show=function(){this.node.active=!0,this.reset(),this.emit(l.EventType.AudioEvent.stopBGM),this.playMoreGameTip(),this.playBtnStartGame(),this.setCurLevel()},e.prototype.hide=function(){this.reset(),this.stopMoreGameTip(),this.stopBtnStartGame(),this.node.active=!1},e.prototype.initBtnAudio=function(){this.btnAudio.node.on("touchend",this.onBtnAudio,this);var t=p.default.audioConfig.bgm;this.btnAudio.spriteFrame=t?this.audioOpen:this.audioClose},e.prototype.onBtnAudio=function(){var t=p.default.audioConfig.bgm,e={bgm:t=!t,effect:t};p.default.audioConfig=e,t?(this.btnAudio.spriteFrame=this.audioOpen,this.emit(l.EventType.AudioEvent.resume)):(this.btnAudio.spriteFrame=this.audioClose,this.emit(l.EventType.AudioEvent.pause))},e.prototype.playBtnStartGame=function(){var t=.97;this.btnStartGame.setScale(t,t),t=1.03;var e=h.default.scaleTo(.5,t,t,t);t=.97;var o=h.default.scaleTo(.5,t,t,t),n=h.default.sequence(e,o),i=h.default.repeatForever(n);h.default.getMng(h.ActionMngType.UI).runAction(this.btnStartGame,i)},e.prototype.stopBtnStartGame=function(){h.default.getMng(h.ActionMngType.UI).stopAllActions(this.btnStartGame)},e.prototype.onBtnStartGame=function(){this.emit(l.EventType.AudioEvent.playClickBtn),this.emit(l.EventType.AudioEvent.playClickBtn),this.startGame()},e.prototype.startGame=function(){var t=this.chosedLevel;this.chosedLevel=null,this.emit(l.EventType.DirectorEvent.enterLevel,t)},e.prototype.onBtnChooseLevel=function(){this.emit(l.EventType.AudioEvent.playClickBtn),this.emit(l.EventType.UIEvent.enter,s.GlobalEnum.UI.chooseLevel)},e.prototype.onChoseLevelItem=function(t){this.chosedLevel=t,this.startGame(),this.emit(l.EventType.UIEvent.exit,s.GlobalEnum.UI.chooseLevel)},e.prototype.playMoreGameTip=function(){var t=.9;this.moreGameTipIcon.setScale(t,t,t),t=1.1,h.default.scaleTo(1,t,t,t),t=.9,h.default.scaleTo(1,t,t,t);var e=h.default.rotateTo2d(.1,30),o=h.default.rotateTo2d(.8,0),n=h.default.delay(2);o.easing(h.default.easeElasticOut());var i=h.default.sequence(n,e,o),r=h.default.repeatForever(i);h.default.getMng(h.ActionMngType.UI).runAction(this.moreGameTipIcon,r)},e.prototype.stopMoreGameTip=function(){h.default.getMng(h.ActionMngType.UI).stopAllActions(this.moreGameTipIcon)},e.prototype.onBtnMoreGame=function(){this.emit(l.EventType.RecommendEvent.showBigPage)},e.prototype.onBtnShop=function(){this.emit(l.EventType.AudioEvent.playClickBtn),this.emit(l.EventType.UIEvent.enter,s.GlobalEnum.UI.shop)},e.prototype.setCurLevel=function(){var t=c.default.getData("gameData.curLevel");this.curLevelLabel.string=t.toString()},r([v(cc.Sprite)],e.prototype,"btnAudio",void 0),r([v(cc.SpriteFrame)],e.prototype,"audioOpen",void 0),r([v(cc.SpriteFrame)],e.prototype,"audioClose",void 0),r([v(cc.Node)],e.prototype,"btnStartGame",void 0),r([v(cc.Node)],e.prototype,"moreGameTipIcon",void 0),r([v(cc.Label)],e.prototype,"curLevelLabel",void 0),r([d],e)}(a.default);o.default=y,cc._RF.pop()},{"../../Script/Common/Action3dManager":void 0,"../../Script/Common/PlayerData":void 0,"../../Script/Common/yyComponent":void 0,"../../Script/GameSpecial/GameConfig":void 0,"../../Script/GameSpecial/GameEventType":void 0,"../../Script/GameSpecial/GlobalEnum":void 0}],LevelController:[function(t,e,o){"use strict";cc._RF.push(e,"40bcc/o5rtGMK5aKqyYxbY2","LevelController");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=t("../../Script/Common/yyComponent"),s=t("../../Script/GameSpecial/GameEventType"),l=t("../../Script/GameSpecial/GlobalEnum"),c=cc._decorator,p=c.ccclass,h=(c.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.onLoad=function(){this.init(),this.setDisable()},e.prototype.init=function(){this.initComponents(),this.initTouchState(),this.initCustomUpdateState(),this.registAllCustomUpdate(),this.onEvents()},e.prototype.onEvents=function(){this.node.on("touchstart",this.onTouchStart,this),this.node.on("touchmove",this.onTouchMove,this),this.node.on("touchend",this.onTouchEnd,this),this.on(s.EventType.CtrlEvent.ctrlStart,this.setEnable,this),this.on(s.EventType.CtrlEvent.ctrlEnd,this.setDisable,this)},e.prototype.registAllCustomUpdate=function(){this.registCustomUpdate(l.GlobalEnum.CtrlState.touched,this.stepTouchStay)},e.prototype.reset=function(){this.resetTouchState()},e.prototype.setEnable=function(){this.reset(),this.node.active=!0},e.prototype.setDisable=function(){this.reset(),this.node.active=!1},e.prototype.getTouchData=function(t){return{startTime:this.touchStartTime,stayTime:this.touchStayTime,path:this.touchPath,e:t}},e.prototype.initTouchState=function(){this.touched=!1,this.touchId=-1,this.touchStartTime=-1,this.touchStayTime=0,this.touchPath=[]},e.prototype.resetTouchState=function(){this.touched=!1,this.touchId=-1,this.touchStartTime=-1,this.touchStayTime=0,this.touchPath=[]},e.prototype.onTouchStart=function(t){if(!this.isMultipleTouch(t)){this.touched=!0,this.touchId=t.getID(),this.touchStartTime=Date.now(),this.touchStayTime=0;var e=t.getLocation();this.touchPath[0]=e,this.emit(s.EventType.CtrlEvent.touchStart,this.getTouchData(t)),this.enterCustomUpdateState(l.GlobalEnum.CtrlState.touched)}},e.prototype.onTouchMove=function(t){if(this.isCurTouchEvent(t)){var e=t.getLocation();this.touchPath[1]=e,this.emit(s.EventType.CtrlEvent.touchMove,this.getTouchData(t))}},e.prototype.onTouchEnd=function(t){if(this.isCurTouchEvent(t)){var e=t.getLocation();this.touchPath[1]=e,this.emit(s.EventType.CtrlEvent.touchEnd,this.getTouchData(t)),this.resetTouchState(),this.enterCustomUpdateState(l.GlobalEnum.CtrlState.none)}},e.prototype.isMultipleTouch=function(t){return t.getTouches().length>1},e.prototype.isCurTouchEvent=function(t){return t.getID()==this.touchId},e.prototype.stepTouchStay=function(t){this.touched&&(this.touchStayTime+=t,this.emit(s.EventType.CtrlEvent.touchStay,this.getTouchData(null)))},r([p],e)}(a.default));o.default=h,cc._RF.pop()},{"../../Script/Common/yyComponent":void 0,"../../Script/GameSpecial/GameEventType":void 0,"../../Script/GameSpecial/GlobalEnum":void 0}],LoadingUI:[function(t,e,o){"use strict";cc._RF.push(e,"326d3l9GUNNN6sC8bQK7+Ik","LoadingUI");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=t("../../Script/Common/yyComponent"),s=t("../../Script/GameSpecial/GameEventType"),l=cc._decorator,c=l.ccclass,p=l.property,h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.bar=null,e.totalLength=0,e.preRate=0,e}return i(e,t),e.prototype.init=function(){0==this.totalLength&&(this.totalLength=this.bar.getComponent(cc.Sprite).spriteFrame.getOriginalSize().width),this.bar.setPosition(-.5*this.totalLength,this.bar.y),this.preRate=0,this.onEvents()},e.prototype.onEvents=function(){this.on(s.EventType.LoadAssetEvent.showProgress,this.onShowProgress,this),this.on(s.EventType.LoadAssetEvent.updateProgress,this.onUpdateProgress,this),this.on(s.EventType.LoadAssetEvent.hideProgress,this.onHideProgress,this)},e.prototype.onShowProgress=function(t){this.node.active=!0,void 0===t&&(t=0),t<this.preRate&&(t=this.preRate),this.bar.width=this.totalLength*t,this.preRate=t},e.prototype.onUpdateProgress=function(t){1!=t?t>this.preRate&&(this.bar.width=this.totalLength*t,this.preRate=t):this.preRate=0},e.prototype.onHideProgress=function(){this.node.active=!1,this.preRate=0},r([p(cc.Node)],e.prototype,"bar",void 0),r([p],e.prototype,"totalLength",void 0),r([c],e)}(a.default);o.default=h,cc._RF.pop()},{"../../Script/Common/yyComponent":void 0,"../../Script/GameSpecial/GameEventType":void 0}],PlayerAssetBar:[function(t,e,o){"use strict";cc._RF.push(e,"08b7fQRKfNDVZa5QgqRT/Gw","PlayerAssetBar");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=t("../../Script/Common/yyComponent"),s=t("../../Script/GameSpecial/GameEventType"),l=t("../../Script/Common/PlayerData"),c=t("../../Script/Common/GlobalPool"),p=t("../../Script/GameSpecial/GlobalEnum"),h=t("../../Script/Common/Action3dManager"),u=cc._decorator,d=u.ccclass,v=u.property,y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.goldLabel=null,e.goldLayer=null,e.goldIconPrefab=null,e}return i(e,t),e.prototype.init=function(){this.initComponents(),this.initGoldIcon(),this.onEvents(),this.setData()},e.prototype.onEvents=function(){this.on(s.EventType.PlayerDataEvent.playerDataChanged,this.onPlayerDataChanged,this),this.on(s.EventType.UIEvent.playGoldAnim,this.playGoldAnim,this)},e.prototype.reset=function(){this.resetGoldIcon()},e.prototype.show=function(){this.setData(),this.onEvents()},e.prototype.hide=function(){this.offEvents(),this.node.active=!1},e.prototype.setData=function(){var t=l.default.getData("gameData.asset");this.setGold(t.gold)},e.prototype.convertToString=function(t){return t<1100?t.toString():t<1e6?(.001*t).toFixed(1)+"K":(1e-6*t).toFixed(1)+"M"},e.prototype.onPlayerDataChanged=function(t){switch(t.attribute){case"gameData.asset.gold":this.setGold(t.value)}},e.prototype.setGold=function(t){this.goldLabel.string=this.convertToString(t)},e.prototype.initGoldIcon=function(){var t=this.goldLabel.node.convertToWorldSpaceAR(cc.v2(0,0));t=this.node.convertToNodeSpaceAR(t),this.targetPos=cc.v3(t.x,t.y,0),this.cb=null,c.default.createPool(p.GlobalEnum.LevelPrefab.goldIcon,this.goldIconPrefab)},e.prototype.resetGoldIcon=function(){this.cb=null;for(var t=h.default.getMng(h.ActionMngType.UI),e=this.goldLayer.childrenCount-1;e>=0;--e)t.stopAllActions(this.goldLayer.children[e]);c.default.putAllChildren(this.goldLayer,!0)},e.prototype.playGoldAnim=function(t){this.resetGoldIcon(),this.emit(s.EventType.UIEvent.showTouchMask),this.cb=t.cb;var e=cc.v2();t.startPos&&e.set(t.startPos);for(var o=Math.round(10*Math.random())+20,n=h.default.getMng(h.ActionMngType.UI),i=0;i<o;i++){var r=c.default.get(p.GlobalEnum.LevelPrefab.goldIcon);this.goldLayer.addChild(r),r.setPosition(e),r.setScale(1,1);var a=h.default.moveTo(.2,80*(Math.random()-.5)+e.x,80*(Math.random()-.5)+e.y,0);a.easing(h.default.easeOut(2)),n.runAction(r,a)}this.scheduleOnce(this.toTarget,.2)},e.prototype.toTarget=function(){var t=h.default.getMng(h.ActionMngType.UI),e=.005*this.goldLayer.childrenCount,o=this.goldLabel.node.convertToWorldSpaceAR(cc.v2(0,0));o=this.node.convertToNodeSpaceAR(o);for(var n=this.goldLayer.childrenCount-1;n>=0;--n){var i=h.default.moveTo(.8,o.x,o.y,0),r=h.default.scaleTo(.8,.5,.5,1),a=h.default.spawn(i,r),s=h.default.delay(.005+.005*n),l=h.default.sequence(s,a);t.runAction(this.goldLayer.children[n],l)}this.scheduleOnce(this.playFinish,.8+e)},e.prototype.playFinish=function(){this.emit(s.EventType.UIEvent.hideTouchMask),this.cb?this.cb():this.emit(s.EventType.UIEvent.goldAnimPlayFinish),this.resetGoldIcon()},r([v(cc.Label)],e.prototype,"goldLabel",void 0),r([v(cc.Node)],e.prototype,"goldLayer",void 0),r([v(cc.Prefab)],e.prototype,"goldIconPrefab",void 0),r([d],e)}(a.default);o.default=y,cc._RF.pop()},{"../../Script/Common/Action3dManager":void 0,"../../Script/Common/GlobalPool":void 0,"../../Script/Common/PlayerData":void 0,"../../Script/Common/yyComponent":void 0,"../../Script/GameSpecial/GameEventType":void 0,"../../Script/GameSpecial/GlobalEnum":void 0}],TipMessage:[function(t,e,o){"use strict";cc._RF.push(e,"fa03fEKcf5HdqLeM7wO+JGh","TipMessage");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=t("../../Script/Common/yyComponent"),s=t("../../Script/Common/Action3dManager"),l=t("../../Script/GameSpecial/GameEventType"),c=cc._decorator,p=c.ccclass,h=c.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.msg=null,e.action=null,e}return i(e,t),e.prototype.init=function(){this.node=this.node;var t=s.default.delay(.01),e=s.default.fadeTo(0,255),o=s.default.delay(1),n=s.default.fadeTo(.5,0),i=s.default.callFun(this.onFadeOut,this),r=s.default.sequence(t,e,o,n,i);this.action=r,this.setMsg(""),this.onEvents()},e.prototype.onEvents=function(){this.on(l.EventType.UIEvent.showTip,this.show,this)},e.prototype.reset=function(){this.node.opacity=0},e.prototype.show=function(t){this.node.active=!0,this.reset(),this.setMsg(t),s.default.getMng(s.ActionMngType.UI).runAction(this.node,this.action)},e.prototype.hide=function(){this.node.active=!1},e.prototype.setMsg=function(t){this.msg.string=t},e.prototype.onFadeOut=function(){this.hide()},r([h(cc.Label)],e.prototype,"msg",void 0),r([p],e)}(a.default);o.default=u,cc._RF.pop()},{"../../Script/Common/Action3dManager":void 0,"../../Script/Common/yyComponent":void 0,"../../Script/GameSpecial/GameEventType":void 0}]},{},["GameDirector","GameLobby","LevelController","LoadingUI","PlayerAssetBar","TipMessage"]);