//var paused_count =0;
//var resumed_count = 0;
//var launched_count = 0;

$(document).ready(function() {

var key = "phone";
var value = "samsung";

window.localStorage.setItem(key,value);
window.localStorage.getItem(key, value);


var key2 = "bottle";
var value2 = "cola";

window.localStorage.setItem(key,value);
window.localStorage.getItem(key, value);


var key3 = "coin";
var value3 = "pound";

window.localStorage.setItem(key,value);
window.localStorage.getItem(key, value);


var key4 = "headphones";
var value4 = "white";

window.localStorage.setItem(key,value);
window.localStorage.getItem(key, value);


var key5 = "watch";
var value5 = "blue";

window.localStorage.setItem(key,value);
window.localStorage.getItem(key, value);

window.alert("show me " + key + " and show me " + value);
window.alert(window.localStorage.length);
    
    
    
var choco = {
		"productName": "Twix",
 		"nutrition": {
    			"energy": "519",
    			"fat": "6.0",
    			"carbs": "16.1",
                "protein": "1.1",
                "salt": "0.11",
            
		}
	}

console.log(choco.productName);

var chocoString = JSON.stringify(choco);

window.localStorage.setItem("twixBar",chocoString);
var getChoco = window.localStorage.getItem("twixBar");   
    
var chocoJSON = JSON.parse(getChoco);
    
    console.log(chocoJSON.productName);
    
window.alert("my favourite chocolate bar is" + chocoJSON.productName + "it has " + chocoJSON.nutrition.energy + "g calories");    
});

//ocument.addEventListener("deviceready", onDeviceReady, false);
		
	
//function updateDisplay() {

	//$("#launched").text("Application launched: " + launched_count);
	//$("#resumed").text("Application paused: " + paused_count);
	//$("#paused").text("Application resumed: " + resumed_count);
//}


// device APIs are available
//
  //  function onDeviceReady() {
	
//	document.addEventListener("resume", onResume, false);
//	document.addEventListener("pause", onPause, false);
	
//	launched_count++;
//	updateDisplay();
	    
//	alert("device ready");
//  }


//    function onPause() {
	
//	paused_count++;
//	updateDisplay();
	    
//	alert("pause");
  //  }
	

    //function onResume() {
		
//	resumed_count++;
//	updateDisplay();
	    
//	alert("resume");
//    }
