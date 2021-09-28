SpeechRecognition = window.webkitSpeechRecognition;
recognition= new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML=" ";
    recognition.start();
}

recognition.onresult=function run(event){console.log(event);
var info =event.results[0][0].transcript;
document.getElementById("textbox").innerHTML=info;
if(info=="take my selfie")
{
    speak();
}

}

Webcam.set({
    width : 360,
    height : 250,
    image_format : "png",
    png_quality : 90
});
var cam=document.getElementById("camera");

function take_snap()
{
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='selfie' src="+data_uri+">";
});
}

function speak()
{
    var synth= window.speechSynthesis;
    var speak_data="Taking your selfie in 5 seconds";
    var utterThis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    Webcam.attach(cam);

 setTimeout(function(){
      take_snap();
      save();
 } , 5000);
}

function save()
{
    image=document.getElementById('selfie').src;
    link=document.getElementById("link");
    link.href=image;
    link.click();
}