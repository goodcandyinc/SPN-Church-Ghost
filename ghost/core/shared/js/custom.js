$( document ).ready(function() {
	var button_selected_color = "white"
	var button_selected_background = "#03437a"
	var button_color = "black"
	var button_background = "white"	
	$('#button_2015').css('color',button_selected_color);
	$('#button_2015').css('background-color',button_selected_background);	
	$("#2015").show();
	$('a.archive_link2015').click(function() {
		$("#2015").show("fast");
		$("#2014").hide("fast");
		$("#2013").hide("fast");
		$("#2012").hide("fast");
		$("#2011").hide("fast");
		$("#2010").hide("fast");
		$('#button_2015').css('color',button_selected_color);
		$('#button_2015').css('background-color',button_selected_background);
		$('#button_2014, #button_2013, #button_2012, #button_2011, #button_2010').css('color',button_color);
		$('#button_2014, #button_2013, #button_2012, #button_2011, #button_2010').css('background-color',button_background);					
	});
	$('a.archive_link2014').click(function() {
		$("#2015").hide("fast");
		$("#2014").show("fast");
		$("#2013").hide("fast");
		$("#2012").hide("fast");
		$("#2011").hide("fast");
		$("#2010").hide("fast");
		$('#button_2014').css('color',button_selected_color);
		$('#button_2014').css('background-color',button_selected_background);
		$('#button_2015, #button_2013, #button_2012, #button_2011, #button_2010').css('color',button_color);
		$('#button_2015, #button_2013, #button_2012, #button_2011, #button_2010').css('background-color',button_background);			
	});
	$('a.archive_link2013').click(function() {
		$("#2013").show("fast");
		$("#2014").hide("fast");
		$("#2015").hide("fast");
		$("#2012").hide("fast");
		$("#2011").hide("fast");
		$("#2010").hide("fast");
		$('#button_2013').css('color',button_selected_color);
		$('#button_2013').css('background-color',button_selected_background);
		$('#button_2014, #button_2015, #button_2012, #button_2011, #button_2010').css('color',button_color);
		$('#button_2014, #button_2015, #button_2012, #button_2011, #button_2010').css('background-color',button_background);			
	});
	$('a.archive_link2012').click(function() {
		$("#2012").show("fast");
		$("#2015").hide("fast");
		$("#2013").hide("fast");
		$("#2014").hide("fast");
		$("#2011").hide("fast");
		$("#2010").hide("fast");
		$('#button_2012').css('color',button_selected_color);
		$('#button_2012').css('background-color',button_selected_background);
		$('#button_2014, #button_2013, #button_2015, #button_2011, #button_2010').css('color',button_color);
		$('#button_2014, #button_2013, #button_2015, #button_2011, #button_2010').css('background-color',button_background);			
		});
	$('a.archive_link2011').click(function() {
		$("#2015").hide("fast");
		$("#2014").hide("fast");
		$("#2013").hide("fast");
		$("#2012").hide("fast");
		$("#2011").show("fast");
		$("#2010").hide("fast");
		$('#button_2011').css('color',button_selected_color);
		$('#button_2011').css('background-color',button_selected_background);
		$('#button_2014, #button_2013, #button_2012, #button_2015, #button_2010').css('color',button_color);
		$('#button_2014, #button_2013, #button_2012, #button_2015, #button_2010').css('background-color',button_background);			
		});
	$('a.archive_link2010').click(function() {
		$("#2015").hide("fast");
		$("#2014").hide("fast");
		$("#2013").hide("fast");
		$("#2012").hide("fast");
		$("#2011").hide("fast");
		$("#2010").show("fast");
		$('#button_2010').css('color',button_selected_color);
		$('#button_2010').css('background-color',button_selected_background);
		$('#button_2014, #button_2013, #button_2012, #button_2011, #button_2015').css('color',button_color);
		$('#button_2014, #button_2013, #button_2012, #button_2011, #button_2015').css('background-color',button_background);			
		});

	$(function () {
  $('[data-toggle="tooltip"]').tooltip()

})
});