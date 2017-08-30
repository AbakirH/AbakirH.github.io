 //Set database object
 var database = firebase.database().ref();

 //button executes this function
 function updateDB(){
     var Age = $("#age").val();
     var Artist = $("#artist").val();
     var Subjects=$("#subject").val();
     var Activity=$("#activity").val();
     var Hate=$("#hate").val();
     var Gender=$("#gender").val();
     var Love =$("#love").val();
     console.log(Age);
     //Update database here
     var value = {
         AGE: Age,
         SUBJECT: Subjects,
         ARTIST: Artist,
         ACTIVITIES:Activity,
         HATE:Hate,
         GENDER:Gender,
         LOVE:Love
     }
     database.push(value);
 }