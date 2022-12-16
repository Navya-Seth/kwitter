const firebaseConfig = {
      apiKey: "AIzaSyBuGz_6tqFboxH4mtjS0H1rgMI8TPqS6Us",
      authDomain: "kwitter-1e288.firebaseapp.com",
      databaseURL: "https://kwitter-1e288-default-rtdb.firebaseio.com",
      projectId: "kwitter-1e288",
      storageBucket: "kwitter-1e288.appspot.com",
      messagingSenderId: "576143150515",
      appId: "1:576143150515:web:e558a103868e898c76cfc6",
      measurementId: "G-5MCLQTX02J"
    };

    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
     room_name = localStorage.getItem("room_name");

    function send(){
        msg = document.getElementById("msg").value ;
        firebase.database().ref(room_name).push({
            name:user_name,
             message:msg,
              like:0
     });

       document.getElementById("msg").value = "";

    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
