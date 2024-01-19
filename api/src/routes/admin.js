//src/routes/admin.js
import { Router } from "express";
import verificarAutenticacao from "../middlewares/autenticacao.js";

import {
  selectAdmins,
  selectAdmin,
  insertAdmin,
  deleteAdmin,
  updateAdmin,
} from "../db/index.js";

//src/routes/admin.js
const router = Router();

router.get("/admins", verificarAutenticacao, async (req, res) => {    //end points (router e app!)
  console.log(`Rota GET /admins solicitada pelo admin ${req.userId}`); 
  try {
    const admins = await selectAdmins();
    res.json(admins);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

router.get("/admin/:id", verificarAutenticacao, async (req, res) => {
  console.log("Rota GET /admin solicitada");
  try {
    const admin = await selectAdmin(req.params.id);
    if (admin.length > 0) res.json(admin);
    else res.status(404).json({ message: "Admin não encontrado!" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});


router.post("/admin", verificarAutenticacao, async (req, res) => {
  console.log("Rota POST /admin solicitada");
  try {
    await insertAdmin(req.body);
    res.status(201).json({ message: "Admin inserido com sucesso!" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

//index.js
router.delete("/admin/:id", verificarAutenticacao, async (req, res) => {
  console.log("Rota DELETE /admin solicitada");
  try {
    const admin = await selectAdmin(req.params.id);
    if (admin.length > 0) {
      await deleteAdmin(req.params.id);
      res.status(200).json({ message: "Admin excluido com sucesso!!" });
    } else res.status(404).json({ message: "Admin não encontrado!" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

//index.js
router.patch("/admin", verificarAutenticacao, async (req, res) => {
  console.log("Rota PATCH /admin solicitada");
  try {
    const admin = await selectAdmin(req.body.id);
    if (admin.length > 0) {
      await updateAdmin(req.body);
      res.status(200).json({ message: "Admin atualizado com sucesso!" });
    } else res.status(404).json({ message: "Admin não encontrado!" });
  } catch (error) {
    console.log(error);
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});
export default router;
