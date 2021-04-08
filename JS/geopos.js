var options = {
    enableHighAccurancy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos){
    var crd = pos.coords;

    //console.log("Latitude: "+ crd.latitude);
    //console.log("Longitude: "+crd.longitude);

    lat = crd.latitude;
    long = crd.longitude;

    requestDataGeo(lat, long);

}

function error(err) {
    console.warn("Error ${err}");
}

function dataFromGeo(){
    navigator.geolocation.watchPosition(success, error);
}


