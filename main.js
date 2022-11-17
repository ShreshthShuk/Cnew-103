Webcam.attach("#camera");

camera = document.getElementById("camera");

Webcam.set({
    width: 350,
    height: 300,
    image_type: 'png',
    png_quality: 90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='selfie_image' src='"+data_uri+"'/>";
    });
}

console.log("mls.version", ml5.version);

classifier = imageClassifier("https://teachablemachine.withgoogle.com/models/HkyJqWyhQ/model.json", modelLoaded);