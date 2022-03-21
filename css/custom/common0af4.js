
function giveRandNum(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
$(document).ready(function () {
	
	
    App.init();
    App.initSliders();
    Index.initRevolutionSlider();

    $('.randomBox').each(function () {
        $(this).addClass('hide');
    });
    var ran1 = giveRandNum(4, 1);
    var ran2 = giveRandNum(7, 5);
    $('#rbox' + ran1).removeClass('hide');
    $('#rbox' + ran2).removeClass('hide');

    $(".collapsable-panels .panel-heading").on('click', function () {
        if ($(this).children('span').hasClass('glyphicon-plus-sign')) {
            $(this).children('span').removeClass("glyphicon-plus-sign");
            $(this).children('span').addClass("glyphicon-minus-sign");
        } else {
            $(this).children('span').removeClass("glyphicon-minus-sign");
            $(this).children('span').addClass("glyphicon-plus-sign");
        }
    });
    $('.orc-work-with-link').on('click', function () {
        $('#oracle-work-page').val($(this).data('page'));
    });
    $('.ms-work-with-link').on('click', function () {
        $('#ms-work-page').val($(this).data('page'));
    });
    $('.mob-work-with-link').on('click', function () {
        $('#mob-work-page').val($(this).data('page'));
    });
    $('#quote-form').validate({
        rules: {
            Firstname: {
                required: true
            },
            Company: {
                required: true,
            },
            Email: {
                required: true,
                email: true
            },
            Mdescription: {
                required: true,
            },
            Phone: {
                minlength: 10,
                maxlength: 14
            }
        },
        messages: {
            Firstname: {
                required: "Please enter your name"
            },
            Company: {
                required: "Please enter your company"

            },
            Email: {
                required: "Please enter your email address"
            },
            Mdescription: {
                required: "Please enter your message"
            }
        }
    });
    $('#quote-form').submit(function (event) {
        event.preventDefault();
        if ($('#quote-form').valid())
        {
            $.ajax({
                type: 'post',
                url: '/inserts/insertrequest',
                data: $('#quote-form').serialize(),
                beforeSend: function () {
                    $('#quote-form button.submit').text('Sending..');
                },
                error: function () {
                    $('#quote-form button.submit').text('Submit');
                },
                success: function (data) {
                    $('#quote-form button.submit').text('Submit');
                    if (!isNaN(data)) {
                        $('#mmsg').html("<div class='alert alert-success' style='border-radius:0px;font-size:14px;'>Thank you for contacting us. Our team will get in touch with you shortly.</div>");
                        $('#Firstname,#Company,#Email,#Phone,#Mdescription').val('');
                        $('#quote-form .error').remove();
                        //$('.quote-modal').modal('close');
                        $('.close').trigger('click');
                    } else {
                        $('#mmsg').html(data);
                    }
                }
            });
        }
        return false;
    });
    $('#orc-work-form').validate({
        rules: {
            Firstname: {
                required: true
            },
            Company: {
                required: true,
            },
            Email: {
                required: true,
                email: true
            },
            Description: {
                required: true,
            },
            Phone: {
                minlength: 10,
                maxlength: 14
            }
        },
        messages: {
            Firstname: {
                required: "Please enter your name"
            },
            Company: {
                required: "Please enter your company"

            },
            Email: {
                required: "Please enter your email address"
            },
            Description: {
                required: "Please enter your message"
            }
        }
    });
    $('#orc-work-form').submit(function (event) {
        event.preventDefault();
        if ($('#orc-work-form').valid()) {
            $.ajax({
                type: 'post',
                url: '/inserts/insertrequest',
                data: $('#orc-work-form').serialize(),
                beforeSend: function () {
                    $('#orc-work-form button.submit').text('Sending..');
                },
                error: function () {
                    $('#orc-work-form button.submit').text('Submit');
                },
                success: function (data) {
                    $('#orc-work-form button.submit').text('Submit');
                    if (!isNaN(data)) {
                        $('#wmsg').html("<div class='alert alert-success' style='border-radius:0px; font-size:14px;'>Thank you for contacting us. Our team will get in touch with you shortly.</div>");
                        $('#Firstname,#Company,#Email,#Phone,#Description').val('');
                        $('#orc-work-form .error').remove();
                        //$('.work-modal').modal('close');
                        $('.close').trigger('click');
                    } else {
                        $('#wmsg').html(data);
                    }
                }
            });
        }
        return false;
    });
    $('#ms-work-form').validate({
        rules: {
            Firstname: {
                required: true
            },
            Company: {
                required: true,
            },
            Email: {
                required: true,
                email: true
            },
            Description: {
                required: true,
            },
            Phone: {
                minlength: 10,
                maxlength: 14
            }
        },
        messages: {
            Firstname: {
                required: "Please enter your name"
            },
            Company: {
                required: "Please enter your company"

            },
            Email: {
                required: "Please enter your email address"
            },
            Description: {
                required: "Please enter your message"
            }
        }
    });
    $('#ms-work-form').submit(function (event) {
        event.preventDefault();
        if ($('#ms-work-form').valid()) {
            $.ajax({
                type: 'post',
                url: '/inserts/insertrequest',
                data: $('#ms-work-form').serialize(),
                beforeSend: function () {
                    $('#ms-work-form button.submit').text('Sending..');
                },
                error: function () {
                    $('#ms-work-form button.submit').text('Submit');
                },
                success: function (data) {
                    $('#ms-work-form button.submit').text('Submit');
                    if (!isNaN(data)) {
                        $('#wmmsg').html("<div class='alert alert-success' style='border-radius:0px; font-size:14px;'>Thank you for contacting us. Our team will get in touch with you shortly.</div>");
                        $('#Firstname,#Company,#Email,#Phone,#Description').val('');
                        $('#ms-work-form .error').remove();
                        //$('.work-modal').modal('close');
                        $('.close').trigger('click');
                    } else {
                        $('#wmmsg').html(data);
                    }
                }
            });
        }
        return false;
    });
    $('#mob-work-form').validate({
        rules: {
            Firstname: {
                required: true
            },
            Company: {
                required: true,
            },
            Email: {
                required: true,
                email: true
            },
            Description: {
                required: true,
            },
            Phone: {
                minlength: 10,
                maxlength: 14
            }
        },
        messages: {
            Firstname: {
                required: "Please enter your name"
            },
            Company: {
                required: "Please enter your company"

            },
            Email: {
                required: "Please enter your email address"
            },
            Description: {
                required: "Please enter your message"
            }
        }
    });
    $('#mob-work-form').submit(function (event) {
        event.preventDefault();
        if ($('#mob-work-form').valid()) {
            $.ajax({
                type: 'post',
                url: '/inserts/insertrequest',
                data: $('#mob-work-form').serialize(),
                beforeSend: function () {
                    $('#mob-work-form button.submit').text('Sending..');
                },
                error: function () {
                    $('#mob-work-form button.submit').text('Submit');
                },
                success: function (data) {
                    $('#mob-work-form button.submit').text('Submit');
                    if (!isNaN(data)) {
                        $('#wmobmsg').html("<div class='alert alert-success' style='border-radius:0px; font-size:14px;'>Thank you for contacting us. Our team will get in touch with you shortly.</div>");
                        $('#Firstname,#Company,#Email,#Phone,#Description').val('');
                        $('#mob-work-form .error').remove();
                        //$('.work-modal').modal('close');
                        $('.close').trigger('click');
                    } else {
                        $('#wmobmsg').html(data);
                    }
                }
            });
        }
        return false;
    });
	
	
			  $("form#app-form").submit(function() {
				  
console.log("dsfds");
return false;
   /* var formData = new FormData($(this)[0]);

    $.post($(this).attr("action"), formData, function(data) {
        alert(data);
    });

    return false;*/
});



});
//------------
$("#assist").click(function () {
    $(".assist-form").fadeIn(5000);
});
$("#submit").click(function () {
    $(".assist-form").fadeOut(5000);
});

$("#assist").click(function () {
    $(".assist-form").fadeIn(500, function () {
        $(".download-form").fadeOut(500);
    });
});
$("#submit , .close-popup").click(function () {
    $(".assist-form").fadeOut(500);
    $("div *").prop('disabled', false);
});
$(".open-form").click(function () {
    $(".download-form").fadeIn(500, function () {
        $(".assist-form").fadeOut(500);
    });
});
$(".schedule-btn , .close-popup").click(function () {
    $(".download-form").fadeOut(500);
});

$(".wpc-query").click(function () {
    $("html, body").animate({scrollTop: $('#WPC2015').offset().top - 1}, 1500);
});

$(".back").click(function () {
    $("html, body").animate({scrollTop: $('#back').offset().top - 1}, 1500);
});

$(function () {
    $('#side-white1,#white1').click(function () {

        var data = $('#is_white').val('1');
        var test = $('#myModalLabel').html('Please fill-up the form to download our White Paper');
        var comment = $('#txtarea').attr("placeholder", "Comments (If any)");
        $('#headermsg').html('');
    });
    $('#white2,#side-white2').click(function () {
        var data = $('#is_white').val('4');
        var test = $('#myModalLabel').html('Please fill-up the form to download our White Paper');
        var comment = $('#txtarea').attr("placeholder", "Comments (If any)");
        $('#headermsg').html('');

    });
   
    $('#white7,#side-white7').click(function () {
        var data = $('#is_white').val('7');
        var test = $('#myModalLabel').html('Please fill-up the form to download our White Paper');
        var comment = $('#txtarea').attr("placeholder", "Comments (If any)");
        $('#headermsg').html('');

    });
    
    $('#white9,#side-white9').click(function () {
        var data = $('#is_white').val('9');
        var test = $('#myModalLabel').html('Please fill-up the form to download our White Paper');
        var comment = $('#txtarea').attr("placeholder", "Comments (If any)");
        $('#headermsg').html('');

    });
    
    
    
    $(document).on("click", "#appnow", function () {
		console.log('sdfdsf');
     $('#appid').val($(this).attr('data-id'));
    
    });
    
    /*$('.container-fluid').on('click','a#appid',function(){
		
		console.log('sdfdsf');
		$('#appid').val($(this).attr('data-id'));
	});*/
    

    $('#side-case1,#case1').click(function () {
        var data = $('#is_white').val('2');
        var test = $('#myModalLabel').html('Please fill-up the form to download our Case Study');
        var comment = $('#txtarea').attr("placeholder", "Comments (If any)");
        $('#headermsg').html('');

    });

    $('#side-case2,#case2').click(function () {
        var data = $('#is_white').val('3');
        var test = $('#myModalLabel').html('Please fill-up the form to download our Case Study');
        var comment = $('#txtarea').attr("placeholder", "Comments (If any)");

    });
    $('#side-case3,#case3').click(function () {
        var data = $('#is_white').val('5');
        var test = $('#myModalLabel').html('Please fill-up the form to download our Case Study');
        var comment = $('#txtarea').attr("placeholder", "Comments (If any)");
        $('#headermsg').html('');

    });
    $('#side-case4,#case4').click(function () {
        var data = $('#is_white').val('6');
        var test = $('#myModalLabel').html('Please fill-up the form to download our Case Study');
        var comment = $('#txtarea').attr("placeholder", "Comments (If any)");
        $('#headermsg').html('');

    });
    
    $('#side-case5,#case5').click(function () {
        var data = $('#is_white').val('8');
        var test = $('#myModalLabel').html('Please fill-up the form to download our Case Study');
        var comment = $('#txtarea').attr("placeholder", "Comments (If any)");
        $('#headermsg').html('');

    });

    $('#assist').click(function () {
        var data = $('#is_white').val('0');
        var test = $('#myModalLabel').html('How can we assist you?');
        $('#headermsg').html('');
    });

    $('#myModal,#submit').on('hidden.bs.modal', function (e) {
        $('#txtname,#txtemail,#txtphne,#txtarea').val('');
        $('.alert,.alert-success').fadeOut(1000);
        $('label.error').hide();
    });


});
//-----------

