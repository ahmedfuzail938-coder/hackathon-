alert("Welcome to Asset Management System");
function viewAsset(){
function viewAsset(code){

    if(code=="AST001"){

      //  alert(
        "Asset Code: AST001\n"+
        "Name: Dell Laptop\n"+
        "Category: IT\n"+
        "Status: Available"
        

    }


    if(code=="AST002"){

       // alert(
        "Asset Code: AST002\n"+
        "Name: HP Printer\n"+
        "Category: Office\n"+
        "Status: Available"
        

    }

}
    document.getElementById("assetDetails").style.display="block";

}
function viewAsset(code){

let details="";


if(code=="AST001"){

details=
"Asset Code: AST001 <br>" +
"Name: Dell Laptop <br>" +
"Category: IT <br>" +
"Status: Available";

}


if(code=="AST002"){

details=
"Asset Code: AST002 <br>" +
"Name: HP Printer <br>" +
"Category: Office <br>" +
"Status: Available";

}


document.getElementById("details").innerHTML=details;

}
document.getElementById("qrcode").src =
"https://api.qrserver.com/v1/create-qr-code/?data=AST001&size=150x150";
function reportIssue(){

document.getElementById("issueForm").style.display="block";
}
function submitIssue(){

let title = document.getElementById("issueTitle").value;

let description = document.getElementById("issueDescription").value;

let priority = document.getElementById("priority").value;


let newIssue = {

title:title,

description:description,

priority:priority,

status:"Open"

};


issues.push(newIssue);


alert("Issue Saved Successfully");


}
