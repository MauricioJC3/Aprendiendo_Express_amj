export const getEmpresas = (req, res) => {
    res.send("Obteniendo empresas")
}

export const getEmpresa = (req, res) => {
    res.send('Obteniendo una empresas')
}

export const createEmpresa = (req, res) => {
    res.send('Registrando empresas')
}

export const updateEmpresa = (req, res) => {
    res.send('Actualizando empresas')
}

export const deleteEmpresa = (req, res) => {
    res.send('Eliminando empresas')
}