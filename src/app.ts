// -------------- IMPORTS -------------- //
import ProductManager from "./ProductManager";
import { PATH } from "./utils/utils";
import express, { Request, Response } from "express";

// -------------- DEFINITIONS -------------- //

const PORT = 8080;

// Express.js application instance creation
const app = express();

// Complex URLs format mapping
app.use(express.urlencoded({ extended: true }));

// Express.js server start
app.listen(PORT, () =>
  console.log(`Servidor de Express.js corriendo en el puerto: ${PORT}`)
);

// Queries interface
interface QueryParams {
  limit?: string; // ? Optional property
}

// Set a route in Express.js application to handle GET requests (GET ENDPOINT with QUERIES)
app.get("/products", async (req: Request, res: Response) => {
  // Reading products
  const productManager = new ProductManager(PATH);
  const products = await productManager.getProducts();

  let limitParsed: number = products.length; // Set max limit value

  const queryParams: QueryParams = req.query; // Get all queries
  const { limit } = queryParams; // Get limit query

  // If limit is not undefined
  if (limit) {
    limitParsed = parseInt(limit); // Update and parse new limit
  }

  res.send(products.splice(0, limitParsed));
});

// GET ENDPOINT with PARAMS
app.get("/products/:pid", async (req: Request, res: Response) => {
  const productManager = new ProductManager(PATH);
  const pid: number = parseInt(req.params.pid);
  const idProduct = await productManager.getProductById(pid);

  if (idProduct) {
    res.send(idProduct);
  } else {
    res.status(404).json({ error: `El producto con id ${pid} no existe.` });
  }
});
