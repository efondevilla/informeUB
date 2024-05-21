import { getMicrosoftJWT } from '.'
// import type {  } from '../../types/microsoft'

export async function getMicrosoftReportSummaryData(reportId: string, dataSourceId: string) {
  const JWTtoken = await getMicrosoftJWT();
  const url = `https://security.microsoft.com/api/ReportV2/GetReportSummaryData?reportId=${reportId}&dataSourceId=${dataSourceId}`;

  const myHeaders = new Headers({
    "Authorization": `Bearer ${JWTtoken}`,
    "Content-Type": "application/json"
  });

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching report summary data:', error);
    throw error;
  }
}


// https://security.microsoft.com/api/ReportV2/GetReportSummaryData?reportId=MailFlowStatusReport&dataSourceId=MailFlowStatusSummary

