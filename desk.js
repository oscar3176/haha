object = [];
Status = "";
function preload() {
    desk = loadImage("desk.jpg");
}

function setup() {
    canvas = createCanvas(640, 430,);
    canvas.position(650, 200);
    objectDetector = ml5.objectDetector("cocossd", ModalLoaded);
}

function ModalLoaded() {
    console.log("Modal Loaded");
    Status = true;
    objectDetector.detect(desk, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        object = results;
    }
}

function draw() {
    image(desk, 0 , 0 , 640, 430);
    if (Status != "") {

        for (i = 0; i < object.length; i++) {
            console.log("Started Drawing");
            fill("red");
            stroke("red");
            percent = floor(object[i].confidence*100);
            text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
            noFill();
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
}
function back() {
    window.location = "index.html";
}