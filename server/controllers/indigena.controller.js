//? Autorizacion Controllers
import { pool } from "../db.js";

//* GET
export const getIndigenas = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM indigena ORDER BY created_at ASC"
    );
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getIndigena = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM indigena WHERE id = ?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res.status(404).json({ message: "Indigena no encontrado" });
    }
    return res.status(200).json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//? POST
export const createIndigena = async (req, res) => {
  try {
    const { pueblo, cabildo, afiliados_id } = req.body;

    const [result] = await pool.query(
      "INSERT INTO indigena(pueblo, cabildo, afiliados_id) VALUES (?, ?, ?)",
      [pueblo, cabildo, afiliados_id]
    );
    return res.status(201).json({
      id: result.insertId,
      pueblo,
      cabildo,
      afiliados_id,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
