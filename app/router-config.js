import { AccountController } from "./controllers/AccountController.js";
import { BackgroundImgController } from "./controllers/BackgroundImgController.js";
import { HomeController } from "./controllers/HomeController.js";
import { QuotesController } from "./controllers/QuotesController.js";
import { WeatherController } from "./controllers/WeatherController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [WeatherController, BackgroundImgController, QuotesController],
    view: `app/views/HomeView.html`
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




