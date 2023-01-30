import express, { urlencoded } from "express";
import { create } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from "morgan";

const app = express();

app.set("views", path.join(__dirname, "views"));

//Motor de plantillla engine(HandleBars)
const exphbs = create({
  extname: ".hbs",
  //   layoutsDir: path.join(app.get("views"), "layouts"),
  //   partialsDir: path.join(app.get("views"), "partials"),
  defaultLayout: "main",
});

app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");

//MiddleWare
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(indexRoutes);

//Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

export default app;
