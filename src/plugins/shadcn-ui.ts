import shadcnPlugin from '@payloadcmsdirectory/shadcn-ui'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(__filename)

export const shadcnUiConfig = shadcnPlugin({
  enabled: true,
  // enableAll: true, // Enables shadcn UI across all supported views
  // // If you want to enable it for specific collections instead of globally, use:
  // listView: { collections: ['users'] },
  // editView: { collections: ['users'] },

  customScssPath: path.resolve(dirname, '../app/(payload)/custom.scss'),
})
