import { getMicrosoftJWT } from 'data/microsoft'
import { getMicrosoftReportsQuery, getMicrosoftReportSummaryData } from 'data/microsoft/microsoftDefender'
import { getSophosAlerts, getSophosEvents } from 'data/sophos/sophosSiem'

// const alerts = await getSophosAlerts()
// const events = await getSophosEvents()
// console.log('alerts: ',alerts)
// console.log('events: ',events)

// const token = await getMicrosoftJWT()
// console.log(token)
// getMicrosoftReportsQuery("DeviceEvents | where ActionType contains 'Anti' | limit 20")

getMicrosoftReportsQuery("MailFlowStatusReport")

