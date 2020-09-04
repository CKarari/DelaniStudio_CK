function subscribe(event) {

  var name = $("input#name").val();
  var email = $("input#email").val();
  var message = $("input#message").val();
  if ($("input#name").val() && $("input#email").val()) {
    alert(name + ", we have received your message. Thank you for reaching out to us.");
  }
  else {
    alert("Please enter your name and email!");
  }
}
$(document).ready(function () {
  $("#design-image").click(function () {
    $("#design-image").slideDown('1500').hide('1000');
    $("#design").show('1500');
  });
  $("#design").click(function () {
    $("#design").slideUp('1500');
    $("#design-image").slideDown('1500');
  });
});
$(document).ready(function () {
  $("#development-image").click(function () {
    $("#development-image").slideDown('1500').hide('1000');
    $("#development").show('1500');
  });
  $("#development").click(function () {
    $("#development").slideUp('1500');
    $("#development-image").slideDown('1500');
  });
});

$(document).ready(function () {
  $("#product-image").click(function () {
    $("#product-image").slideDown('1500').hide('1000');
    $("#product").show('1500');
  });
  $("#product").click(function () {
    $("#product").slideUp('1500');
    $("#product-image").slideDown('1500');
  });
});
$(document).ready(function () {
  $("#work1").mouseover(function () {
    $("#mouse-hover1").show();
  }).mouseout(function () {
    $("#mouse-hover1").hide();
  });
});
$(document).ready(function () {
  $("#work2").mouseover(function () {
    $("#mouse-hover2").show();
  }).mouseout(function () {
    $("#mouse-hover2").hide();
  });
});
$(document).ready(function () {
  $("#work3").mouseover(function () {
    $("#mouse-hover3").show();
  }).mouseout(function () {
    $("#mouse-hover3").hide();
  });
});
$(document).ready(function () {
  $("#work4").mouseover(function () {
    $("#mouse-hover4").show();
  }).mouseout(function () {
    $("#mouse-hover4").hide();
  });
});
$(document).ready(function () {
  $("#work5").mouseover(function () {
    $("#mouse-hover5").show();
  }).mouseout(function () {
    $("#mouse-hover5").hide();
  });
  $("#work6").mouseover(function () {
    $("#mouse-hover6").show();
  }).mouseout(function () {
    $("#mouse-hover6").hide();
  });
  $("#work7").mouseover(function () {
    $("#mouse-hover7").show();
  }).mouseout(function () {
    $("#mouse-hover7").hide();
  });
  $("#work8").mouseover(function () {
    $("#mouse-hover8").show();
  }).mouseout(function () {
    $("#mouse-hover8").hide();
  });
});


// $(document).ready(function () {

