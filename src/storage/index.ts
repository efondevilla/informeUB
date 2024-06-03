import fs from 'fs-extra'
// import Papa from 'papaparse';

const basePath = "./dataset/"
export async function saveFile(path: string, content: string): Promise<void> {
  const filePath = `${basePath}${path}`
  try {
    await fs.ensureFile(filePath);
    await fs.writeFile(filePath, content)
    console.log(`File saved successfully to ${filePath}`)
  } catch (error) {
    console.error('An error occurred while saving the file:', error)
  }
}
