function clearFormFields(a,b){a.find("input[type=text], input[type=password], input[type=hidden], input[type=number], input[type=email], textarea").val(""),"undefined"!=typeof b&&null!==b||(b=!1),b&&a.find(".alert-error, .alert-success").text("").hide()}function clearFormErrors(a){a.find(".alert-error, .alert-success").text("").hide()}function roundNum(a,b){var c=Math.round(a*Math.pow(10,b))/Math.pow(10,b);return c}function roundPercentInt(a){var b=parseInt(roundNum(a,0),10);return 0==b&&a>0?1:100==b&&a<100?99:b}function showShortDate(a,b){if("undefined"!=typeof b&&null!==b||(b=!1),b){var c=60*a.getTimezoneOffset()*1e3;a=new Date(a.getTime()+c)}return("0"+a.getDate()).slice(-2)+"."+("0"+(a.getMonth()+1)).slice(-2)+"."+a.getFullYear()}function showFullDate(a,b){if("undefined"!=typeof b&&null!==b||(b=!1),b){var c=60*a.getTimezoneOffset()*1e3;a=new Date(a.getTime()+c)}return("0"+a.getDate()).slice(-2)+"."+("0"+(a.getMonth()+1)).slice(-2)+"."+("000"+a.getFullYear()).slice(-4)+" "+("0"+a.getHours()).slice(-2)+":"+("0"+a.getMinutes()).slice(-2)+":"+("0"+a.getSeconds()).slice(-2)}function showCommentDate(a,b){if("undefined"!=typeof b&&null!==b||(b=!1),b){var c=60*a.getTimezoneOffset()*1e3;a=new Date(a.getTime()+c)}return("0"+a.getDate()).slice(-2)+"."+("0"+(a.getMonth()+1)).slice(-2)+"."+("0"+a.getFullYear()).slice(-2)+"  "+$.localize_report("at","~/wwwroot/js/common/functions.js")+" "+("0"+a.getHours()).slice(-2)+":"+("0"+a.getMinutes()).slice(-2)}function showDate(a,b){if("undefined"!=typeof b&&null!==b||(b=!1),b){var c=60*a.getTimezoneOffset()*1e3;a=new Date(a.getTime()+c)}return("0"+a.getDate()).slice(-2)+" "+$monthNames[a.getMonth()]+" "+a.getFullYear()}function showDateTime(a,b,c){if("undefined"!=typeof b&&null!==b||(b=!1),b){var d=60*a.getTimezoneOffset()*1e3;a=new Date(a.getTime()+d)}return"undefined"!=typeof c&&null!==c||(c=!0),("0"+a.getDate()).slice(-2)+" "+$monthNames[a.getMonth()]+" "+a.getFullYear()+(c?"<br/>":" ")+("0"+a.getHours()).slice(-2)+":"+("0"+a.getMinutes()).slice(-2)}function showTimeLeft(a){var b="",c=Math.floor(a/864e5);a-=864e5*c;var d=Math.floor(a/36e5);a-=36e5*d;var e=Math.floor(a/6e4);a-=6e4*e;var f=Math.floor(a/1e3);return a-=1e3*f,c>0?b+=" "+c+" "+$.localize_report("d","~/wwwroot/js/common/functions.js")+".":(d>0&&(b+=" "+d+" "+$.localize_report("h","~/wwwroot/js/common/functions.js")+"."),e>0&&(b+=" "+e+" "+$.localize_report("min","~/wwwroot/js/common/functions.js")+"."),f>0&&(b+=" "+f+" "+$.localize_report("sec","~/wwwroot/js/common/functions.js")+".")),0==b.replace(" ","").length&&(b+=" 1 "+$.localize_report("sec","~/wwwroot/js/common/functions.js")+"."),b}function showTime(a){var b=Math.floor(a/864e5);a-=864e5*b;var c=Math.floor(a/36e5);a-=36e5*c;var d=Math.floor(a/6e4);a-=6e4*d;var e=Math.floor(a/1e3);return("0"+c).slice(-2)+":"+("0"+d).slice(-2)+":"+("0"+e).slice(-2)}function showDayTimeLeft(a){var b=Math.floor(a/864e5);a-=864e5*b;var c=Math.floor(a/36e5);a-=36e5*c;var d=Math.floor(a/6e4);return a-=6e4*d,("00"+b).slice(-3)+$.localize_report("d","~/wwwroot/js/common/functions.js")+" "+("0"+c).slice(-2)+$.localize_report("h","~/wwwroot/js/common/functions.js")+" "+("0"+d).slice(-2)+$.localize_report("m","~/wwwroot/js/common/functions.js")}function showShortTime(a){var b=Math.floor(a/864e5);a-=864e5*b;var c=Math.floor(a/36e5);a-=36e5*c;var d=Math.floor(a/6e4);a-=6e4*d;var e=Math.floor(a/1e3);return("0"+d).slice(-2)+":"+("0"+e).slice(-2)}function isValidDate(a){return"[object Date]"===Object.prototype.toString.call(a)&&(!isNaN(a.getTime())||void console.log("date is not valid"))}function byField(a){var b=function(b,c){return b[a]>c[a]?1:-1};return b}function validateTextLongInRange(a){var b=parseInt(a,10);return!isNaN(b)&&b>=0&&b<=Number.MAX_VALUE}function validateTextIntInRange(a){var b=parseInt(a,10);return!isNaN(b)&&b>=0&&b<=2147483647}function validateEmail(a){if(null==a)return!1;var b=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))(\.?)@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/gi;return b.test(a)}function validateDate(a){var b=/^(((0[1-9]|[12]\d|3[01])\.(0[13578]|1[02])\.((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\.(0[13456789]|1[012])\.((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\.02\.((19|[2-9]\d)\d{2}))|(29\.02\.((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;return b.test(a)}function validateName(a){var b=/^[^;><=\+&%#@\[\]\{\}~`\u00A9\u00AE*\\]+$/gi;return a.match(b)}function clearFileName(a){var b=/[;><=\+&%#@\[\]\{\}~`\u00A9\u00AE*\\]/gi;return a.replace(b,"_")}function quoteAttr(a,b){return b=b?"&#13;":"\n",(""+a).replace(/&/g,"&amp;").replace(/'/g,"&apos;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r\n/g,b).replace(/[\r\n]/g,b)}function getNumEnding(a,b){var c="";if(a=Math.abs(a)%100,a>=11&&a<=19)c=b[2];else{var d=a%10;switch(d){case 1:c=b[0];break;case 2:case 3:case 4:c=b[1];break;default:c=b[2]}}return c}function getUrlVars(a){var b,c=[];if(null==a&&(a=window.location.href),a.indexOf("?")==-1)return c;for(var d=a.slice(a.indexOf("?")+1).split("&"),e=0;e<d.length;e++){b=d[e].split("=");var f=decodeURIComponent(b[0]),g=decodeURIComponent(b[1]);c.push(f),c[f]=g}return c}function getUrlPath(){return window.location.pathname}function getUrlBase(){return location.protocol.split(":")[0]+"://"+location.host}function pad(a,b,c){return c=c||"0",a+="",a.length>=b?a:new Array(b-a.length+1).join(c)+a}function updatePagingUrl(a,b,c){var d=(window.history.location||window.location,getUrlBase()),e=getUrlPath(),f=getUrlVars(),g=d+e;if(null!=f.page?f.page=a:(f.push("page"),f.page=a),b)null!=f.showAll?f.showAll=b:(f.push("showAll"),f.showAll=b);else{var h=f.indexOf("showAll");h!=-1&&f.splice(h,1)}c&&c(f),f.length>0&&(g+="?",$.each(f,function(a,b){g+=b+"="+f[b]+"&"}),g=g.substring(0,g.length-1)),window.history.pushState(null,"",g)}function endsWith(a,b){return a.indexOf(b,a.length-b.length)!==-1}function htmlEscape(a){return a.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function htmlUnescape(a){return a.replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")}function updateQueryStringParameter(a,b,c){var d=new RegExp("([?&])"+b+"=.*?(&|$)","i"),e=a.indexOf("?")!==-1?"&":"?";return a.match(d)?a.replace(d,"$1"+b+"="+c+"$2"):a+e+b+"="+c}function runOnce(a){var b=0;return function(){1==++b&&a.apply(this,arguments)}}function checkOcrLanguagesSelected(a,b){var c=$("#dialog-file-upload .alert-error, #dialog-file-upload .alert-info-error, #dialog-batch-upload .alert-error");if(0!=$(".file-upload-languages").length&&("undefined"!=typeof a&&null!==a||(a=$.localize_report("Can't start to check, because no ocr languages has been selected.","~/wwwroot/js/common/functions.js")),"undefined"!=typeof b&&null!==b||(b=$.localize_report("Can't start to check, because more then 3 ocr languages has been selected.","~/wwwroot/js/common/functions.js")),!c.is(":visible")||c.text()==a||c.text()==b||!$(".ap-dialog-file-upload .ui-dialog-buttonpane button:eq(1)").hasClass("ui-state-disabled"))){if($(".file-upload-languages").is(":hidden"))return c.text("").hide(),void $(".ap-dialog-file-upload .ui-dialog-buttonpane button:eq(1)").removeAttr("disabled").removeClass("ui-state-disabled");var d=$(".file-upload-languages").find("input[type='checkbox']"),e=d.filter(":checked").length>0,f=d.filter(":checked").length<4;if(e&&f){if(!c.is(":visible")||c.text()!=a&&c.text()!=b||c.text("").hide(),!$(".ap-dialog-file-upload .ui-dialog-buttonpane button:eq(1)").hasClass("ui-state-disabled"))return;$(".ap-dialog-file-upload .ui-dialog-buttonpane button:eq(1)").removeAttr("disabled").removeClass("ui-state-disabled")}else{var g=e?b:a;if($(".ap-dialog-file-upload .ui-dialog-buttonpane button:eq(1)").hasClass("ui-state-disabled"))return;$(".ap-dialog-file-upload .ui-dialog-buttonpane button:eq(1)").attr({disabled:"disabled"}).addClass("ui-state-disabled"),c.is(":visible")||c.text(g).show()}}}function checkCollectionOcrLanguagesSelected(){var a=$.localize_report("Unable to start the upload, because no ocr languages has been selected.","~/wwwroot/js/common/functions.js"),b=$.localize_report("Unable to start the upload, because more then 3 ocr languages has been selected.","~/wwwroot/js/common/functions.js");checkOcrLanguagesSelected(a,b)}function setManualTooltip(){$(".general a.manual").qtip({content:{text:function(a){return $(this).attr("title")}},style:{classes:"qtip-ux",tip:!0},position:{my:"center left",at:"center right",adjust:{y:0,x:0}},show:{event:"mouseover"},hide:{event:"mouseout"}})}function setYMCounter(a,b,c){"function"==typeof ym&&("undefined"!=typeof c&&null!==c||(c="reachGoal"),"undefined"!=typeof a&&null!=a&&ym(a,c,b))}function setGACounter(a,b,c,d,e){"function"==typeof ga&&"undefined"!=typeof a&&null!=a&&ga(a+".send","event",b,c,d,e)}function setTargetCounters(a,b){setYMDefaultCounter(a,b)}function setYMDefaultCounter(a,b){"undefined"!=typeof $yaCounter&&setYMCounter($yaCounter,a,b)}function setGADefaultCounter(a,b,c,d){"function"==typeof ga&&ga("send","event",a,b,c,d)}function setYMSummaryReportCounter(a,b){"undefined"!=typeof $yaSummaryReportCounter&&setYMCounter($yaSummaryReportCounter,a,b)}function setGASummaryReportCounter(a,b,c,d){"undefined"!=typeof $gaSummaryReportCounter&&setGACounter($gaSummaryReportCounter,a,b,c,d)}function setYMFullReportCounter(a,b){"undefined"!=typeof $yaFullReportCounter&&setYMCounter($yaFullReportCounter,a,b)}function setGAFullReportCounter(a,b,c,d){"undefined"!=typeof $gaFullReportCounter&&setGACounter($gaFullReportCounter,a,b,c,d)}function setYMDocumentTitleCounter(a,b){"undefined"!=typeof $yaDocumentTitleCounter&&setYMCounter($yaDocumentTitleCounter,a,b)}function setGADocumentTitleCounter(a,b,c,d){"undefined"!=typeof $gaDocumentTitleCounter&&setGACounter($gaDocumentTitleCounter,a,b,c,d)}function copyToClipboard(a){var b=$("<input>");$("body").append(b),b.val(a).select(),document.execCommand("copy"),b.remove()}function encodeURIComponentWithUnescaped(a){return encodeURIComponent(a).replace(/[!'()*]/g,function(a){return"%"+a.charCodeAt(0).toString(16)})}function parseXhrException(a){var b=a.responseText;try{var c=JSON.parse(b);return c.title||null}catch(d){}return null}function roundWithDelimiter(a){var b=roundNum(a,2).toString();return"en-US"!=$currentLang?b.replace(".",","):b}jQuery.fn.onlyDigits=function(){function a(a){return!a.which&&(a.charCode||0===a.charCode?a.charCode:a.keyCode)&&(a.which=a.charCode||a.keyCode),a.which}var b;$("<span></span>").insertAfter(this);var c=$(this).next("span").hide();return $(this).each(function(){$(this).keydown(function(c){return b=a(c),86==b&&c.ctrlKey||224==b&&c.metaKey||8==b||9==b||46==b||b>=37&&b<=40&&32!==b||b>=48&&b<=57||b>=96&&b<=105}).keyup(function(a){var b=this.value.replace(/\s+/,"-");isNaN(b)?$(this).val(c.text()):c.empty().append(b)})})},function(a){a.each(["show","hide"],function(b,c){var d=a.fn[c];a.fn[c]=function(){return this.trigger(c),d.apply(this,arguments)}})}(jQuery),jQuery.fn.loader=function(a){function b(){var a=$(window).height(),b=$(window).scrollTop(),c=s.parent().offset().top,d=s.parent().outerHeight(),e=s.parent().offset().left,f=s.parent().outerWidth(),g=c-b;g=g<0?0:g;var h=b+a-(d+c);h=h<0?0:h;var i=e;s.css({position:"fixed",top:g+"px",bottom:h+"px",left:i+"px",right:"auto",width:f+"px"})}function c(){h.fixed&&b();var a="<div class='loader-image' style='width: "+j+"px; height: "+k+"px; background-image: url("+n+")'></div>";s.prepend(a),FPS=Math.round(100/i),r=1/FPS,o=setTimeout(e,r/1e3)}function d(){clearTimeout(o),o=0,s.find(".loader-image").remove()}function e(){q+=m,p+=1,p>=l&&(q=0,p=0),s.find(".loader-image").css("background-position",-q+"px 0px"),o=setTimeout(e,1e3*r)}function f(a,b){clearTimeout(o),o=0,genImage=new Image,genImage.onload=function(){o=setTimeout(b,0)},genImage.onerror=new Function("alert('Could not load the image')"),genImage.src=a}var g={color:"blue",fixed:!1,offsetX:0},h=$.extend({},g,a),i=4,j=200,k=200,l=20,m=200,n="/img/icons/loader-sprites-"+h.color+".png",o=!1,p=0,q=0,r=0,s=$(this);s.on("show",function(){new f(n,c)}),s.on("hide",function(){d()}),$(window).scroll(function(){h.fixed&&b()}),$(window).resize(function(){h.fixed&&b()})};var $lockExternalUrl=!1;jQuery.fn.externalUrl=function(){this.each(function(){var a=$(this);a.click(function(b){b.preventDefault(),b.stopPropagation();var c=$("#dialog-external-url"),d=c.find(".loading"),e=c.find("#dialog-external-url .alert-error");e.hide();var f=a.attr("data-hash");c.dialog({autoOpen:!1,resizable:!1,modal:!0,draggable:!1,autoresize:!0,dialogClass:"ap-dialog-confirm ap-dialog-external-url",buttons:[{text:$.localize_report("Follow this link","~/wwwroot/js/common/plugins.js"),click:function(){e.text("").hide(),window.open($reportApi+"go?to="+f+"&next=do","_blank"),c.dialog("close")}},{text:$.localize_report("Cancel","~/wwwroot/js/common/plugins.js"),click:function(){$lockExternalUrl||$(this).dialog("close")}}],open:function(){$(".ap-dialog-external-url .ui-dialog-buttonpane, .ap-dialog-external-url .ui-dialog-titlebar").hide(),$(".ap-dialog-external-url .ui-dialog-buttonpane button:eq(0)").attr({disabled:"disabled"}).addClass("ui-state-disabled"),jQuery(".ui-widget-overlay").bind("click",function(){$lockExternalUrl||c.dialog("close")})},beforeClose:function(){if($lockExternalUrl)return!1},close:function(){e.text("").hide(),d.hide()},width:700,minHeight:422,closeText:$.localize_report("Close","~/wwwroot/js/common/plugins.js")}),$(".external-url").hide(),e.text("").hide(),d.show(),c.dialog("open"),$.ajax({type:"GET",url:$reportApi+"go?to="+f,dataType:"json",timeout:6e4,success:function(a,b){$lockExternalUrl=!1,d.hide(),$(".ap-dialog-external-url .ui-dialog-buttonpane button:eq(0)").removeAttr("disabled").removeClass("ui-state-disabled"),$(".ap-dialog-external-url .ui-dialog-buttonpane button:eq(0)").css("float","right"),$(".ap-dialog-external-url .ui-dialog-buttonpane button:eq(1)").css("float","left"),$(".ap-dialog-external-url .ui-dialog-buttonpane, .ap-dialog-external-url .ui-dialog-titlebar").show(),a.success?(c.find("p:eq(0) > strong").text(a.result.Host),c.find("p:eq(0) > a").text(decodeURI(a.result.Url)).attr({href:$reportApi+"go?to="+a.result.Hash+"&next=do"}),$(".external-url").show(),c.dialog("option","position",{my:"center",at:"center",of:window})):e.text($.localize_report("Failed to get link.","~/wwwroot/js/common/plugins.js")).show()},error:function(a,b,d){if(401==a.status)window.location.href="/";else{$lockExternalUrl=!1,c.dialog("close");var e=new DialogHelper;e.modalText($.localize_report("Failed to get link.","~/wwwroot/js/common/plugins.js"))}}})})})},jQuery.fn.collapsePanel=function(a){a=a||{};var b=$.extend({},a);this.each(function(){var a=$(this);$(document).ready(function(){a.find(".collapse-panel-header:first i.roll").click(function(c){c.preventDefault(),a.closest(".collapse-panel").toggleClass("open"),b.callback&&"function"==typeof b.callback&&b.callback(a.closest(".collapse-panel").hasClass("open"))})})})},jQuery.fn.stickyMenu=function(a){var b={stickyY:256,stickyYFunc:null,currentArea:null},c=$.extend({},b,a);this.each(function(){function a(){if((!c.currentArea||$(c.currentArea).is(":visible"))&&0!=b.length&&!b.hasClass("none")){var a=c.stickyY;c.stickyYFunc&&(a=c.stickyYFunc());var d=$(this).scrollLeft();d>0?b.css({left:-d,right:"auto"}):b.css({left:0,right:0}),$(this).scrollTop()>a?b.is(":visible")||b.show():b.is(":visible")&&b.hide()}}var b=$(this);$(window).scroll(function(){a()}),$(window).resize(function(){a()}),$(document).ready(function(){a()}),b.closest(".ui-tabs-panel").length>0&&b.closest(".ui-tabs-panel").on("show",function(b){b.target===this&&a()}),b.on("show",function(){var a=$("#menu-system"),b=a.closest(".menu").find("nav");b.is(":visible")&&a.trigger("click")}),b.find("#sticky-up").click(function(a){a.preventDefault(),$("body,html").animate({scrollTop:0},200,function(){})})})},jQuery.fn.moreMenu=function(){this.each(function(){var a=$(this);a.on("click",function(a){a.preventDefault(),a.stopPropagation();var b=$(this);b.next().toggle(),$(document).one("click",function c(a){0===b.next().has(a.target).length?b.next().hide():$(document).one("click",c)})})})},jQuery.fn.reportMenu=function(){this.each(function(){function a(c){0===b.next().has(c.target).length?b.next().hide():$(document).one("click",a)}var b=$(this);b.on("click",function(b){b.preventDefault(),b.stopPropagation();var c=$(this);c.next().toggle(),$(document).one("click",a),c.next().find(".close").on("click",function(a){a.preventDefault(),$(this).closest("nav").hide()})}),b.on("hide",function(c){b.next().hide(),$(document).unbind("click",a)})})},function(a){function b(a){var b=parseInt(a.find(".current").text(),10),c=parseInt(a.find(".total").text(),10);1===b?a.find(".first,.previos").attr("disabled","disabled"):a.find(".first,.previos").removeAttr("disabled"),b>=c?a.find(".next,.last").attr("disabled","disabled"):a.find(".next,.last").removeAttr("disabled")}a(".paging").length>0&&a(".paging").each(function(){var c=a(this);b(c),c.find(".current").on("change",function(){b(a(this).closest(".paging"))}),c.find("a").on("click",function(b){a(this).attr("disabled")&&b.preventDefault()})})}(jQuery),jQuery.fn.symbolsCountdown=function(a){var b=$(this),c={max:500},d=$.extend({},c,a),e=$("#"+b.attr("data-counter")),f=parseInt($(this).attr("maxlength"));b.keyup(function(){var a=b.val().length;if(a>=d.max){e.text("0");var c=b.val(),g=c.substr(0,f);b.val(g)}else{var h=d.max-a;e.text(h)}})},Array.prototype.remove=function(){for(var a,b,c=arguments,d=c.length;d&&this.length;)for(a=c[--d];(b=this.indexOf(a))!==-1;)this.splice(b,1);return this},jQuery.fn.confirmIgnoredSources=function(a){this.each(function(){var b=$(this),c=function(){window.open(b.attr("href"),"_blank")};"function"==typeof a&&(c=a),b.click(function(a){if(a.preventDefault(),a.stopPropagation(),!$(this).data("open")){if($hasSourceIgnored){var d=$.localize_report("Attention! You have disabled some sources without exclude reason and comment.","~/wwwroot/js/common/plugins.js"),e=new DialogHelper;return void e.confirmHtml($.localize_report("Go to report printing","~/wwwroot/js/common/plugins.js"),d,function(){if($(".main-inner > .report-formatting").length>0)return setYMFullReportCounter("print_export_report_edit_sources"),void setGAFullReportCounter("print_export_report","edit_sources");var a="";null!=$userId&&(a+="&userId="+$userId),null!=$correctionNr&&(a+="&c="+$correctionNr),null!==$reportId&&(a+="&v="+$reportId),"undefined"!=typeof $validationHash&&$validationHash&&(a+="&validationHash="+$validationHash),a.length>0&&(a="?"+a.substring(1,a.length)),window.location.href="/report"+("undefined"!=typeof $reportViewMode&&"ApiCorp"==$reportViewMode?"/byLink/apiCorp":"")+"/full/"+$documentId+a},$.localize_report("To report printing","~/wwwroot/js/common/plugins.js"),$.localize_report("Edit sources","~/wwwroot/js/common/plugins.js"),null,function(){$(".main-inner > .report-formatting").length>0&&(setYMFullReportCounter("print_export_report_to_print_export"),setGAFullReportCounter("print_export_report","to_print_export")),c.call(b)})}c()}})})},function(a){a(".ap-desktop-view").each(function(){var b=a(this);b.find("a").click(function(c){c.preventDefault(),a('head meta[name="viewport"]').attr("content","width=1246px"),b.remove()})})}(jQuery);var $monthNames=[$.localize_report("Jan","~/wwwroot/js/common/functions.js"),$.localize_report("Feb","~/wwwroot/js/common/functions.js"),$.localize_report("Mar","~/wwwroot/js/common/functions.js"),$.localize_report("Apr","~/wwwroot/js/common/functions.js"),$.localize_report("May","~/wwwroot/js/common/functions.js"),$.localize_report("Jun","~/wwwroot/js/common/functions.js"),$.localize_report("Jul","~/wwwroot/js/common/functions.js"),$.localize_report("Aug","~/wwwroot/js/common/functions.js"),$.localize_report("Sep","~/wwwroot/js/common/functions.js"),$.localize_report("Oct","~/wwwroot/js/common/functions.js"),$.localize_report("Nov","~/wwwroot/js/common/functions.js"),$.localize_report("Dec","~/wwwroot/js/common/functions.js")],queryString=function(){for(var a={},b=window.location.search.substring(1),c=b.split("&"),d=0;d<c.length;d++){var e=c[d].split("=");if("undefined"==typeof a[e[0]])a[e[0]]=e[1];else if("string"==typeof a[e[0]]){var f=[a[e[0]],e[1]];a[e[0]]=f}else a[e[0]].push(e[1])}return a}(),getObjectSize=function(a){var b,c=0;for(b in a)a.hasOwnProperty(b)&&c++;return c};$.widget("ui.dialog",$.extend({},$.ui.dialog.prototype,{_title:function(a){this.options.title?a.html(this.options.title):a.html("&#160;")}}));var DialogHelper=function(a){this.$dialog=$("#dialog-template")};DialogHelper.prototype.modalText=function(a,b,c){"undefined"!=typeof b&&null!==b||(b=$.localize_report("Close","~/wwwroot/js/common/dialog.js")),this.$dialog.dialog({resizable:!1,autoOpen:!1,dialogClass:"ap-dialog-alert",modal:!0,buttons:[{text:b,click:function(){$(this).dialog("close")}}],open:function(){var a=$(this);jQuery(".ui-widget-overlay").bind("click",function(){a.dialog("close")})},close:function(){null!=c&&c()},title:"",width:"auto",minWidth:300,closeText:$.localize_report("Close","~/wwwroot/js/common/dialog.js")});var d=$("<p />").attr("style","").html(a);return this.$dialog.find(".alert-error").text("").hide(),this.$dialog.find(".alert-success").text("").hide(),this.$dialog.html(d),this.$dialog.dialog("open"),!1},DialogHelper.prototype.modalHtml=function(a,b,c){return"undefined"!=typeof b&&null!==b||(b=$.localize_report("Close","~/wwwroot/js/common/dialog.js")),this.$dialog.dialog({resizable:!1,autoOpen:!1,dialogClass:"ap-dialog-alert",modal:!0,buttons:[{text:b,click:function(){$(this).dialog("close")}}],open:function(){var a=$(this);jQuery(".ui-widget-overlay").bind("click",function(){a.dialog("close")})},close:function(){null!=c&&c()},title:"",width:"auto",minWidth:300,closeText:$.localize_report("Close","~/wwwroot/js/common/dialog.js")}),this.$dialog.find(".alert-error").text("").hide(),this.$dialog.find(".alert-success").text("").hide(),this.$dialog.html(a),this.$dialog.dialog("open"),!1},DialogHelper.prototype.confirmText=function(a,b,c,d,e,f,g){"undefined"!=typeof d&&null!==d||(d=$.localize_report("Cancel","~/wwwroot/js/common/dialog.js")),"undefined"!=typeof e&&null!==e||(e=$.localize_report("Confirm","~/wwwroot/js/common/dialog.js")),this.$dialog.dialog({autoOpen:!1,resizable:!1,modal:!0,draggable:!1,dialogClass:"ap-dialog-confirm",buttons:[{text:d,click:function(){null!=g&&g(),$(this).dialog("close")}},{text:e,click:function(){c(),$(this).dialog("close")}}],open:function(){var a=$(this);jQuery(".ui-widget-overlay").bind("click",function(){a.dialog("close")})},close:function(){null!=f&&f()},title:a,width:800,closeText:$.localize_report("Close","~/wwwroot/js/common/dialog.js")});var h=$("<p />").attr("style","").html(b);return this.$dialog.find(".alert-error").text("").hide(),this.$dialog.find(".alert-success").text("").hide(),this.$dialog.html(h),this.$dialog.dialog("open"),!1},DialogHelper.prototype.confirmHtml=function(a,b,c,d,e,f,g){return"undefined"!=typeof d&&null!==d||(d=$.localize_report("Cancel","~/wwwroot/js/common/dialog.js")),"undefined"!=typeof e&&null!==e||(e=$.localize_report("Confirm","~/wwwroot/js/common/dialog.js")),this.$dialog.dialog({autoOpen:!1,resizable:!1,modal:!0,draggable:!1,dialogClass:"ap-dialog-confirm",buttons:[{text:d,click:function(){null!=g&&g(),$(this).dialog("close")}},{text:e,click:function(){c(),$(this).dialog("close")}}],open:function(){var a=$(this);jQuery(".ui-widget-overlay").bind("click",function(){a.dialog("close")})},close:function(){null!=f&&f()},title:a,width:800,closeText:$.localize_report("Close","~/wwwroot/js/common/dialog.js")}),this.$dialog.find(".alert-error").text("").hide(),this.$dialog.find(".alert-success").text("").hide(),this.$dialog.html(b),this.$dialog.dialog("open"),!1},DialogHelper.prototype.confirmHtmlMultipleButtons=function(a,b,c,d,e){"undefined"!=typeof d&&null!==d||(d=$.localize_report("Cancel","~/wwwroot/js/common/dialog.js"));for(var f=[{text:d,click:function(){$(this).dialog("close")}}],g=0;g<c.length;g++)f.push({text:c[g].text,click:c[g].callback,"class":"multiple-button"});return this.$dialog.dialog({autoOpen:!1,resizable:!1,modal:!0,draggable:!1,dialogClass:"ap-dialog-confirm",buttons:f,open:function(){var a=$(this);jQuery(".ui-widget-overlay").bind("click",function(){a.dialog("close")})},close:function(){null!=e&&e()},title:a,width:800,closeText:$.localize_report("Close","~/wwwroot/js/common/dialog.js")}),this.$dialog.find(".alert-error").text("").hide(),this.$dialog.find(".alert-success").text("").hide(),this.$dialog.html(b),this.$dialog.dialog("open"),!1},DialogHelper.prototype.close=function(a,b,c,d,e){return this.$dialog.dialog("close"),!1},DialogHelper.prototype.alertShow=function(a){return this.$dialog.find(".alert-error").text(a).show(),this.$dialog.find(".alert-success").text("").hide(),!1},DialogHelper.prototype.alertHide=function(a){return this.$dialog.find(".alert-error").text("").hide(),this.$dialog.find(".alert-success").text("").hide(),!1},DialogHelper.prototype.successShow=function(a){return this.$dialog.find(".alert-success").text(a).show(),this.$dialog.find(".alert-error").text("").hide(),!1},DialogHelper.prototype.successHide=function(a){return this.$dialog.find(".alert-success").text("").hide(),this.$dialog.find(".alert-error").text("").hide(),!1},jQuery.fn.filtersPanel=function(a,b,c){function d(){$(a).each(function(){var a=this;if(null==a.selector||null==a.urlParam)return!1;var b=o.find(a.selector),c={selector:a.selector,urlParam:a.urlParam,getFunc:function(){return null}};if("undefined"!=typeof a.defaultValue?c.defaultValue=a.defaultValue:c.defaultValue="",a.getFunc&&"function"==typeof a.getFunc&&(c.getFunc=a.getFunc),b.length>0){var d=g(b);if(null==d)return!1;if(c.type=d,a.setup&&"function"==typeof a.setup)a.setup.call(b);else if("date"==d)if(b.mask("00.00.0000",{clearIfNotMatch:!0}),b.data("period")){if("from"==b.data("period")){var e=b.closest(".filter-tip").find("input[data-period='to']");b.datepicker({minDate:"",dateFormat:"dd.mm.yy",onSelect:function(a){var c=$.datepicker.parseDate("dd.mm.yy",a);if(isValidDate(c)){var d=$.datepicker.parseDate("dd.mm.yy",e.val());isValidDate(d)&&c.valueOf()>d.valueOf()&&e.val(a)}b.change()}})}else if("to"==b.data("period")){var f=b.closest(".filter-tip").find("input[data-period='from']");b.datepicker({dateFormat:"dd.mm.yy",minDate:"",onSelect:function(a){var c=$.datepicker.parseDate("dd.mm.yy",a);if(isValidDate(c)){var d=$.datepicker.parseDate("dd.mm.yy",f.val());isValidDate(d)&&d.valueOf()>c.valueOf()&&f.val(a)}b.change()}})}}else b.datepicker({dateFormat:"dd.mm.yy",minDate:""})}m.push(c)}),$(m).each(function(){h(this,!0)}),j()}function e(){function a(a){if("keyup"!=a.type||13==a.keyCode){a.preventDefault(),a.stopPropagation();var c=$(this).closest(".filter"),d=$.grep(m,function(a){return c.find(a.selector).length>0}),e=!1;$(d).each(function(){var a=h(this);e=e||a}),c.find(".hasDatepicker").datepicker("hide"),c.prev("span").toggleClass("active-filter",e).removeClass("active"),j(),null!=b&&b()}}l.scroll&&($(l.scrollingPanel).on("show",function(a){if($(this).is(a.target)){var b=$(this).find(l.scrollingPanelItem);if(0==b.find(l.tableHeader).length){var c=$(l.area).find(l.tableHeader),d=$("<div></div>").attr("class",c.attr("class"));c.after(d);var e=o.detach();b.append(e),$(l.tableHeader).find(".hasDatepicker").datepicker("hide")}}}),$(l.scrollingPanel).on("hide",function(a){if($(this).is(a.target)){var b=$(this).find(l.tableHeader),c=$(l.area).find(l.tableHeader).not(b);if(0==c.children().length){var d=o.detach();c.replaceWith(d),$(l.tableHeader).find(".hasDatepicker").datepicker("hide")}}})),o.find(".filter").children("i").click(function(a){a.preventDefault(),a.stopPropagation();var b=$(this).closest("th").children("span");b.hasClass("active")?($(this).closest(".filter").find(".hasDatepicker").datepicker("hide"),b.removeClass("active"),$(document).unbind("click",f)):($(this).closest("tr").find(".hasDatepicker").datepicker("hide"),b.addClass("active"),$(this).closest("tr").find("span.active").not(b).removeClass("active"),$(this).closest(".filter").find(".filter-word > input[type='text']").focus(),$(this).closest(".filter").trigger("updateTipVisability"),$(document).one("click",f))}),o.find(".filter").find("button.btn-submit").click(a),o.find(".filter").find(".filter-tip").keyup(a),o.find(".filter").find("button.btn-cancel").click(function(a){a.preventDefault(),a.stopPropagation();var c=$(this).closest(".filter"),d=$.grep(m,function(a){return c.find(a.selector).length>0}),e=!1;$(d).each(function(){i(this);var a=h(this);e=e||a}),c.find(".hasDatepicker").datepicker("hide"),c.prev("span").toggleClass("active-filter",e).removeClass("active"),j(),null!=b&&b()}),o.find(".filter-cancel").click(function(a){a.preventDefault(),n.cleanFilters(),null!=b&&b()}),o.find(".filter").on("updateTipVisability",function(a){var b=$(this).find(".filter-tip"),c=$(this).children("i"),d=$(this).closest("thead"),e=c.offset().left+b.outerWidth()-12,f=d.offset().left+d.outerWidth();b.toggleClass("filter-tip-right",e>=f)})}function f(a){0!==o.find(".filter").has(a.target).length||$(a.target).closest("[class^='ui-datepicker']").length>0&&o.find("span.active").closest("th").find(".hasDatepicker").length>0?$(document).one("click",f):(o.find(".filter").find(".hasDatepicker").datepicker("hide"),o.find(".filter").closest("tr").find("span.active").removeClass("active"))}function g(a){var b=a.closest(".filter-tip").find("div[class^='filter-']");switch(b.attr("class").replace("filter-","")){case"word":return"word";case"dates":return"date";case"select":return"radio";case"select-multiple":return"checkbox";case"select2":return"select2"}return null}function h(a,b){var c=o.find(a.selector);if(a.type&&c.length>0)switch(a.type){case"word":case"date":a.value=encodeURIComponent($.trim(c.val()));break;case"radio":a.value=encodeURIComponent(c.filter(":checked").val());break;case"checkbox":var d=new Array;c.filter("[value]").length>0?c.filter(":checked").each(function(){d.push(encodeURIComponent($(this).val()))}):d.push(c.is(":checked")),a.value=d;break;case"select2":var d=new Array;d=a.getFunc?a.getFunc.call(c):c.select2("data"),a.value=d}else a.value=a.defaultValue;return Array.isArray(a.value)?Array.isArray(a.defaultValue)?a.defaultValue.length!=a.value.length?(b&&c.closest(".filter").prev("span").addClass("active-filter"),!0):0!=a.value.length&&!a.value.every(function(b){return $(a.defaultValue).has(b)}):(""!=a.defaultValue||0!=a.value.length)&&(1!=a.value.length||!(a.value[0]==a.defaultValue)):a.value!=a.defaultValue&&(b&&c.closest(".filter").prev("span").addClass("active-filter"),!0)}function i(a){var b=a.defaultValue,c=o.find(a.selector);if(a.type&&c.length>0)switch(a.type){case"word":case"date":c.val(b);break;case"radio":c.removeAttr("checked"),c.filter("[value='"+b+"']").attr("checked","checked");break;case"checkbox":c.removeAttr("checked"),c.filter("[value]").length>0?Array.isArray(b)?b.forEach(function(a){c.filter("[value='"+a+"']").attr("checked","checked")}):c.filter("[value='"+b+"']").attr("checked","checked"):"boolean"==typeof b&&b===!0&&c.attr("checked","checked");
break;case"select2":c.select2("val","")}}function j(){var a=o.find(".active-filter").length>0;o.find(".filter-cancel").toggleClass("none",!a)}var k={scroll:!0,area:".general",scrollingPanel:".sticky",tableHeader:".items-header",scrollingPanelItem:".items"},l=$.extend({},k,c),m=new Array,n=this,o=$(this);$(document).ready(function(){d(),e()}),this.disableButtons=function(a){o.find(".filter button, .filter-cancel").prop("disabled",a)},this.cleanFilters=function(){var a=o.find(".filter");a.each(function(){$filter=$(this);var a=$.grep(m,function(a){return $filter.find(a.selector).length>0}),b=!1;$(a).each(function(){i(this);var a=h(this);b=b||a}),$filter.prev("span").toggleClass("active-filter",b)}),j()},this.getUrl=function(){var a="";return $(m).each(function(){var b=this,c="&"+b.urlParam+"=";"undefined"!=typeof b.value&&(Array.isArray(b.value)?$(b.value).each(function(){a+=c+this}):a+=c+b.value)}),a},this.getData=function(){var a={},b=!0;return $(m).each(function(){var c=this;if("undefined"!=typeof c.value&&(b||c.value!=c.defaultValue))if(!Array.isArray(c.value)&&c.arrayResult)a[c.urlParam]=[c.value];else{if(Array.isArray(c.value)&&0==c.value.length&&!b)return;a[c.urlParam]=c.value}}),$.isEmptyObject(a)?null:a},this.getSearchMode=function(){return o.find(".filter").prev("span.active-filter").length>0},this.updateFilterInnerHtml=function(a,b,c,d){var e=$.grep(m,function(b){return b.selector==a});if(!e||0==e.length)return!1;var f=e[0],g=o.find(f.selector);if(0==g.length)return!1;var i=g.attr("name"),k=null;switch(f.type){case"word":break;case"date":break;case"radio":if(k=g.closest(".filter-select"),Array.isArray(b)&&b.length>0){for(var l="",n=0;n<b.length;n++){var p="";d&&(b[n].Selected=b[n].Value==f.value),b[n].Selected&&(p=' checked="checked"');var q='<div>\n<input autocomplete="off" id="'+i+"_"+n+'" name="'+i+'" value="'+b[n].Value+'"'+p+' type="radio">\n<label class="radio" for="'+i+"_"+n+'"></label>\n<label class="text" for="'+i+"_"+n+'" title="'+b[n].Text+'">'+b[n].Text+"</label>\n</div>\n";l+=q}k.find(">div").remove(),k.prepend(l),"undefined"!=typeof c&&(f.defaultValue=c);var r=h(f);k.closest(".filter").prev("span").toggleClass("active-filter",r),j()}break;case"checkbox":break;case"select2":}return!0}};