var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){

    recognition.start()
}
    recognition.onresult = function(event){
        console.log(event);
        var content = event.results[0][0].transcript

        console.log(content)
        if(content =="take my selfie"){
            console.log("taking selfie --- ")
            speak()
        }
    }

function speak(){
    var synth = window.speechSynthesis
    var speak_data = "Taking your selfie in 5 seconds"
    var utter_this = new SpeechSynthesisUtterance(speak_data)
    synth.speak(utter_this)
    Webcam.attach(camera)

    setTimeout(function(){
        take_snapshot();
        save()
    } ,5000);
}
Webcam.set({
    width:350,
    height:250,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera")
function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result1").innerHTML = '<img id="selfie_image1" src=" '+data_uri+' ">'
        document.getElementById("result2").innerHTML = '<img id="selfie_image2" src=" '+data_uri+' ">'
        document.getElementById("result3").innerHTML = '<img id="selfie_image3" src=" '+data_uri+' ">'
    })
}
function save(){
    link = document.getElementById("link");
    image= document.getElementById("selfie_image1").src;
    image2= document.getElementById("selfie_image2").src;
    image3= document.getElementById("selfie_image3").src;
    image.href = image,image2,image3;
    link.click();
    link.click();
    link.click();
}
