$(document).ready(function(){function a(a){if(!b){b=!0;var c="";"undefined"!=typeof $reportViewMode&&$reportViewMode&&(c+="&viewMode="+$reportViewMode),null!=$userId&&(c+="&userId="+$userId),"undefined"!=typeof $correctionNr&&null!=$correctionNr&&(c+="&c="+$correctionNr),null!==$reportId&&(c+="&v="+$reportId),a!==!0&&(c+="&short="+a),"undefined"!=typeof $validationHash&&$validationHash&&(c+="&validationHash="+$validationHash),c.length>0&&(c="?"+c.substring(1,c.length));var d=$reportApi+"api/isClosed/"+$documentId+c;$.ajax({type:"GET",url:d,dataType:"json",contentType:"application/json; charset=utf-8",timeout:6e4,success:function(a,c){if(a.success)window.open(a.url,"_blank").focus();else{var d=new DialogHelper;d.modalText(a.message)}b=!1},error:function(a,b,c){if(401==a.status)window.location.href="/";else{var d=new DialogHelper;d.modalText($.localize_report("Failed to export report","~/wwwroot/js/report/summary/summaryExportReport.js"))}}})}}var b=!1;$("#report-export").confirmIgnoredSources(function(){a($(this).data("short")||!1)}),$("#report-export-short").confirmIgnoredSources(function(){a(!0)})});