import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TimesController } from "./Controllers/TimesController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { WeathersController } from "./Controllers/WeathersController.js";
// import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  imagesController = new ImagesController()

  quotesController = new QuotesController()

  weathersController = new WeathersController()

  timesController = new TimesController()

  todosController = new TodosController()

}

window["app"] = new App();
