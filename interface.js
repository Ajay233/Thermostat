var thermostat = new Thermostat();
var appid = "568fdba9d2d7ad142caba952501ad68a";
var city = "london"
// https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=568fdba9d2d7ad142caba952501ad68a&units=metric&callback=?

function getLocation() {

  // $.getJSON('https://geoip-db.com/json/geoip.php?jsonp=?')
  //       .done (function(location)
  //       {
          var weatherLink = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + appid + "&units=metric&callback=?";
          $.ajax({
              url: weatherLink,
              dataType: "jsonp",
              success: function(response) {
                $('#LondonTemp').text(response.main.temp + " degrees celcius");
                // return response.main.temp;
                //   $('body').append(response);
              }
          });

        // });
    }

$(document).ready(function(){
  $('#temperature').text(thermostat.temperature);
  getLocation();

})

$('#temperature-up').on('click', function(){
  thermostat.up();
  $('#temperature').text(thermostat.temperature);
})

$('#temperature-down').on('click', function(){
  thermostat.down();
  $('#temperature').text(thermostat.temperature);
})

$('#temperature-reset').on('click', function(){
  thermostat.resetTemperature();
  $('#temperature').text(thermostat.temperature);
})

$('#powersaving-on').on('click', function(){
  thermostat.switchPowerSavingModeOn();
  $('#power-saving-status').text("On");
  $('#temperature').text(thermostat.temperature);
})

$('#powersaving-off').on('click', function(){
  thermostat.switchPowerSavingModeOff();
  $('#power-saving-status').text("Off");
})

$('#set_city').on('click', function(){
  city = $('#city').val();
  getLocation()

  $('#power-saving-status').text("Off");
})
