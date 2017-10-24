function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
	var c = ca[i];
	while (c.charAt(0)==' ') c = c.substring(1);
	if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function delCookie(cname) {
    document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
}

function createCookie(name, value, days) {
    var date, expires;
    if (days) {
	date = new Date();
	date.setTime(date.getTime()+(days*24*60*60*1000));
	expires = "; expires="+date.toGMTString();
    } else {
	expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/";
}

function mapType(selectObj) {
    var idx = selectObj.selectedIndex;
    var atype = selectObj.options[idx].value;
    var type = atype.split('-');
    if (type[0] == 'Mapbox') {
	createCookie('MapType',type[0],9999);
	createCookie('MapTypeId',type[1],9999);
    } else {
	createCookie('MapType',atype,9999);
    }
    window.location.reload();
}

function terrainType(selectObj) {
    var idx = selectObj.selectedIndex;
    var atype = selectObj.options[idx].value;
    var type = atype.split('-');
    document.cookie =  'MapTerrain='+type+'; expires=Thu, 2 Aug 2100 20:47:11 UTC; path=/'
    createCookie('MapTerrain',type,9999);
    window.location.reload();
}

function sattypes(selectObj) {
    var sattypes = [], sattype;
    for (var i=0, len=selectObj.options.length; i< len;i++) {
	sattype = selectObj.options[i];
	if (sattype.selected) {
	    sattypes.push(sattype.value);
	}
    }
    createCookie('sattypes',sattypes.join(),2);
    updateSat();
}
function airlines(selectObj) {
    var airs = [], air;
    for (var i=0, len=selectObj.options.length; i< len;i++) {
	air = selectObj.options[i];
	if (air.selected) {
	    airs.push(air.value);
	}
    }
    createCookie('filter_Airlines',airs.join(),2);
}
function airlinestype(selectObj) {
    var idx = selectObj.selectedIndex;
    var airtype = selectObj.options[idx].value;
    createCookie('filter_airlinestype',airtype,2);
}
function alliance(selectObj) {
    var idx = selectObj.selectedIndex;
    var alliance = selectObj.options[idx].value;
    createCookie('filter_alliance',alliance,2);
}
function identfilter() {
    var ident = $("#identfilter").value;
    createCookie('filter_ident',ident,2);
}
function mmsifilter() {
    var ident = $("#mmsifilter").value;
    createCookie('filter_mmsi',ident,2);
}
function removefilters() {
    // Get an array of all cookie names (the regex matches what we don't want)
    var cookieNames = document.cookie.split(/=[^;]*(?:;\s*|$)/);
    // Remove any that match the pattern
    for (var i = 0; i < cookieNames.length; i++) {
	if (/^filter_/.test(cookieNames[i])) {
	    delCookie(cookieNames[i]);
	}
    }
    window.location.reload();
}
function sources(selectObj) {
    var sources = [], source;
    for (var i=0, len=selectObj.options.length; i< len;i++) {
	source = selectObj.options[i];
	if (source.selected) {
	    sources.push(source.value);
	}
    }
    createCookie('filter_Sources',sources.join(),2);
}


function show2D() {
    createCookie('MapFormat','2d',10);
    createCookie('MapTrack',document.getElementById("aircraft_ident").className,1);
    window.location.reload();
}
function show3D() {
    createCookie('MapFormat','3d',10);
    createCookie('MapTrack',document.getElementById("aircraft_ident").className,1);
    window.location.reload();
}
function clickPolar(cb) {
    createCookie('polar',cb.checked,9999);
    window.location.reload();
}
function clickDisplayAirports(cb) {
    createCookie('displayairports',cb.checked,9999);
    window.location.reload();
}
function clickDisplayISS(cb) {
    createCookie('displayiss',cb.checked,9999);
    updateSat();
}
function clickDisplayMinimap(cb) {
    createCookie('displayminimap',cb.checked,9999);
    window.location.reload();
}
function clickSingleModel(cb) {
    createCookie('singlemodel',cb.checked,9999);
}
function clickVATSIM(cb) {
    createCookie('filter_ShowVATSIM',cb.checked,2);
}
function clickIVAO(cb) {
     createCookie('filter_ShowIVAO',cb.checked,2);
}
function clickphpVMS(cb) {
    createCookie('filter_ShowVMS',cb.checked,2);
}
function clickSBS1(cb) {
    createCookie('filter_ShowSBS1',cb.checked,2);
}
function clickAPRS(cb) {
    createCookie('filter_ShowAPRS',cb.checked,2);
}
function clickDisplayGroundStation(cb) {
    createCookie('show_GroundStation',cb.checked,2);
    window.location.reload();
}
function clickDisplayWeatherStation(cb) {
    createCookie('show_WeatherStation',cb.checked,2);
    window.location.reload();
}
function clickDisplayLightning(cb) {
    createCookie('show_Lightning',cb.checked,2);
    window.location.reload();
}
function clickDisplayFires(cb) {
    createCookie('show_Fires',cb.checked,2);
    window.location.reload();
}
function clickDisplay2DBuildings(cb) {
    createCookie('Map2DBuildings',cb.checked,2);
    window.location.reload();
}
function unitdistance(selectObj) {
    var idx = selectObj.selectedIndex;
    var unit = selectObj.options[idx].value;
    createCookie('unitdistance',unit,9999);
}
function unitspeed(selectObj) {
    var idx = selectObj.selectedIndex;
    var unit = selectObj.options[idx].value;
    createCookie('unitspeed',unit,9999);
}
function unitaltitude(selectObj) {
    var idx = selectObj.selectedIndex;
    var unit = selectObj.options[idx].value;
    createCookie('unitaltitude',unit,9999);
}
function addarchive(begindate,enddate) {
    console.log('Add archive');
    createCookie('archive',true,2);
    createCookie('archive_begin',begindate,2);
    createCookie('archive_end',enddate,2);
    createCookie('archive_speed',document.getElementById("archivespeed").value,2);
    window.location.reload();
}
function noarchive() {
    console.log('Exit archive!');
    delCookie('archive');
    delCookie('archive_begin');
    delCookie('archive_end');
    delCookie('archive_speed');
    window.location.reload();
}
function msgbox(text,buttontext) {
	buttontext = buttontext || "OK";
	$("<div>" + text + "</div>").dialog({
	    dialogClass: "no-close",
	    buttons: [{
		text: buttontext,
		click: function() {
		    $( this ).dialog( "close" );
		    $(this).remove();
		}
	    }]
	});
}