import { Deta } from "deta";

const deta = Deta(process.env.DETA_KEY);

const base = deta.Base("url");

const data = async (req, res) => {
  const { id } = req.query;
  const value = await base.fetch();
  const result = value.items.filter((n) => n.key === id);
  if (result.length === 0) {
    res.status(404).json({
      error: "Not found",
    });
  } else {
    res.status(200).json(result[0]);
  }
};

export default data;
