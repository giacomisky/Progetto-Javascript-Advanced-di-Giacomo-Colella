var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


function requestDataGeo(lat, long){
    var xml = new XMLHttpRequest();
    let url = "https://api.waqi.info/feed/geo:"+lat+";"+long+"/?token=f026223212302d59691bade2853539e15a6376a2";
    xml.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            returnDataGeo(this);
        }
    }
    xml.open("GET", url);
    xml.send();
}

function returnDataGeo(xml){
    value = xml.responseText;
    jsv = JSON.parse(value);
    var aqi = jsv['data']['aqi'];
    var data1 = "<tr><td data-label='Temperatura'>"+jsv['data']['iaqi']['t']['v']+"</td>";
    var data2 = "<td data-label='Umidità'>"+jsv['data']['iaqi']['h']['v']+"</td>";
    var data3 = "<td data-label='Pressione'>"+jsv['data']['iaqi']['p']['v']+"</td>";

    try{
        var data4 = "<td data-label='Vento'>"+jsv['data']['iaqi']['w']['v']+"</td>";
        console.log("fatot");
    }catch{
        var data4 = "<td data-label='Vento'>//</td>";
    }
    
    try{
        var data5 = "<td data-label='CO'>"+jsv['data']['iaqi']['co']['v']+"</td>";
    }catch{
        var data5 = "<td data-label='CO'>//</td>";
    }
    
    try{
        var data6 = "<td data-label='NO2'>"+jsv['data']['iaqi']['no2']['v']+"</td>";
    }catch{
        var data6 = "<td data-label='NO2'>//</td>";
    }

    try{
        var data7 = "<td data-label='O3'>"+jsv['data']['iaqi']['o3']['v']+"</td>";
    }catch{
        var data7 = "<td data-label='O3'>//</td>";
    }
    
    try{
        var data8 = "<td data-label='PM25'>"+jsv['data']['iaqi']['pm25']['v']+"</td>";
    }catch{
        var data8 = "<td data-label='PM25'>//</td>";
    }

    try{
        var data9 = "<td data-label='PM10'>"+jsv['data']['iaqi']['pm10']['v']+"</td>";
    }catch{
        var data9 = "<td data-label='PM10'>//</td>";
    }
    
    document.getElementById("aqiText").innerHTML = "<i class='circular chart line icon'></i>Livello di qualità dell'aria: "+"<b>"+aqi+"</b>";
    document.getElementById("listData").innerHTML = data1+data2+data3+data4+data5+data6+data7+data8+data9;
}

