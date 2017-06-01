/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		window.plugins.PushbotsPlugin.initialize("59300b324a9efa88d78b4567", {"android":{"sender_id":"574252231393"}});
		admob.initAdmob("ca-app-pub-6251426836814427/1370523595","ca-app-pub-6251426836814427/8893790394");//admob id format ca-app-pub-xxxxxxxxxxxxxxxxxxx/xxxxxxxxxx
		// Should be called once app receive the notification only while the application is open or in background
		window.plugins.PushbotsPlugin.on("notification:received", function(data){
			console.log("received:" + JSON.stringify(data));
		});
		
		// Should be called once the notification is clicked
		window.plugins.PushbotsPlugin.on("notification:clicked", function(data){
			console.log("clicked:" + JSON.stringify(data));
		});
		
		admob.showBanner(admob.BannerSize.BANNER,admob.Position.TOP_APP);
	document.addEventListener(admob.Event.onInterstitialReceive, onInterstitialReceive, false);//show in ad receive event fun need add receive listener
 admob.cacheInterstitial();// load admob Interstitial
 function onInterstitialReceive(message) {//show in ad receive event fun
     admob.showInterstitial();
 }
 function onGameOver(){//call this fun to show when game over
        admob.isInterstitialReady(function(isReady){
            if(isReady){
                admob.showInterstitial();
            }
        });
  }
		
        app.receivedEvent('deviceready');
    },
	
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
