$(document).ready(function(){$.plot("#pie-grafic",data,{series:{pie:{innerRadius:.25,show:!0,startAngle:1.2,label:{show:!1}}},legend:{show:!1}}),$(".footnote").click(function(a){a.preventDefault()}),$(document).on({mouseenter:function(){var a=$(this).attr("data-id");"undefined"!=typeof a&&a!==!1&&a.length>0&&$('*[data-id="'+a+'"]').removeAttr("style").addClass("cite-hover")},mouseleave:function(){var a=$(this).attr("data-id");"undefined"!=typeof a&&a!==!1&&a.length>0&&$('*[data-id="'+a+'"]').removeAttr("style").removeClass("cite-hover")}},".report-text .plagiat, .report-text .legal")});