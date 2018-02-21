$(function () {
    $('#name_error_message').show();
    $('#email_error_message').hide();
    $('#confirm_email_error_message').hide();
    $('#phone_error_message').hide();
    $('#gender_error_message').hide();
    var first_name = false;
    var email = false;
    var confirm_email = false;
    var phone = false;
    var gender = false;

    $('#first_name').focusout(function () {
        firstname_checker();

    });

    $('#email').focusout(function () {
        email_checker();

    });

    $('#confirm_email').focusout(function () {
        confirm_email_checker();

    });

    $('#phone').focusout(function () {
        phone_checker();

    });

    $("#submit").click(function () {
     var result =  $('input[type="radio"]:checked');
     if(result.length > 0 ) {
         $("#gender_error_message").html(result.val() + " is checked");

     }
     else
     {  $("#gender_error_message").html("no gender is selected");
         $("#gender_error_message").show();
         gender=true;

     }

    });

    function firstname_checker() {
        var name_length = $("#first_name").val().length;

        if (name_length < 1) {
            $("#name_error_message").html("This field should not be empty");
            $("#name_error_message").show();
            first_name=true;
        }
        else {
            $("#name_error_message").hide();
             }
    }

    function email_checker() {
        // var email_length= $("#email").val().length;
        var email_pattern = new RegExp( /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
        if(email_pattern.test($("#email")).val()){
            $("#email_error_message").hide();
        }
        // if(email_length < 1)
        // {
        //     $("#email_error_message").html("This field should not be empty");
        //     $("#email_error_message").show();
        // }
        else if(email_pattern.length == 0) {
            $("#email_error_message").html("This field is mandatory");
            email = true;
        }
        else
        {
            $("#email_error_message").html("Enter valid email id");
            $("#email_error_message").show();
            email=true;
        }
    }


    function confirm_email_checker() {
var email_data = $("#email").val();
var confirm_mail = $("#confirm_email").val();
if(email_data != confirm_mail )
{
    $("#confirm_email_error_message").html("Password doesnot matched");
    $("#confirm_email_error_message").show();
    confirm_email=true;
}
else
{
    $("#confirm_email_error_message").hide();
}
    }

    function phone_checker() {
        var phone_length = $("#phone").val().length;

        if(phone_length < 1 )
        {
        $("#phone_error_message").html("This field should not be empty");
        $("#phone_error_message").show();
        phone=true;
        }

        else if (phone_length >1 && phone_length < 10)
        {
            $("#phone_error_message").html("Number should be of 10 digits");
            $("#phone_error_message").show();
            phone=true;
        }
        else
        {
            $("#phone_error_message").hide();

        }
    }

    $("#MyForm").submit(function () {

        first_name= false;
        email=false;
        confirm_email=false;
        phone=false;

        firstname_checker();
        email_checker();
        confirm_email_checker();
        phone_checker();


        if( first_name == false && email == false && confirm_email == false && phone == false)
        {
            alert("Form is submitted");
            return true;
        }
        else
        {
            alert("please fill mandatory fields");
           return  false;
        }
    });
});
