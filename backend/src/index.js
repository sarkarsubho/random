const express = require("express");
const B2CProductController=require("./controllers/B2CProduct.controller");
const automatingHydroponicsController=require("./controllers/automatingHydroponics.controller")
const app = express();

app.use(express.json());

app.use("/B2C/products",B2CProductController)
app.use("/automatingHydroponics",automatingHydroponicsController)

module.exports = app;

[{
    
    "title": "Camera",
    "img": "https://4.imimg.com/data4/NM/DV/MY-15812826/cctv-camera-500x500.jpg",
    "des":"Live feed from the farm can be accessed to know the status of the produce and if there are any infestation or diseases affecting the plants.",
    "t1":"Live Feed",
    "t2":"Time Lapse of growth cycle"

  },
  {
    
    "title": "Sensors",
    "img": "https://www.keyence.co.in/Images/type_keyvisual_lr-z_1958418.png",
    "des":"It is critical to maintain the correct nutrition level of water for the plants be healthy at every stage of the growth. The nutrition in the water is sensed using pH and electrical conductivity sensors Plants thrive when proper temperature and humidity levels are maintained",
    "t1":"Ambient Temperature and Humidity",
    "t2":"pH level of nutrition",
    "t3":"ppm level of nutrition"
    
  },{
    
    "title": "Controls",
    "img": "https://images.squarespace-cdn.com/content/v1/5c34d2fa9772ae483de49e2f/1560451468740-H7QYCQGFTD8KXQA3V6OI/shutterstock_1008152344.jpg",
    "des":"LED lights and pumps are switched electronically according the set schedules. This ensures required reliable and repeatable environment.",
     "t1" :"LED Lights (UV grow-lights) schedule (Typically one shift of 12 hours)",
     "t2":"Pump Schedule",
     "t3":"Nutrition Doser"
  },
  {
    
    "title": "Automation Strategy",
    "img": "https://u-tor.com/ckfinder/userfiles/images/ATLC.jpg",
    "des":"The advantage with hydroponics is most parameters can be monitored and controlled closely so that repeatable results are achieved."
  },
  {
    
    "title": "Grow lights",
    "img": "https://20fd661yccar325znz1e9bdl-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/jueyingbaili-80w-full-spectrum-plant-lights.jpg",
    "des":"For grow lights the intensity and wavelength needs to be maintained to accelerate the growth of plants. This is set by measuring and tuning the light spectrum. Lights are scheduled for 14 hours ON time and 10 hours OFF time."
  },{
    
    "title": "Water Pump",
    "img": "https://waterpumpreviews.com/wp-content/uploads/2022/09/Water-Pump-Repair-CNC-Water-Installation-and-Repair.jpg",
    "des":"As plants grow they absorb nutrition and oxygen from water. Hence it is important to keep the water circulating in the tank. Also stagnant water is breeding ground for mosquito larvae and other bacterias. Water pump is scheduled to operate every 30 mins."
  },{
    
    "title": "Nutrition",
    "img": "https://gardeningtips.in/wp-content/uploads/2021/11/d.jpg",
    "des":"To ensure correct pH and ppm level is maintained, the system takes a sample from the tank at set intervals. If the pH or ppm are below or above required level, corrective action is taken and the measurement is repeated."
  },{
    
    "title": "Temperature",
    "img": "https://img.freepik.com/premium-vector/cold-warm-thermometer-temperature-weather-thermometers-celsius-fahrenheit-meteorology-scale-temp-control-device-icon_176411-553.jpg?w=2000",
    "des":"Ambient temperature and humidity is maintained as required for the plant. PID algorithm is implemented to maintain the temperature and humidity."
  }
  ]