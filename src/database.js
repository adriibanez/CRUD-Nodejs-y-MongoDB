import { connect } from "mongoose";
import { MONGODB_URI } from "./config";

//Conexión mongodb atlas
(async () => {
  try {
    const db = await connect(MONGODB_URI);
    console.log("DB conneted to", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
