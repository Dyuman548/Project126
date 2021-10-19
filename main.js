song = "";

scoreRightWrist = 0;
scoreLeftWrist = 0;

song1 = "music.mp3";
song2 = "music2.mp3";

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;


function preload() 
{
    song1  = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Posenet Is Intialized');
}

function gotPoses(results) 
{
    if(results.length > 0)
    {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

    }
}
function draw() {
    image(video, 0, 0, 600, 500);

    song_variable.isPlaying(song1);

    fill("#FF0000");
    stroke("#FF0000");

    if (scoreRightWrist > 0.2)
    {
        circle(rightWristX,rightWristY,20);
    
        song.stop("music2mp3");
    
    }

}