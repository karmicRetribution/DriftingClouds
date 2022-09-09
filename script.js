function randSeed (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
function cloudShape () {
  let many = document.getElementsByClassName('cloud')
    for (let h = 0; h < many.length; h++) {
      let rs = randSeed(1, 9999)
      let noise = document.getElementsByTagName('feTurbulence')
        for (let a = (0 + (h * 3)), b = 0; a < noise.length; a++, b++) {
           noise[a].setAttribute('seed', '' + rs)
           if (b > 1) {break}; 
        }
    }
}
function cloudSize () {
  let size = document.getElementsByClassName('cloud')
    for (let c = 0; c < size.length; c++) {
      let rl = randSeed(0, 140)
      let rh = randSeed(0, 50)
      let randWidth = (210 + rl)
      let randHeight = (127 + rh)
      let back = document.getElementsByClassName('cback');
      let mid = document.getElementsByClassName('cmid');
      let front = document.getElementsByClassName('cfront');
        for (let d = (0 + c); d < back.length; d++) {
          back[d].setAttribute('rx', '' + randWidth);
          back[d].setAttribute('ry', '' + randHeight);
          mid[d].setAttribute('rx', '' + (0.85 * randWidth));
          mid[d].setAttribute('ry', '' + (0.75 * randHeight));
          front[d].setAttribute('rx', '' + (0.7 * randWidth));
          front[d].setAttribute('ry', '' + (0.3 * randHeight));
          break; 
        }
    }
} 

function twinkle () {
  function Stars(numberOfStars, divID){
    let chosenDiv = document.getElementById(divID)  
    chosenDiv.style.display = "none";
    chosenDiv.innerHTML = "";
    function randSeed (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
    }
    function randomFrom(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
    let text = "";
    let i; 
    for (i = 0; i < numberOfStars; i++) {
        bigRange = Array.apply(null, Array(100)).map(function (_, i) {return i;});
        smallRange = Array.apply(null, Array(4)).map(function (_, i) {return i;});
        let top = randomFrom(bigRange); 
        let right = randomFrom(bigRange); 
        let width = randomFrom(smallRange);
        let colorRange = [0,60,240];
	      let hue = colorRange[randSeed(0,colorRange.length - 1)];
        let sat = randSeed(50, 100);
        text += "<div class='stars' style='top: " + top + "%; right: "+ right +"%; width: " + width + "px; height: " + width + "px; background-color: hsl(" + hue + ", " + sat + "%, 88%); box-shadow: 0px 0px 1vw 0vw hsl(" + hue + ", " + sat + "%, 88%)'></div> ";
        chosenDiv.innerHTML = text;
        chosenDiv.style.display = "block";
    }
}
// Function(How many stars, id that you want populating)
Stars(120, "starrynight");
}

function timeHour() {
  let d = new Date();
  let m = d.getMonth();
  let h = d.getHours();
  //h = 12; //manual time set for testing
  let almanac = [[08, 18, 'Jan'], [08, 18, 'Feb'], [07, 18, 'Mar'], 
                 [07, 20, 'Apr'], [07, 20, 'May'], [06, 21, 'Jun'], 
                 [06, 21, 'Jul'], [07, 21, 'Aug'], [07, 20, 'Sep'], 
                 [07, 19, 'Oct'], [07, 18, 'Nov'], [08, 18, 'Dec']];          
  let menu = document.forms[0];
  let choice = "";
    for (let i = 0; i < menu.length; i++) {
      if (menu[i].checked) {
        choice = menu[i].value;
      }
    }
  let back = document.getElementsByClassName('cback');
  let mid = document.getElementsByClassName('cmid');
  let front = document.getElementsByClassName('cfront');
  function isSunrise(h, m, almanac, choice) {
    console.log("checking sunrise");
    return ((h >= (almanac[m][0] - 1) && h <= almanac[m][0]) && choice == 'time') || choice == 'sunrise';
  }
  function isDay(h, m, almanac, choice) {
    console.log("checking day");
    return ((h > almanac[m][0] && h < (almanac[m][1] - 1)) && choice == 'time') || choice == 'day';
  }
  function isSunset(h, m, almanac, choice) {
    console.log("checking sunset");
    return ((h >= (almanac[m][1] - 1) && h <= almanac[m][1]) && choice == 'time') || choice == 'sunset';
  }
  function isNight(h, m, almanac, choice) {
    console.log("checking night");
    return ((h > almanac[m][1] || h < (almanac[m][0] - 1)) && choice == 'time') || choice == 'night';
  }
    if (isSunrise(h, m, almanac, choice)) { 
      let skyGradient = document.getElementsByTagName('body')[0];
      skyGradient.style.backgroundImage = 'linear-gradient(0deg, rgba(255, 151, 64, 1) 0%, rgba(248, 195, 151, 1) 20%, rgba(173, 189, 249, 1) 80%, rgba(66, 160, 244, 1) 100%)';
      let starDiv = document.getElementById('starrynight'); 
      starDiv.style.visibility = "hidden";
      let music = document.getElementById('musicPlayer');
      music.setAttribute("src", "http://xexart.com/fatcat-designs.com/Drifting-Clouds/Just_Some_Happy_Little_Clouds.mp3")
      for (let d = 0; d < back.length; d++) {
        back[d].setAttribute('fill', 'url(#orangeSunrise)');
        mid[d].setAttribute('fill', 'rgba(11, 48, 93, 0.25)');
        front[d].setAttribute('fill', 'rgba(0, 0, 80, 0.4)');
      }
    }
    else if (isDay(h, m, almanac, choice)) { 
      let skyGradient = document.getElementsByTagName('body')[0];
      skyGradient.style.backgroundImage = 'linear-gradient(0deg, rgba(135, 217, 240, 1) 0%, rgba(66, 200, 244, 1) 50%, rgba(5, 140, 207, 1) 100%)';
      let starDiv = document.getElementById('starrynight'); 
      starDiv.style.visibility = "hidden";
      let music = document.getElementById('musicPlayer');
      music.setAttribute("src", "http://xexart.com/fatcat-designs.com/Drifting-Clouds/Noontime_Vapors_Up.mp3");
      for (let d = 0; d < back.length; d++) {
        back[d].setAttribute('fill', 'rgba(255, 255, 255, 1)');
        mid[d].setAttribute('fill', 'rgba(0, 205, 209, 0.3)');
        front[d].setAttribute('fill', 'rgba(6, 18, 40, 0.2)');
      }
    }
    else if (isSunset(h, m, almanac, choice)) { 
      let skyGradient = document.getElementsByTagName('body')[0];
      skyGradient.style.backgroundImage = 'linear-gradient(0deg, rgba(255, 56, 1, 1) 0%, rgba(161, 126, 120, 1) 40%, rgba(58, 130, 194, 1) 100%)';
      let starDiv = document.getElementById('starrynight'); 
      starDiv.style.visibility = "hidden";
      let music = document.getElementById('musicPlayer');
      music.setAttribute("src", "http://xexart.com/fatcat-designs.com/Drifting-Clouds/Clouds_On_A_Summer_Evening_Loop.mp3");
      for (let d = 0; d < back.length; d++) {
        back[d].setAttribute('fill', 'url(#redSunset)');
        mid[d].setAttribute('fill', 'rgba(110, 40, 32, 0.25)');
        front[d].setAttribute('fill', 'rgba(229, 68, 14, 0.15)');
      }
    }
    else if (isNight(h, m, almanac, choice)) { 
      let skyGradient = document.getElementsByTagName('body')[0];
      skyGradient.style.backgroundImage = 'linear-gradient(0deg, rgba(1, 14, 56, 1) 0%, rgba(0, 1, 15, 1) 100%)';
      let starDiv = document.getElementById('starrynight'); 
      starDiv.style.visibility = "visible";
      let music = document.getElementById('musicPlayer');
      music.setAttribute("src", "http://xexart.com/fatcat-designs.com/Drifting-Clouds/Stars_Through_The_Clouds.mp3");
      for (let d = 0; d < back.length; d++) {
        back[d].setAttribute('fill', 'rgba(174, 247, 254, 1)');
        mid[d].setAttribute('fill', 'rgba(19, 75, 105, 0.70)');
        front[d].setAttribute('fill', 'rgba(0, 0, 50, 0.35)');
      }
    }
  
  // logging //
  let cloudColor = document.getElementsByClassName('clouditself')
    for (let k = 0; k < cloudColor.length; k++) {
      console.log(cloudColor[k]);
      console.log(almanac[m]);
      console.log(choice);
    } 
}

/* Music Player */
window.onload = function() {
  let myAudio = document.getElementById('musicPlayer');
  let play = document.getElementById('play');
  let pause = document.getElementById('pause');
  // associate functions with the 'onclick' events
  play.onclick = playAudio;
  pause.onclick = pauseAudio;
  function playAudio() {
    myAudio.play();
  }
  function pauseAudio() {
    myAudio.pause();
  }
}

function creditsClick(id) {
  let div = document.getElementById(id);
  div.style.display = div.style.display == "block" ? "none" : "block";
}
function buttonClick() {
  cloudShape();
  cloudSize();
  timeHour();
  twinkle();
}
window.addEventListener('load', cloudShape)
window.addEventListener('load', cloudSize)
window.addEventListener('load', timeHour)
window.addEventListener('load', twinkle)