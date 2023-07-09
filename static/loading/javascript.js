var text = ["Uploading Image","Uploading Image.","Uploading Image..","Uploading Image...","Uploading Image","Uploading Image.","Uploading Image..","Uploading Image...","Uploading Image.","Uploading Image..","Image has been Uploaded.","Processing Image","Processing Image.","Processing Image..","Processing Image..."];
var counter = 0;
var farme_count = 0;
var inst = setInterval(change, 500);

function change() {
  document.getElementById("text").innerText = text[counter];
  counter++;
  if (document.getElementById("text1").innerText != "."){
    
    fetch('/status')
    .then(response => response.json())
    .then(data => {
      if (data['message'] == "Done"){
        window.location.replace("http://localhost:5000/result");
      }
      document.getElementById('text1').innerText = data['message']
    }); 
    

    //document.getElementById("text1").innerText = "Tracking Human Pose From Frame "+farme_count+"/245.";
    farme_count++;
  }
  
  if (counter >= text.length) {
    counter = 11;
    if (document.getElementById("text1").innerText == "."){
      document.getElementById("text1").innerText = "Processing Image";
    }
    

    
  }
}

