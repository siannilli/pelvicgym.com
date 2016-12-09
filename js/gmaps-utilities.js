var map = null;
var geocoder = null;
var pvgmarker = null;
var gdirection = null;


function getDirectionError(){
	var status = gdirection.getStatus();
	
	switch(status.code){
		case 602: 
			alertDialog('L\'indirizzo non è corretto o non può essere individuato. Prova a scriverlo diversamente.<br/>Se hai utilizzato una forma abbreviata prova con quella estesa (es: via parioli -> viale dei parioli).');
			break;
		default:
			alertDialog('Non è possibile calcolare il percorso in questo momento (' + status.code + ')');
	}	
	
}

function getDirectionToAddress(address){
	if (gdirection){
		gdirection.load("from: " + address + " to: via giovanni schiaparelli 11, Roma");
	}
}

function gmap_setup(){
	if (GBrowserIsCompatible()){
		map = new GMap2(document.getElementById('gmap-canvas'));
		point = GPoint(41.9221273, 12.4814900);
		map.setCenter(new GLatLng(41.9221273, 12.4814900), 17);		
		map.setUIToDefault();
	
		pvgmarker = new GMarker(map.getCenter());
		map.addOverlay(pvgmarker/*, mrgopts*/);
		pvgmarker.openInfoWindowHtml("Pelvic Gym<br/>via giovanni schiaparelli 11, Roma");
		
		gdirection = new GDirections(map, document.getElementById('gdirections'));
		GEvent.addListener(gdirection, "error", getDirectionError );
	}	
}

