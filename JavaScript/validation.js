function validate(){
    var name = document.getElementById("fname").value;
    var sname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var CellNo = document.getElementById("phone").value;
    var message = document.getElementById("comment").value;

    if(name == "" || name == null){
        alert("Enter your first name");
        return false;
    }
    if(sname == "" || sname == null){
        alert("Enter your last name")
        return false;
    }
    if(CellNo.length < 10 && CellNo != )
}