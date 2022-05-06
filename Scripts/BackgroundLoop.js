//JavaScript Document
let SunClicks = 0;
let SunCPS = 0
let SeaGullCPS = 0
let AllTowerClicksDecimal = 0
let AllTowerClicks = 0
let SeaGullLevel = 1
let dogClicks =  0
let dogCPS = 0


onmessage = function(e) {
 SunCPS = e.data.SunCPS
 SeaGullCPS = e.data.SeaGullCPS
	dogCPS = e.data.dogCPS
  if (e.data.SunClicks != undefined){
    SunClicks = e.data.SunClicks
  }
  if (e.data.AllTowerClicks != undefined){
    AllTowerClicksDecimal = e.data.AllTowerClicks
  }
  if (e.data.SeaGullLevel != undefined){
    SeaGullLevel = e.data.SeaGullLevel
  }
if (e.data.dogClicks != undefined){
    dogClicks = e.data.dogClicks
  }
}

function timedCount() {
  SunClicks += SunCPS;
	dogClicks += dogCPS;                         
  AllTowerClicksDecimal += SeaGullCPS * SeaGullLevel;
  AllTowerClicks = (Math.floor(AllTowerClicksDecimal / SeaGullLevel) * SeaGullLevel)+ Math.Floor(dogClicks);
  postMessage({ 
		SunClicks: SunClicks,
	  dogClicks: dogClicks,
		AllTowerClicks: AllTowerClicks  
	});
  setTimeout("timedCount()", 16);
}

timedCount();