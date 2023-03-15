const SIDEBAR_BUTTON_ACTIVE = "#444444";
const SIDEBAR_BUTTON_NONACTIVE = "var(--button-color)";



function startButton(){
    //set active tab button collor and set tab display
    document.getElementById("start-button").style.backgroundColor = SIDEBAR_BUTTON_ACTIVE;
    document.getElementById("start").style.display = "block";

    //set other tab buttons to non active color
    document.getElementById("actions-button").style.backgroundColor = SIDEBAR_BUTTON_NONACTIVE
    document.getElementById("about-button").style.backgroundColor = SIDEBAR_BUTTON_NONACTIVE

    //set other tabs to not display
    document.getElementById("actions").style.display = "none";
    document.getElementById("about").style.display = "none";
}

function actionsButton(){
    document.getElementById("actions-button").style.backgroundColor = SIDEBAR_BUTTON_ACTIVE;
    document.getElementById("actions").style.display = "block";

    document.getElementById("start-button").style.backgroundColor = SIDEBAR_BUTTON_NONACTIVE
    document.getElementById("about-button").style.backgroundColor = SIDEBAR_BUTTON_NONACTIVE

    document.getElementById("start").style.display = "none";
    document.getElementById("about").style.display = "none";
}

function aboutButton(){
    //set active tab button collor and set tab display
    document.getElementById("about-button").style.backgroundColor = SIDEBAR_BUTTON_ACTIVE;
    document.getElementById("about").style.display = "block";

    //set other tab buttons to non active color
    document.getElementById("actions-button").style.backgroundColor = SIDEBAR_BUTTON_NONACTIVE
    document.getElementById("start-button").style.backgroundColor = SIDEBAR_BUTTON_NONACTIVE

    //set other tabs to not display
    document.getElementById("actions").style.display = "none";
    document.getElementById("start").style.display = "none";
}




function drawButton(){
    document.getElementById("draw-button").style.backgroundColor = SIDEBAR_BUTTON_ACTIVE;
    document.getElementById("draw-tab").style.display = "block";

        //set other tab buttons to non active color
    document.getElementById("animate-button").style.backgroundColor = SIDEBAR_BUTTON_NONACTIVE
    document.getElementById("say-button").style.backgroundColor = SIDEBAR_BUTTON_NONACTIVE

    document.getElementById("animate-tab").style.display = "none";
    document.getElementById("say-tab").style.display = "none";
}

function animateButton(){
    document.getElementById("animate-button").style.backgroundColor = SIDEBAR_BUTTON_ACTIVE;
    document.getElementById("animate-tab").style.display = "block";

        //set other tab buttons to non active color
    document.getElementById("say-button").style.backgroundColor = SIDEBAR_BUTTON_NONACTIVE
    document.getElementById("draw-button").style.backgroundColor = SIDEBAR_BUTTON_NONACTIVE

    document.getElementById("say-tab").style.display = "none";
    document.getElementById("draw-tab").style.display = "none";
}

function sayButton(){
    document.getElementById("say-button").style.backgroundColor = SIDEBAR_BUTTON_ACTIVE;
    document.getElementById("say-tab").style.display = "block";

        //set other tab buttons to non active color
    document.getElementById("animate-button").style.backgroundColor = SIDEBAR_BUTTON_NONACTIVE
    document.getElementById("draw-button").style.backgroundColor = SIDEBAR_BUTTON_NONACTIVE

    document.getElementById("animate-tab").style.display = "none";
    document.getElementById("draw-tab").style.display = "none";
}


function onButton(){
    
}

function offButton(){
    
}

function sleepButton(){

}

function wakeButton(){

}

function setBusy(busy){
    if(busy == null || busy == "") busy = false;
    const busySpan = document.querySelector("#busy");
    if(busy){
        busySpan.innerHTML = "Yes";
        busySpan.className = "off-span";

    }
    else{
        busySpan.innerHTML = "No";
        busySpan.className = "on-span";
    }
}

function setConnected(connected, adress, battery){
    const connectedSpan = document.querySelector("#connected");
    const adressSpan = document.querySelector("#connectedto");
    if(connected){
        if(adress == null || adress == "") adress = "unknown";
        if(battery != null) setBatteryPercentage(battery);

        adressSpan.innerHTML = adress;

        connectedSpan.innerHTML = "Connected";
        connectedSpan.className = "on-span";
    }
    else {
        connectedSpan.innerHTML = "Not connected";
        connectedSpan.className = "off-span";
        setBatteryPercentage();
    }
}

function setBatteryPercentage(newDashValue){
    const h3Path = document.querySelector("#percentageh3");
    const circlePath = document.querySelector("#circle");

    if(newDashValue != null){
        h3Path.innerHTML = newDashValue + "%";
        h3Path.style.fontSize = "30";

        if(newDashValue >= 50){
            circlePath.style.stroke = "#06af22";
            console.log("set circle to green");
        }
        else if(newDashValue < 50 && newDashValue > 10){
            circlePath.style.stroke = "#fc9d03";
            console.log("set circle to yellow");
        }
        else if(newDashValue <= 10){
            circlePath.style.stroke = "#cc0018";
            console.log("set circle to red");
        }
        
        newDashValue = (newDashValue * 3) + 1;
        circlePath.setAttribute("stroke-dasharray", `${newDashValue}, 300`);
    }
    else{
        h3Path.style.fontSize = "25";
        circlePath.style.stroke = "white";
        console.log("set circle to white");
        h3Path.style.fontsize
        h3Path.innerHTML = "Not connected";
        circlePath.setAttribute("stroke-dasharray", 310, 300);

    }

}


function canvasFunction(){
    const canvas = document.getElementById('drawing-board');
    const toolbar = document.getElementById('toolbar');
    const ctx = canvas.getContext('2d');
    
    const canvasOffsetX = canvas.offsetLeft;
    const canvasOffsetY = canvas.offsetTop;
    
    canvas.width = window.innerWidth - canvasOffsetX;
    canvas.height = window.innerHeight - canvasOffsetY;
    
    let isPainting = false;
    let lineWidth = 5;
    let startX;
    let startY;
    
    ctx.strokeStyle = 5;
    
  
    toolbar.addEventListener('click', e => {
        if (e.target.id === 'clear') {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    });
    
    
    const draw = (e) => {
        if(!isPainting) {
            return;
        }
    
        ctx.lineWidth = lineWidth;
        ctx.lineCap = 'round';
    
        ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
        ctx.stroke();
    }
    
    canvas.addEventListener('mousedown', (e) => {
        isPainting = true;
        startX = e.clientX;
        startY = e.clientY;
    });
    
    canvas.addEventListener('mouseup', e => {
        isPainting = false;
        ctx.stroke();
        ctx.beginPath();
    });
    
    canvas.addEventListener('mousemove', draw);
    
}