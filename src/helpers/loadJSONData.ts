import fs from 'node:fs/promises'
import path from 'node:path'

const loadJSONData = async <T>(filePath: string): Promise<T> => {
    const fullPath = path.join(process.cwd(), filePath)
    const rawData = await fs.readFile(fullPath, 'utf-8')
    const parsedJSON: T = JSON.parse(rawData)

    return parsedJSON
}

export default loadJSONData
