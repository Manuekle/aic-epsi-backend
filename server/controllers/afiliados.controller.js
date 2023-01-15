//? Afiliados Controllers
import { pool } from "../db.js";

//* GET
export const getAfiliados = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM afiliados ORDER BY created_at ASC"
    );
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAfiliado = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM afiliados WHERE id = ?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res.status(404).json({ message: "Afiliado no encontrado" });
    }
    return res.status(200).json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//? POST
export const createAfiliado = async (req, res) => {
  try {
    const {
      nombre,
      tipo_documento,
      numero_documento,
      genero,
      estado_civil,
      municipio,
      departamento,
      direccion,
      correo_electronico,
      indigena,
    } = req.body;
    
    const [result] = await pool.query(
      "INSERT INTO afiliados(nombre, tipo_documento, numero_documento, genero, estado_civil, municipio, departamento, direccion, correo_electronico, indigena) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        nombre,
        tipo_documento,
        numero_documento,
        genero,
        estado_civil,
        municipio,
        departamento,
        direccion,
        correo_electronico,
        indigena
      ]
    );

    return res.status(200).json({
      id: result.insertId,
      nombre,
      tipo_documento,
      numero_documento,
      genero,
      estado_civil,
      municipio,
      departamento,
      direccion,
      correo_electronico,
      indigena,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//TODO: UPDATE
export const updateAfiliado = async (req, res) => {
  try {
    const result = await pool.query("UPDATE afiliados SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//! DELETE
export const deleteAfiliado = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM afiliados WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Afiliado no encontrado" });
    }

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
