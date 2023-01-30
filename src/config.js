import { config } from "dotenv";

//Accedemos a las variables del sistema gracias a dotenv
config();

export const MONGODB_URI = process.env.MONGODB_ATLAS_URI;

export const PORT = process.env.PORT || 3000;
