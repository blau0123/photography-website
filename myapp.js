var submit_btn = document.querySelector(".submit-button");
var user_email = document.getElementById("email");
var user_subject = document.getElementById("subject");
var user_message = document.getElementById("message");

function submitMessage(){

}

function main(){
    submit_btn.addEventListener('click', function(){
        submitMessage();
    })
}

main();