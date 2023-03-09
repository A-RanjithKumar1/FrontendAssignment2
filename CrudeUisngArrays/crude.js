let details = [];
let id = 0;
let flip = -1;
var valid = true;
//Add function
document.querySelector(".add").addEventListener("click", function (event) {
  console.log("Add button is called");
  if (
    flip === -1 &&
    valid &&
    document.querySelector(".name").value !== "" &&
    document.querySelector(".mobileno").value !== "" &&
    document.querySelector(".address").value !== "" &&
    document.querySelector(".email").value !== "" &&
    document.querySelector(".dob").value !== ""
  ) {
    console.log("for loop verified");
    let data = {
      Id: (id += 1),
      name: document.querySelector(".name").value,
      mobileno: document.querySelector(".mobileno").value,
      address: document.querySelector(".address").value,
      date: document.querySelector(".dob").value,
      email: document.querySelector(".email").value,
    };
    event.preventDefault();
    details.push(data);
    console.log(details);
    clearFields();
    Display();
  } else if (flip !== -1) {
    details[flip].name = document.querySelector(".name").value;
    details[flip].mobileno = document.querySelector(".mobileno").value;
    details[flip].address = document.querySelector(".address").value;
    details[flip].email = document.querySelector(".email").value;
    details[flip].date = document.querySelector(".dob").value;
    console.log(details);
    Display();
    clearFields();
    flip = -1;
    event.preventDefault();
  } else {
    alert("TextFields are not Appropriate");
    event.preventDefault();
  }
  console.log(details);
});
//Display Method
let Display = () => {
  var k = "";
  for (let i = 0; i < details.length; i++) {
    k += "<tr>";
    k += "<td>" + details[i].name + "</td>";
    k += "<td>" + details[i].mobileno + "</td>";
    k += "<td>" + details[i].email + "</td>";
    k += "<td>" + details[i].date + "</td>";
    k += "<td>" + details[i].address + "</td>";
    k +=
      '<td><button class="edit" onclick="Onedit(' +
      i +
      ')">EDIT</button><button class="del" onclick="OnDel(' +
      i +
      ')">DELETE</button></td>';
    k += "</tr>";
  }
  console.log(k);
  document.getElementById("tbody").innerHTML = k;
};
//Edit Method
let Onedit = (edittext) => {
  console.log("Edit function is called");
  console.log(edittext);
  document.getElementById("name").value = details[edittext].name;
  document.getElementById("mobileno").value = details[edittext].mobileno;
  document.getElementById("address").value = details[edittext].address;
  document.getElementById("date").value = details[edittext].date;
  document.getElementById("email").value = details[edittext].email;
  flip = edittext;
};
let OnDel = (item) => {
  console.log("Delete function is called");
  details.splice(item, 1);
  Display();
};
let clearFields = () => {
  document.getElementsByTagName("input")[0].style.border = "2px solid black";
  document.getElementsByTagName("input")[1].style.border = "2px solid black";
  document.getElementsByTagName("input")[2].style.border = "2px solid black";
  document.getElementsByTagName("input")[3].style.border = "2px solid black";
  document.getElementsByTagName("input")[4].style.border = "2px solid black";
  console.log("clear function is called");
  document.getElementById("form").reset();
};
const checking = (content) => {
  console.log(content);
  console.log(content.value);
  if (content.id == "name" && content.value.match(/^[a-zA-Z]+$/)) {
    content.style.border = "3px solid green";
    console.log("valid");
  } else if (content.id == "mobileno") {
    if (content.value.length === 10) {
      content.style.border = "3px solid green";
    } else {
      content.style.border = "3px solid red";
    }
    console.log("valid");
  } else if (content.id == "date" && content.value !== "") {
    content.style.border = "3px solid green";
    console.log("valid");
  } else if (content.id == "email" && content.value !== "") {
    content.style.border = "3px solid green";
    console.log("valid");
  } else if (content.id == "address" && content.value !== "") {
    content.style.border = "3px solid green";
    console.log("valid");
  } else {
    // if (document.getElementById(".mobileno").value.length !== 10) {
    //   alert("Please check the mobile Number");
    //   valid = false;
    // }
    valid = false;
    content.style.border = "3px solid red";
    console.log("Invalid");
    alert("Please change the Red fields to green");
  }
};
