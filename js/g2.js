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

/*
obdmmottoform.addEventListener('submit', (event) => {
var mtpicthumb = $('#mottothumb').val();
var mtmotto = $('#mottoobdm').val();
var mtdescp = $('#mottocondescp').val();
var mtobdmk = escape($('#confirmobdmkey').val());
var mtobdmusd = $('#usidobdmdef').val();
var obdmstr =escape(String(mtpicthumb +"{biz}"+mtmotto +"{biz}"+mtdescp +"{biz}"+mtobdmk)) ;
var ur1 = "https://script.google.com/macros/s/";
    var ur2 = "AKfycbya6mMrGOM5UhgyD8If_5ZyUNq3vWN9bzpQqIGMiIF5Eqq1MF0XywDtom8LV1W67L-dHw";
    var urdm = ur1 + ur2 + "/exec";
    var url = urdm + "?callback=upobdm&motto=" + obdmstr + "&obpass=" + mtobdmk +  "&mottotitle=" + mtmotto +  "&usid=" + mtobdmusd +"&action=inobdm";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });
    document.getElementById('continuemotoreg').disabled = true;
});
*/

$(document).ready(function(){
  var mtdescp = $('#mottocondescp').val();
  if(mtdescp==""){
    jQuery('#descpmoto').html('** Please add a description (max 2000 characters)').css('font-size', '12px');
  }

});
jQuery('#coneditmotto').on('keyup', function() {
  var mtdescp = $('#mottocondescp').val();
  var descplen = mtdescp.length;
  if(descplen >= 2000){
 jQuery('#descpmoto').html('** Exceeding character limit').css('font-size', '12px');
}
else{
  jQuery('#descpmoto').html('** Please add a description (max 2000 characters)').css('font-size', '12px');
}
});

$(document).ready(function(){
  monologuecon();
});

function monologuecon(){
var mtobdmusd = $('#usidobdmdef').val();
  var ur1 = "https://script.google.com/macros/s/";
  var ur2 = "AKfycbya6mMrGOM5UhgyD8If_5ZyUNq3vWN9bzpQqIGMiIF5Eqq1MF0XywDtom8LV1W67L-dHw";
  var urdm = ur1 + ur2 + "/exec";
  var url = urdm + "?callback=chobdm&usid=" + mtobdmusd +"&action=chobdm";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });

}

function chobdm(e){
  var res = e.result;
  if(res!="Set Motto!"){
    $('#updateobdm').show();
var mottostr = res[0].ADMIINMotto;
var mottotit = res[0].MName;
var mottothumb = mottostr.split('{biz}');
var userrd = res[0].IDOPM;
var userid = res[0].ADMIINId;
document.getElementById('hkhds').value=userrd;
document.getElementById('hkhdu').value=userid;
document.getElementById('hkhdoc').value = mottostr;
document.getElementById('mottostr').value = mottostr;
document.getElementById('mottoobdm').value = unescape(mottotit);
document.getElementById('mottothumb').value = mottothumb[0];
document.getElementById('mottothumbpicpost').src = mottothumb[0];
document.getElementById('coneditmotto').innerHTML = mottothumb[2];
document.getElementById('obdmkey').value = res[0].IDOPM;
document.getElementById('motopicthumbpre').style.display = "none";
document.getElementById('mottothumbpicpost').style.display = "inline-block";
var shname = "/i/"+userid+"/edit#true="+window.btoa(mottotit);
let stateObj = { id: "0" };
 window.history.replaceState(stateObj,
       "", shname);
  }
}

$('#upmotto').on('click',function(){
  $('#continuemotoreg').hide();
  $('#updatemotoreg').show(); 
  $('#updateobdm').hide();
});
document.getElementById('updatemotoreg').addEventListener('click',updateobdm);
function updateobdm(){
  var mtpicthumb = $('#mottothumb').val();
var mtmotto = escape($('#mottoobdm').val());
var mtdescp = $('#mottocondescp').val();
var mtobdmk = escape($('#confirmobdmkey').val());
var mtobdmusd = $('#usidobdmdef').val();
var obdmstr =escape(String(mtpicthumb +"{biz}"+mtmotto +"{biz}"+mtdescp +"{biz}"+mtobdmk)) ;
if(mtpicthumb !='' && mtmotto!='' && mtdescp!='' && mtobdmk!=''){
  var ur1 = "https://script.google.com/macros/s/";
      var ur2 = "AKfycbya6mMrGOM5UhgyD8If_5ZyUNq3vWN9bzpQqIGMiIF5Eqq1MF0XywDtom8LV1W67L-dHw";
      var urdm = ur1 + ur2 + "/exec";
      var url = urdm + "?callback=upobdmre&motto=" + obdmstr + "&obpass=" + mtobdmk +  "&mottotitle=" + mtmotto +  "&usid=" + mtobdmusd +"&action=upobdm";
      var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
      });
      document.getElementById('updatemotoreg').disabled = true;
}
else{
  document.getElementById('updatemotoreg').disabled = true;
  return false;
}
}

function upobdmre(e){
  var res = e.result;
 // document.getElementById('coneditmotto').innerHTML=`<p onclick="document.getElementById('coneditmotto').innerHTML='';">Description..</p>`;
  $('#updateobdm').show();
  document.getElementById('continuemotoreg').disabled = false;
  document.getElementById('updatemotoreg').disabled = false;
  document.getElementById('mottoupdatd').style.display = "block";
  document.getElementById('mottoupdatd').style.zIndex = "400";
  document.getElementById('mottoupdatd').innerHTML ="Motto Updated!"
  setTimeout(function(){
    document.getElementById('mottoupdatd').style.display = "none";},6000);
  show_wall(locksee);
}

creltfrm.addEventListener('submit', (event) => {
  var ur1 = "https://script.google.com/macros/s/";
  var ur2 = "AKfycbypYCXSfkW3wv7wuflnf_bZCX0HYl2sKSIQaqxp7LAnb97sUlHGPEsLT4PMHdsPpoxy";
  var urdm = ur1 + ur2 + "/exec";
  document.getElementById('crtelite').disabled = true;
  checkelite(urdm);
});


function  checkelite(urdm){
  var ep1 = $('#epassone').val();
  var ep2 = $('#epasstwo').val();
  var ep3 = $('#epassthree').val();
  var ep4 = $('#epassfour').val();
  var elop = String(ep1+ep2+ep3+ep4).toLocaleUpperCase();
  var chur = urdm + '?callback=checkstus&elpass=' + elop + '&action=chelite';
  var request = jQuery.ajax({
  crossDomain: true,
  url: chur,
  method: "GET",
  dataType: "jsonp"
});
}

function checkstus(e){
var res = e.result;
if(res!="Pass not found!"){
  document.getElementById('crtelite').disabled = false;
  document.getElementById('elpasinfo').style.display="block";
  document.getElementById('elpasscreated').innerHTML ="<p>This Pass can not be overwritten</p>";
  document.getElementById('svbtnelt').style.display = "none";
  document.getElementById('AppShare').innerHTML = "";
  setTimeout(function(){document.getElementById('elpasinfo').style.display="none";},3000);
}
else{
  var ep1 = $('#epassone').val();
  var ep2 = $('#epasstwo').val();
  var ep3 = $('#epassthree').val();
  var ep4 = $('#epassfour').val();
  var epsession = $('#sessionexp').val();
  var epassk = String(ep1+ep2+ep3+ep4).toLocaleUpperCase();
  var eliteref = $('#usidobdmdef').val();
  var motostr = escape($('#mottostr').val());
  var mototit = $('#mottotit').val();
  var d = new Date();
  d.setTime(d.getTime() + (epsession*24*60*60*1000));
  var expires = d.toUTCString();
  var ur1 = "https://script.google.com/macros/s/";
  var ur2 = "AKfycbypYCXSfkW3wv7wuflnf_bZCX0HYl2sKSIQaqxp7LAnb97sUlHGPEsLT4PMHdsPpoxy";
  var urdm = ur1 + ur2 + "/exec";
  var url = urdm + "?callback=upelite&eref=" + eliteref + "&elpass=" + epassk +  "&elexp=" + expires + "&mtstr=" + motostr + "&mttit=" + mototit +"&action=inelite";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });
  document.getElementById('elpasscreated').innerHTML ="<p>|| Elite Pass: "+epassk+
  "<br>|| Session Expire: "+expires+"<br>---------------------------------<br>M W F BIZ</p>"
}
 }



function upelite(e){
  var res =e.result;
  if(res =="Insertion successful!"){
    document.getElementById('elpasinfo').style.display="block";
    var elitecon = document.getElementById('elpasscreated').innerText;
    var mottoad = $('#hkhdoc').val();
    var mottocons = mottoad.split('{biz}');
    var rn1 = Math.random().toString(26).substring(2, 5) + Math.random().toString(26).substring(2, 5);
    var rn2 = Math.random().toString(26).substring(2, 7) + Math.random().toString(26).substring(2, 7);
    var newlk = "https://imi.mwfbiz.com?m="+window.btoa(rn1)+"-"+window.btoa(elitecon)+"-"+window.btoa(rn2)+"&elite=true";
  document.getElementById('svbtnelt').style.display = "block";
  document.getElementById("AppShare").innerHTML = "<a title='Send Mail' class='ApShare mailshare' target='_parent' type='button' href='mailto:?body=" + String(mottocons[1]) + " - has a MONOLOGUE at https://imi.mwfbiz.com. " +
   elitecon + "'><i class='fa fa-envelope' style='font-size:28px;color:#cc6600;'></i></a><a title='Copy Link' class='ApShare cplink' target='_parent' type='button' onclick='copyellink(this)'>⛓</a><input id='elitlink' value='"+newlk+"' style='display:none;'>";
   document.getElementById('crtelite').disabled = false;
  }
}
function copyellink(label){
  var newlk = document.getElementById('elitlink').value;
  var textA = document.createElement("input");
  textA.value = newlk;
  textA.select();
  textA.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(textA.value);
  $('#lkcopied').slideDown('fast');
  setTimeout(function(){$('#lkcopied').slideUp('fast');},2000);
}
function downloadInnerHtml(filename, elId, mimeType) {
  var elHtml = document.getElementById(elId).innerText;
  var link = document.createElement('a');
  mimeType = mimeType || 'text/plain';

  link.setAttribute('download', filename);
  link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(elHtml));
  link.click(); 
} 

var fileName =  'MyElite.txt';
function downloadpass(label){
  downloadInnerHtml(fileName, 'elpasscreated','text/plain');
}

$('#motoinfoicon').click(function(){
  $('#mottoconhold').toggle();
  $('#motoinfo').toggle('fast');
  });

  $('#update').click(function(){
    document.getElementById('upd').style.display='block';
    document.getElementById('id03').style.display='none';
    document.getElementById('update').style.display='none';
    document.getElementById('imifrmedit').style.display='block';
    $('#adminmoto').fadeOut('slow');
    $('#crelitepass').fadeOut('slow');
    });

    $('#imifrmedit').click(function(){
      document.getElementById('upd').style.display='none';
      document.getElementById('id03').style.display='block';
      document.getElementById('update').style.display='block';
      document.getElementById('imifrmedit').style.display='none';
      $('#adminmoto').slideDown('slow');
      $('#crelitepass').slideDown('slow');
      });
