import { getMicrosoftJWT } from 'data/microsoft'
// import { getSophosAlerts, getSophosEvents } from 'data/sophos/sophosSiem'

// const alerts = await getSophosAlerts()
// const events = await getSophosEvents()
// console.log('alerts: ',alerts.length)
// console.log('events: ',events.length)

const token = await getMicrosoftJWT()
console.log(token)
