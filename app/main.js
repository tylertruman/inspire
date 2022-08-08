import { ClockController } from "./Controllers/ClockController.js";
import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TodoController } from "./Controllers/TodoController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  imagesController = new ImagesController();
  weatherController = new WeatherController();
  quotesController = new QuotesController();
  clockController = new ClockController();
  todoController = new TodoController();
  }

window["app"] = new App();
