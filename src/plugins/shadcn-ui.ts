import shadcnPlugin from '@payloadcmsdirectory/shadcn-ui'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(__filename)

export const shadcnUiConfig = shadcnPlugin({
  enableAll: true,
  customScssPath: path.resolve(dirname, '../app/(payload)/custom.scss'),
})
