import { Request, Response } from "express";
import knex from "../database/connection";

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex("items").select("*");
    const serializezItems = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image: `http://10.5.23.109:3333/uploads/${item.image}`,
      };
    });

    return response.json(serializezItems);
  }
}

export default ItemsController;
