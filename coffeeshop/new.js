$(document).ready(function(){
    $("#btn").click(function(){




    var tea=parseInt($("#tea").val());
    var coffee=parseInt($("#coffee").val());
    var qty1=parseInt($("#qty1").val());
    var qty2=parseInt($("#qty2").val());
    

    var a=tea*qty1;
    var b=coffee*qty2;
    var c=qty1+qty2;
    var d=a+b;
    $("#one").text(a);
    $("#two").text(b);
    $("#q").text(c);
    $("#stotal").text(d);
    
    });
});