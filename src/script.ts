import { getAlerts } from 'data/sophos/sophosSiem'

const alerts = await getAlerts()

console.log(alerts.length)
