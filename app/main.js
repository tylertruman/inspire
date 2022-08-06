import { ClockController } from "./Controllers/ClockController.js";
import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TodoController } from "./Controllers/TodoController.js";
import { WeatherController } from "./Controllers/WeatherController.js";
import { Weather } from "./Models/Weather.js";

class App {
  imagesController = new ImagesController();
  weatherController = new WeatherController();
  quotesController = new QuotesController();
  clockController = new ClockController();
  todoController = new TodoController();
  // weather = new Weather();
}

window["app"] = new App();
