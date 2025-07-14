import type { CollectionConfig, PayloadRequest } from 'payload'

import { authenticated } from '../../access/authenticated'

const isAdmin = ({ req }: { req: PayloadRequest }): boolean => {
  const user = req.user as { admin?: boolean }
  return Boolean(user?.admin)
}

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    admin: isAdmin,
    create: authenticated,
    delete: isAdmin,
    read: authenticated,
    update: isAdmin,
  },
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
  },
  auth: {
    useAPIKey: true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'admin',
      type: 'checkbox',
      defaultValue: false,
      label: 'Admin User',
    },
  ],
  timestamps: true,
}
