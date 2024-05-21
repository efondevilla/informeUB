import { getMicrosoftJWT } from 'data/microsoft'
import { getMicrosoftReportSummaryData } from 'data/microsoft/microsoftDefender'
// import { getSophosAlerts, getSophosEvents } from 'data/sophos/sophosSiem'

// const alerts = await getSophosAlerts()
// const events = await getSophosEvents()
// console.log('alerts: ',alerts.length)
// console.log('events: ',events.length)

const token = await getMicrosoftJWT()
console.log(token)
getMicrosoftReportSummaryData("MailFlowStatusReport","MailFlowStatusSummary")

