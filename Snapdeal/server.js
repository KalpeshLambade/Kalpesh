function signup(event) {
  event.preventDefault();

  var Username = document.getElementById("name").value;
  var Usernumber = document.getElementById("number").value;
  var Useremail = document.getElementById("email").value;
  var Userpassword = document.getElementById("password").value;
  var ConformPass = document.getElementById("con-password").value;

  var userData = {
    name: Username,
    number: Usernumber,
    email: Useremail,
    password: Userpassword,
  };

  console.log(userData);

  var dataFromLS = JSON.parse(localStorage.getItem("userData")) || [];

  var flag = false;
  for (var i = 0; i < dataFromLS.length; i++) {
    if (dataFromLS[i].email === Useremail) {
      flag = true;
    }
  }

  if (flag) {
    document.getElementById("email").value = "";
    alert("Email already exsited please try another");
  } else if (Userpassword.length < 8) {
    document.getElementById("password").value = "";
    document.getElementById("con-password").value = "";
    alert("Password Must be of 8 characters");
  } else if (Userpassword !== ConformPass) {
    document.getElementById("password").value = "";
    document.getElementById("con-password").value = "";
    alert("password doesn't match");
  } else {
    dataFromLS.push(userData);
    localStorage.setItem("userData", JSON.stringify(dataFromLS));

    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("con-password").value = "";

    window.location.href="login.html";
    alert("sign up sucessful");
  }
}

function login(event) {
  event.preventDefault();

  var dataFromLS = JSON.parse(localStorage.getItem("userData"));

  var Useremail = document.getElementById("email").value;
  var Userpassword = document.getElementById("password").value;

  // console.log(Useremail, Userpassword);
  var flag = false;
  for (var i = 0; i < dataFromLS.length; i++) {
    if (
      dataFromLS[i].email === Useremail &&
      dataFromLS[i].password === Userpassword
    ) {
      flag = true;
    }
  }

  if (flag) {
    localStorage.setItem("currentUser", JSON.stringify(Useremail));
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    alert("log in sucessful");
    window.location.href="homepage.html";
  } else {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    alert("Email or Password does not match");
  }
}

function logout() {
  localStorage.removeItem("currentUser");
}

function add() {
  // alert("working");

  var productName = document.getElementById("productName").value;
  var productImage = document.getElementById("productImage").value;
  var productPrice = document.getElementById("productPrice").value;

  var products = {
    name: productName,
    image: productImage,
    price: productPrice,
  };

  var dataFromLS = JSON.parse(localStorage.getItem("products")) || [];
  var flag = false;

  for (var i = 0; i < dataFromLS.length; i++) {
    if (
      dataFromLS[i].name == productName &&
      dataFromLS[i].image === productImage &&
      dataFromLS[i].price === productPrice
    ) {
      flag = true;
    }
  }

  if (flag) {
    alert("Product already added!!");
  } else {
    dataFromLS.push(products);
    console.log(dataFromLS);
    localStorage.setItem("products", JSON.stringify(dataFromLS));
    alert("Product added!!");
  }
}

function buy(){
  // alert("Working");
  
  var dataFromLS= JSON.parse(localStorage.getItem("userData"));
  var currentUser =JSON.parse(localStorage.getItem("currentUser"));

  var allUsers= [];

  for(var i=0; i<dataFromLS.length;i++){
    if(dataFromLS[i].email === currentUser ){
      dataFromLS[i].cartItems =[];
      allUsers.push(dataFromLS[i]);
    }
    else{
      allUsers.push(dataFromLS[i]);
    }
  }

  localStorage.setItem("userData",JSON.stringify(allUsers));
  window.location.href ="index.html";
  alert("Products are ready to dispactch");

  
}