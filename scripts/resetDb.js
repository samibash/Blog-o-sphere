const { db } = require('../models')

const resetDb = async () => {
    try {
        await db.sync({ force: true })
        console.log('Everything looks good here, DAWG!, database is mf synced')
      } catch (error) {
        console.log({msg:'error',error})
      } finally {
        await process.exit()
      }
}

resetDb();