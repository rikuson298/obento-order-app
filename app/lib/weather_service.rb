class WeatherService
  WETHER_API_URI = "http://weather.livedoor.com/forecast/webservice/json/v1"
  CITY_ID_TOKYO = 130010

  def self.call(city_id=CITY_ID_TOKYO)
    client = HTTPClient.new
    params = {
      city: CITY_ID_TOKYO
    }
    request =  client.get(WETHER_API_URI, params)
    JSON.parse(request.body)
  end
end