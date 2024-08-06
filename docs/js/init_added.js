/* 



*/

// *** VIEW TOOL *** //
function viewpanelSwitch(on) {

	if (on === undefined) on = $('#view').css("visibility") == "visible";
	if (on) {
		$('#view').css("visibility", "hidden");
		$('#view_on').css("visibility", "visible");
		$('#view-box').fadeIn().css("display", "table");
		//
	}
	else {
		$('#view_on').css("visibility", "hidden");
		$('#view').css("visibility", "visible");
		$('#view-box').fadeOut();
	}
}

// *** Metadate Switch TOOL *** //

function metaSwitch01(on, metadata, jsonfile) {
	var storage = [];
	var value = Object.values(metadata["config"]);
	var key = Object.keys(metadata["config"]);
	var htmlstring = "";

	for (let i = 0; i < value.length; i++) {
		htmlstring += "<li>" + key[i] + "<b>: </b>" + value[i] + "</li>";
	}
	console.log(on);
	console.log(htmlstring)
	console.log(jsonfile)

	if (on === undefined) on = $('#data1').css("visibility") == "visible";
	if (on) {
		console.log(document.getElementById("scan_metadata_full"));
		document.getElementById("scan_metadata").innerHTML = htmlstring;
		document.getElementById("scan_metadata_full").setAttribute("onClick", 'window.open("' + jsonfile + '","_blank")');
		$('#metadata1').css("visibility", "hidden");
		$('#metadata1_on').css("visibility", "visible");
		$('#metadata1_on').css("opacity", "1.0");
		$('#meta_pane').css("visibility", "visible");
	}
	else {
		$('#meta_pane').css("visibility", "hidden");
		$('#metadata1_on').css("visibility", "hidden");
		$('#metadata1').css("visibility", "visible");
	}
}

function metaSwitch02(on, metadata, jsonfile) {
	var storage = [];
	var value = Object.values(metadata["config"]);
	var key = Object.keys(metadata["config"]);
	var htmlstring = "";

	for (let i = 0; i < value.length; i++) {
		htmlstring += "<li>" + key[i] + "<b>: </b>" + value[i] + "</li>";
	}
	console.log(on);
	console.log(htmlstring)
	console.log(jsonfile)

	if (on) {
		console.log(document.getElementById("scan_metadata_full"));
		document.getElementById("scan_metadata").innerHTML = htmlstring;
		document.getElementById("scan_metadata_full").setAttribute("onClick", 'window.open("' + jsonfile + '","_blank")');
		$('#metadata2').css("visibility", "hidden");
		$('#metadata2_on').css("visibility", "visible");
		$('#metadata2_on').css("opacity", "1.0");
		$('#meta_pane').css("visibility", "visible");
	}
	else {
		$('#meta_pane').css("visibility", "hidden");
		$('#metadata2_on').css("visibility", "hidden");
		$('#metadata2').css("visibility", "visible");
	}
}


//** Data VIEW  *** //

function data1Switch(on) {
	if (on === undefined) on = $('#data1').css("visibility") == "visible";
	if (on) {
		presenter.setInstanceVisibility('ds01', true, true);
		$('#data1').css("visibility", "hidden");
		$('#data1_on').css("visibility", "visible");
		$('#data1_on').css("opacity", "1.0");
	}
	else {
		presenter.setInstanceVisibility('ds01', false, true);
		$('#data1_on').css("visibility", "hidden");
		$('#data1').css("visibility", "visible");
	}
}

function data2Switch(on) {
	if (on === undefined) on = $('#data2').css("visibility") == "visible";
	if (on) {
		presenter.setInstanceVisibility('ds02', true, true);
		$('#data2').css("visibility", "hidden");
		$('#data2_on').css("visibility", "visible");
		$('#data2_on').css("opacity", "1.0");
	}
	else {
		presenter.setInstanceVisibility('ds02', false, true);
		$('#data2_on').css("visibility", "hidden");
		$('#data2').css("visibility", "visible");
	}
}

function data3Switch(on) {
	if (on === undefined) on = $('#data3').css("visibility") == "visible";
	if (on) {
		presenter.setInstanceVisibility('ds03', true, true);
		$('#data3').css("visibility", "hidden");
		$('#data3_on').css("visibility", "visible");
		$('#data3_on').css("opacity", "1.0");
		$('#legend').css("visibility", "visible");
	}
	else {
		presenter.setInstanceVisibility('ds03', false, true);
		$('#data3_on').css("visibility", "hidden");
		$('#data3').css("visibility", "visible");
		$('#data3').css("opacity", "1.0");
		$('#legend').css("visibility", "hidden");
	}
}

function data4Switch(on) {
	if (on === undefined) on = $('#data4').css("visibility") == "visible";
	if (on) {
		presenter.setInstanceVisibility('ds04', true, true);
		$('#data4').css("visibility", "hidden");
		$('#data4_on').css("visibility", "visible");
		$('#data4_on').css("opacity", "1.0");
		$('#legend').css("visibility", "visible");
	}
	else {
		presenter.setInstanceVisibility('ds04', false, true);
		$('#data4_on').css("visibility", "hidden");
		$('#data4').css("visibility", "visible");
		$('#data4').css("opacity", "1.0");
		$('#legend').css("visibility", "hidden");
	}
}

function data5Switch(on) {
	if (on === undefined) on = $('#data5').css("visibility") == "visible";
	if (on) {
		presenter.setInstanceVisibility('ds05', true, true);
		$('#data5').css("visibility", "hidden");
		$('#data5_on').css("visibility", "visible");
		$('#data5_on').css("opacity", "1.0");
		$('#legend').css("visibility", "visible");
	}
	else {
		presenter.setInstanceVisibility('ds05', false, true);
		$('#data5_on').css("visibility", "hidden");
		$('#data5').css("visibility", "visible");
		$('#data5').css("opacity", "1.0");
		$('#legend').css("visibility", "hidden");
	}
}

function data6Switch(on) {
	if (on === undefined) on = $('#data6').css("visibility") == "visible";
	if (on) {
		presenter.setInstanceVisibility('ds06', true, true);
		$('#data6').css("visibility", "hidden");
		$('#data6_on').css("visibility", "visible");
		$('#data6_on').css("opacity", "1.0");
		$('#legend').css("visibility", "visible");
	}
	else {
		presenter.setInstanceVisibility('ds06', false, true);
		$('#data6_on').css("visibility", "hidden");
		$('#data6').css("visibility", "visible");
		$('#data6').css("opacity", "1.0");
		$('#legend').css("visibility", "hidden");
	}
}

// *** ORTHOGRAPHIC TOOL *** //
function orthopanelSwitch(on) {

	if (on === undefined) on = $('#ortho').css("visibility") == "hidden";
	if (on) {
		presenter.toggleCameraType();
		$('#ortho').css("visibility", "hidden");
		$('#ortho_on').css("visibility", "visible");
		$('#ortho_on').css("opacity", "1.0");
		//
	}
	else {
		presenter.toggleCameraType();
		$('#ortho_on').css("visibility", "hidden");
		$('#ortho').css("visibility", "visible");
		$('#ortho').css("opacity", "1.0");
	}
}

// Rotation Center

function rotcenterSwitch(on) {
	if (on === undefined) on = presenter.isPickpointModeEnabled();
	if (on) {
		jQuery('#rotcenter').css("visibility", "hidden");
		jQuery('#rotcenter_on').css("visibility", "visible");
		//jQuery('#pickpoint-box').fadeIn().css("display","table");
		jQuery('#draw-canvas').css("cursor", "crosshair");
	}
	else {
		if (window.getSelection && window.getSelection() != '') window.getSelection().removeAllRanges();
		else if (document.selection && document.selection.createRange() != '') document.selection.empty();
		jQuery('#rotcenter_on').css("visibility", "hidden");
		jQuery('#rotcenter').css("visibility", "visible");
		// jQuery('#pickpoint-box').css("display","none");
		//jQuery('#pickpoint-output').html("[ 0 , 0 , 0 ]");
		if (!presenter.isAnyMeasurementEnabled()) jQuery('#draw-canvas').css("cursor", "default");
	}
}
// *** COLOR TOOL  *** //

function colorpanelSwitch(on) {

	if (on === undefined) on = $('#color').css("visibility") == "visible";
	if (on) {
		presenter.setInstanceSolidColorByName(HOP_ALL, true, true, [0.83, 0.78, 0.66])  //d4c7a8
		$('#color').css("visibility", "hidden");
		$('#color_on').css("visibility", "visible");
		$('#setups_on').css("opacity", "1.0");
		$('#color-box').fadeIn().css("display", "table");
	}
	else {
		// presenter.setInstanceSolidColor('konserviert', true, true,[0.5, 0.7, 0.7])			
		presenter.setInstanceSolidColor('scherbe', true, true, [0.702, 0.718, 0.757])
		var defaultColor = document.getElementById("color-range");
		defaultColor.value = "#d4c7a8";
		$('#color_on').css("visibility", "hidden");
		$('#color').css("visibility", "visible");
		$('#color-box').fadeOut();
	}
}

function solidcolorSwitch() {
	var hex = document.getElementById('color-range').value;
	hex = hex.replace('#', '');
	var r = parseInt(hex.substring(0, hex.length / 3), 16);
	var g = parseInt(hex.substring(hex.length / 3, 2 * hex.length / 3), 16);
	var b = parseInt(hex.substring(2 * hex.length / 3, 3 * hex.length / 3), 16);
	var Rr = r / 255;
	var Gr = g / 255;
	var Br = b / 255;
	presenter.setInstanceSolidColorByName(HOP_ALL, true, true, [Rr, Gr, Br]);
}

function rgbToHex(rgb) {
	var hex_r = (rgb[0] * 255).toString(16);
	var hex_g = (rgb[1] * 255).toString(16);
	var hex_b = (rgb[2] * 255).toString(16);
	return "#" + (hex_r.length == 1 ? "0" + hex_r : hex_r) + (hex_g.length == 1 ? "0" + hex_g : hex_g) + (hex_b.length == 1 ? "0" + hex_b : hex_b);
}



// *** Help  TOOL  *** //

function helpSwitch() {
	if ($('#help_on').css("visibility") == 'hidden') {
		$('#help').css("visibility", "hidden");
		$('#help_on').css("visibility", "visible");
		$('#help_on').css("opacity", "1.0");
		$('#help_pane').css("visibility", "visible");
	}
	else {
		$('#help_on').css("visibility", "hidden");
		$('#help').css("visibility", "visible");
		$('#help').css("opacity", "1.0");
		$('#help_pane').css("visibility", "hidden");
	}
}



// *** Datasets Switch TOOL  *** //

function scherbeSwitch(on) {

	if (on === undefined) on = $('#scherbe1').css("visibility") == "visible";
	if (on) {
		presenter.setInstanceVisibility('scherbe', true, true);
		$('#scherbe1').css("visibility", "hidden");
		$('#scherbe1_on').css("visibility", "visible");
		$('#scherbe1_on').css("opacity", "1.0");
	}
	else {
		presenter.setInstanceVisibility('scherbe', false, true);
		$('#scherbe1_on').css("visibility", "hidden");
		$('#scherbe1').css("visibility", "visible");
		$('#scherbe1').css("opacity", "1.0");
	}
}
function traegerSwitch(on) {

	if (on === undefined) on = $('#traeger').css("visibility") == "visible";
	if (on) {
		presenter.setInstanceVisibility('traeger', true, true);
		$('#traeger').css("visibility", "hidden");
		$('#traeger_on').css("visibility", "visible");
		$('#traeger_on').css("opacity", "1.0");
	}
	else {
		presenter.setInstanceVisibility('traeger', false, true);
		$('#traeger_on').css("visibility", "hidden");
		$('#traeger').css("visibility", "visible");
		$('#traeger').css("opacity", "1.0");
	}
}



// +++ INTERFACE SWITCHING FUNCTIONS +++ //
function showPanels(id) {
	//console.log(id);

	switch (id) {
		case "light_on":
			if ($('#light-box')[0]) { hidePanels(id); $('#light-box').fadeIn().css("display", "table"); }
			break;

		case "pick_on":
			if ($('#pickpoint-box')[0]) { hidePanels(id); $('#pickpoint-box').fadeIn().css("display", "table"); }
			break;
		case "measure_on":
			if ($('#measure-box')[0]) { hidePanels(id); $('#measure-box').fadeIn().css("display", "table"); }
			break;
		//		case "angle_on":
		//			if ($('#angle-box')[0]) { hidePanels(id); $('#angle-box').fadeIn().css("display","table"); }
		//			break;
		//		case "area_on":
		//			if ($('#area-box')[0]) { hidePanels(id); $('#area-box').fadeIn().css("display","table"); }
		//			break;
		case "measures_on":
			if ($('#measures-box')[0]) { hidePanels(id); $('#measures-box').fadeIn().css("display", "table"); }
			break;

		case "sectionx_on":
			if ($('#sectionx-box')[0]) { hidePanels(id); $('#sectionx-box').fadeIn().css("display", "table"); }
			break;
		case "sectiony_on":
			if ($('#sectiony-box')[0]) { hidePanels(id); $('#sectiony-box').fadeIn().css("display", "table"); }
			break;
		case "sectionz_on":
			if ($('#sectionz-box')[0]) { hidePanels(id); $('#sectionz-box').fadeIn().css("display", "table"); }
			break;
		case "sections_on":
			if ($('#sections-box')[0]) { hidePanels(id); $('#sections-box').fadeIn().css("display", "table"); }
			break;

		case "points_on":
			if ($('#points-box')[0]) { hidePanels(id); $('#points-box').fadeIn().css("display", "table"); }
			break;
		case "solidcolor_on":
			if ($('#solidcolor-box')[0]) { hidePanels(id); $('#solidcolor-box').fadeIn().css("display", "table"); }
			break;
		case "setups_on":
			if ($('#setups-box')[0]) { hidePanels(id); $('#setups-box').fadeIn().css("display", "table"); }
			break;
		case "color_on":
			if ($('#color-box')[0]) { hidePanels(id); $('#color-box').fadeIn().css("display", "table"); }
			break;
		case "view_on":
			if ($('#view-box')[0]) { hidePanels(id); $('#view-box').fadeIn().css("display", "table"); }
			break;
	}
}

function hidePanels(id) {
	//console.log(id);

	if (id != "light_on") $('#light-box').css("display", "none");

	if (id != "pick_on") $('#pickpoint-box').css("display", "none");
	//	if (id != "angle_on") $('#angle-box').css("display","none");
	//	if (id != "area_on") $('#area-box').css("display","none");
	if (id != "measure_on") $('#measure-box').css("display", "none");
	if (id != "view_on") $('#view-box').css("display", "none");

	if (id != "sectionx_on") $('#sectionx-box').css("display", "none");
	if (id != "sectiony_on") $('#sectiony-box').css("display", "none");
	if (id != "sectionz_on") $('#sectionz-box').css("display", "none");
	if (id != "sections_on") $('#sections-box').css("display", "none");
	if (id != "color_on") $('#color-box').css("display", "none");
	if (id != "points_on") $('#points-box').css("display", "none");
	if (id != "solidcolor_on") { $('#solidcolor-box').css("display", "none"); if ($('#solidcolor-box .jscolor')[0]) { $('#solidcolor-box .jscolor')[0]._jscLinkedInstance.hide(); } }
	if (id != "setups_on") { $('#setups-box').css("display", "none"); if ($('#setups-box .jscolor')[0]) { $('#setups-box .jscolor')[0]._jscLinkedInstance.hide(); } }
}

