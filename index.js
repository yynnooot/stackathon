const API_KEY='AIzaSyDXwcoDfCkDCScAfKYAYQo3lFL4-3h1jy0';


   function previewFile(){
       var preview = document.querySelector('img'); //selects the query named img
       var file    = document.querySelector('input[type=file]').files[0]; //sames as here
       var reader  = new FileReader();

       reader.onloadend = function () {
           preview.src = reader.result
       }
       if (file) {
           reader.readAsDataURL(file) //reads the data as a URL
           console.log(reader.readAsDataURL(file))
       } else {
           preview.src = ""
       }
       
  }

  previewFile();  //calls the function named previewFile()