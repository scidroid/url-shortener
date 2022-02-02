import { Deta } from "deta";

const deta = Deta(process.env.DETA_KEY);

const base = deta.Base("url");

const data = async (req, res) => {
  let { body } = req;

  body = JSON.parse(body);
  res.status(201).json(await base.put(body));
};

export default data;
