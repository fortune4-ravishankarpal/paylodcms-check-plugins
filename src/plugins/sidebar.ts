import { payloadEnhancedSidebar } from '@veiag/payload-enhanced-sidebar'

export const enhancedSidebarConfig = payloadEnhancedSidebar({
  tabs: [
    {
      id: 'dashboard',
      type: 'link',
      href: '/',
      icon: 'House',
      label: { en: 'Dashboard' },
    },
    {
      id: 'content',
      type: 'tab',
      icon: 'FileText',
      label: { en: 'Content' },
      collections: ['pages', 'posts', 'categories', 'media'],
    },
    {
      id: 'forms',
      type: 'tab',
      icon: 'Form',
      label: { en: 'Forms' },
      collections: ['forms', 'form-submissions'],
    },
    {
      id: 'audit',
      type: 'tab',
      icon: 'History',
      label: { en: 'Audit & Debug' },
      collections: ['audit-demo', 'redirects'],
    },
    {
      id: 'settings',
      type: 'tab',
      icon: 'Settings',
      label: { en: 'Settings' },
      collections: ['users', 'roles'],
      globals: ['header', 'footer'],
    },
  ],
})
