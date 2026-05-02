'use client'

import { Button } from '@payloadcms/ui'

export default function MyActionButton() {
  return (
    <Button
      onClick={() => {
        alert('clicked')
      }}
    >
      Custom Action
    </Button>
  )
}
