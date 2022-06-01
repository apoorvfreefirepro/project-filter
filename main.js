var noseX,noseY
function preload(){
clown_mushtash=loadImage('https://postimg.cc/KRfnY9cK')
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video =createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses)
}
function gotPoses(results)
{
    if(results.length > 0){
    console.log(results);
    noseX=results[0].pose.mushtash.x-5;
    noseY=results[0].pose.mushtash.y-5;
    console.log("mushtash x =" + results [0].pose.mushtash.x)
    console.log("mushtash y =" + results [0].pose.mushtash.y)
}
}
function modelLoaded(){
    console.log('poseNet Is Initialized')
}

function draw(){
image(video, 0, 0, 300, 300);
fill('black');
image(clown_mushtash,mushtashX,mushtashY,30,30);


}

function take_snapshot(){
    save("myFilterImage.png");
}