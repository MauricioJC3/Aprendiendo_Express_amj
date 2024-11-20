import sql from 'mssql'

const dbSetting = {
    user: 'sa',
    password: 'yourStrong#Password',
    server: 'localhost',
    database: '',
    options: {
        encrypt: false,
        trustServerCertificate: true,
    }
}


export const getConnection = async () => {
    try {
   const pool = await sql.connect(dbSetting);
   return pool;
    } catch (error) {
        console.log(error)
    }
}