//? Autorizacion Controllers
import { pool } from "../db.js";

//* GET
export const getAutorizaciones = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM afiliados LEFT JOIN autorizacion ON autorizacion.afiliados_id = autorizacion.id"
    );
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAutorizacion = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM autorizacion WHERE id = ?",
      [req.params.id]
    );
    if (result.length === 0) {
      return res.status(404).json({ message: "Autorizacion no encontrada" });
    }
    return res.status(200).json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//? POST
export const createAutorizacion = async (req, res) => {
  try {
    const {
      diagnostico_principal,
      diagnostico_relacionado,
      regimen,
      medicamento,
      afiliados_id
    } = req.body;

    const [result] = await pool.query(
      "INSERT INTO autorizacion(diagnostico_principal, diagnostico_relacionado, regimen, medicamento, afiliados_id) VALUES (?, ?, ?, ?, ?)",
      [diagnostico_principal, diagnostico_relacionado, regimen, medicamento, afiliados_id]
    );
    return res.status(201).json({
      id: result.insertId,
      diagnostico_principal,
      diagnostico_relacionado,
      regimen,
      medicamento,
      afiliados_id
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
