import { Router } from "express";
import { createEmpresa, deleteEmpresa, getEmpresa, getEmpresas, updateEmpresa } from "../../app/controllers/empresa.controllers.js"
const router = Router()

router.get('/empresas', getEmpresas)

router.get('/empresas/:id', getEmpresa)

router.post('/empresas/:id', createEmpresa)

router.put('/empresas/:id', updateEmpresa)

router.delete('/empresas/:id', deleteEmpresa)



export default router