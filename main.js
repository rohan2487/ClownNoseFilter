var canvas;
var video;
var noseX=0;
var noseY=0;
function setup(){
    
    canvas=createCanvas(400, 400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    //part1
    poseNet = ml5.poseNet(video, modelLoaded);
    //part2
    poseNet.on('pose', gotPoses);

}
//part 1
function modelLoaded(){
console.log('PoseNet is Intialized');
}

//part 2
function gotPoses(results){
if (results.length > 0) {  
    console.log(results[0].pose.nose.x)
    noseX= results[0].pose.nose.x;
    console.log(results[0].pose.nose.y)
    noseY= results[0].pose.nose.y;
}
  
}

function draw(){
    image(video,0,0,400,400);
    fill(255,0,0);
    
}

function take_snapshot(){
    save("MyName.jpg");

}
