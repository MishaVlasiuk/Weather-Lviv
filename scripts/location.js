    
    $(function() {
        navigator.geolocation.getCurrentPosition(locationSuccess, locationError);  
    });

    function locationSuccess(position) 
    {
        var weatherAPI = 'http://api.openweathermap.org/data/2.5/forecast?lat='+position.coords.latitude+
        '&lon='+position.coords.longitude+'&APPID=b5eb1f7fc74c772602241ba72db33987&callback=?';
   $.getJSON(weatherAPI, function(response) 
   {
     console.log(response);
     $('#loc').html(response.city.name);
     $('#currenttemp').html(parseInt(response.list[0].main.temp - 273.15)+'&deg;C');
     for(var i = 1; i < 40; i = i + 8)
     {
       $('#temp').append('<tr><td>Date: '+ response.list[i].dt_txt+'</td><td>'+
       parseInt(response.list[i].main.temp - 273.15)+'&deg;C</td></tr>');
     }
   });
}
             
function locationError(error) {
   console.warn('Error:' + error.message);
}