song1 = "";
song2 = "";

rightWristY = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY= 0;

function setup() {
    canvas = createCanvas(600 , 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet( video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        rightWristY = results[0].pose.rightWrist.y;
        rightWristX = results[0].pose.rightWrist.x;

        console.log("RightWrist X = " + rightWristX + " , the RightWrist Y = " + rightWristY);
        
        leftWristY = results[0].pose.leftWrist.y;
        leftWristX = results[0].pose.leftWrist.x;

        console.log("The LeftWrist X = " + leftWristX + " , LeftWrist Y = " + leftWristY);
    }
}

function draw(){
    image(video,0,0,600,500)
}

function preload(){
    song1 = loadSound("song1.mp3");
    song2 = loadSound("song2.mp3");
}

function play() {
    song1.play();
    song1.setVolume(0.8);
    song1.rate(1);
}