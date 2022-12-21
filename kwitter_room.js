

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
    user_name = localStorage.getItem("user name");
    document.getElementById("user_add").innerHTML = "Welcome   " + user_name + "!";

    function addroom(){
        room_name = document.getElementById("add_room").value;
        firebase.database().ref ("/").child(room_name).update ({
            purpose:"Adding Room Name"
        });   
        
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_name );
      row = "<div class = 'room_name' id = "+ Room_names + "onclick ='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redirectToRoomName(name){
     console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html"; 
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("Room_names");
      window.location = "index.html"; 
}