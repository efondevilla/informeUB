import fs from 'fs-extra'

export async function saveFile(path: string, content: string): Promise<void> {
  try {
    await fs.writeFile(path, content)
    console.log(`File saved successfully to ${path}`)
  } catch (error) {
    console.error('An error occurred while saving the file:', error)
  }
}
