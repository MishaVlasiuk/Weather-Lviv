$(function() { 
    $.getJSON('http://api.openweathermap.org/data/2.5/forecast/daily?q=Lviv'+
    '&units=metric&cnt=3&appid=b3628aa47ecbfaadb367ea4779b8a8c1',
        function(data) {
          $('#todayTemp').html(data. list[0].temp.day);
          $('#tomorrowTemp').html(data. list[1].temp.day);
          $('#aftertomorrowTemp').html(data. list[2].temp.day);
          $('#TodayPressure').html(data. list[0].pressure);
          $('#TomorrowPressure').html(data. list[1].pressure);
          $('#AfterTomorrowPressure').html(data. list[2].pressure);
          $('#iconToday').html('<img src="img/'+ data.list[0].weather[0].icon + '.png" alt="Weather icon">');
          $('#iconTomorrow').html('<img src="img/'+ data.list[1].weather[0].icon + '.png" alt="Weather icon">');
          $('#iconAfterTomorrow').html('<img src="img/'+ data.list[2].weather[0].icon + '.png" alt="Weather icon">');
        }
    );
});