import { getMicrosoftReportsQuery, getSophosAlerts, getSophosEvents, getPaloAltoAlerts } from 'data'
import { saveFile } from 'storage'

const sophosAlerts = await getSophosAlerts()
// console.log(`🚀 ~ sophosAlerts:`, sophosAlerts)
saveFile("sophos/alerts.csv", sophosAlerts.flat())

const sophosEvents = await getSophosEvents()
// console.log(`🚀 ~ sophosEvents:`, sophosEvents)
saveFile("sophos/events.csv", sophosEvents.flat())

// const microsoftReport = getMicrosoftReportsQuery("MailFlowStatusReport")
// console.log(`🚀 ~ microsoftReport:`, microsoftReport)
// saveFile("microsoft/report.json", JSON.stringify(microsoftReport))

// const paloAltoAlerts = getPaloAltoAlerts("<show><user><group><list></list></group></user></show>")
// console.log(`🚀 ~ paloAltoAlerts:`, paloAltoAlerts)
// saveFile("sophos/alerts.json", JSON.stringify(paloAltoAlerts))
