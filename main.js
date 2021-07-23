noseX = 0;
noseY = 0;
difference = 0;
LWx =0;
RWx =0;
function preload(){
}
function setup(){
    video= createCapture(VIDEO);
    video.size(450, 450);

    canvas = createCanvas(550, 500);
    canvas.position(500, 190);
poseNet = ml5.poseNet(video, mL);
poseNet.on('pose', gP);
}
function mL() {
    console.log("Model Loaded");
}
function draw() {
    background ('#7371f5');
    fill('#940404');
    stroke('#f00000');
    square(noseX, noseY, difference);
    document.getElementById("drawing").innerHTML = "Width and Height of the Square are : " +difference + " pixels";
}
function gP(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = "+noseX+"noseY ="+noseY);

        LWx = results[0].pose.leftWrist.x;
        RWx = results[0].pose.rightWrist.x;
        difference = floor(LWx - RWx);
        console.log("Left Wrist x = " + LWx + "Right Wrist x = " + RWx + "difference = " + difference);
    }
}