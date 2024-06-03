import fs from 'fs-extra'
import papa from 'papaparse';

const basePath = "./dataset/"
export async function saveFile(path: string, content: unknown[]): Promise<void> {
  const filePath = `${basePath}${path}`
  try {
    await fs.ensureFile(filePath);
    const csv = papa.unparse(content);
    await fs.writeFile(filePath, csv, 'utf-8')
    console.log(`File saved successfully to ${filePath}`)
  } catch (error) {
    console.error('An error occurred while saving the file:', error)
  }
}
