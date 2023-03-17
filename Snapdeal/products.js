window.onload = function () {
  // alert("Working");

  var datFromLS = JSON.parse(localStorage.getItem("products"));
  var divFromHtml = document.getElementById("displayProducts");

  var show = [];

  for (var i = 0; i < datFromLS.length; i++) {
    show += `<div>
        <div>
            <img src="${datFromLS[i].image}">
        </div>
        <p>${datFromLS[i].name}</p>
        <p>${datFromLS[i].price}</p>
        <button onclick='addToCart(${JSON.stringify(
          datFromLS[i]
        )})'>Add to cart</button>
    </div>`;
  }
  //   console.log(show);

  divFromHtml.innerHTML = show;
};

function addToCart(pro) {
  var cartItems = JSON.stringify(pro);

  // console.log(cartItems);

  var dataFromLs = JSON.parse(localStorage.getItem("userData"));
  var userLog = JSON.parse(localStorage.getItem("currentUser"));
  // var allProducts = JSON.parse(localStorage.getItem("products"));

  if (!userLog) {
    alert("Login to buy");
    window.location.href = "login.html";
  } else {
    // console.log(userLog);
    var allUsers = [];

    for (var i = 0; i < dataFromLs.length; i++) {
      if (dataFromLs[i].email === userLog) {
        var obj = dataFromLs[i];
        obj["cartItems"] = obj["cartItems"] || [];
        obj["cartItems"].push(JSON.parse(cartItems));

        allUsers.push(obj);
      } else {
        allUsers.push(dataFromLs[i]);
      }
    }
    console.log(allUsers);
    localStorage.setItem("userData", JSON.stringify(allUsers));
    alert("product added to cart");
  }
}
