document.getElementById("in").addEventListener("click", LogAdmin);
var ur1 = "https://script.google.com/macros/s/";
var ur2= "AKfycbwysdXDGl8b-JxE_HGJwHDjyF3C7mSMQ1idz0iVhmxs66hpogLqXmnXLV2sf8857ea-";
var obdm_mi = ur1+ur2+"/exec";
function LogAdmin() {
  var pass = document.getElementById("idop").value;
  var paes = $('#hkhds').val();
  var mkey = $('#idop').val();
  if(pass == paes && mkey !=""){
    document.getElementById("loader1").style.visibility = "visible";
    document.getElementById("iamin").style.display = "block";
    document.getElementById("logAd").style.display = "none";
    document.getElementById("loader1").style.visibility = "hidden";
    document.getElementById("id03").style.display = "block";
  }
   else {
    return false;
  }
}

function monologueKey(){
    jQuery("#YoutubeOne").empty();
          jQuery("#News1").empty();
          jQuery("#GIF2").empty();
          jQuery("#Bio2").empty();
    document.getElementById('showhtml').style.display='none';
    document.getElementById('id03').style.display='block';
    document.getElementById("adminmoto").style.display = "block";
}

jQuery('#confirmobdmkey').on('keyup', function() {
  if (jQuery('#obdmkey').val() == jQuery('#confirmobdmkey').val()) {
    jQuery('#message').html('Matching').css('font-size', '12px');
    document.getElementById('continuemotoreg').disabled = false;
    document.getElementById('updatemotoreg').disabled = false;
  } else {
    jQuery('#message').html('Not Matching').css('font-size', '12px');
    document.getElementById('continuemotoreg').disabled = true;
    document.getElementById('updatemotoreg').disabled = true;
  }
});