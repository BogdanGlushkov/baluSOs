$(document).ready(function(){$(".ap-header-dialog a.manual").qtip({content:{text:function(a){return $(this).attr("title")}},style:{classes:"qtip-ux qtip-field-dialog ap-header-qtip",tip:!0},position:{my:"center left",at:"center right",adjust:{y:0,x:0}},show:{event:"mouseover"},hide:{event:"mouseout"}})});