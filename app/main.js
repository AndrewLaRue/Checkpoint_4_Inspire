import { NamesController } from "./Controllers/NamesController.js";
import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TimesController } from "./Controllers/TimesController.js";
import { WeathersController } from "./Controllers/WeathersController.js";
import { TodosController } from "./Controllers/TodosController.js";


class App {
  
  namesController = new NamesController()

  imagesController = new ImagesController()

  quotesController = new QuotesController()

  timesController = new TimesController()
  
  weathersController = new WeathersController()

  todosController = new TodosController()

}

window["app"] = new App();
