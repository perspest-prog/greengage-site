import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { readFileSync } from 'node:fs'
import { env } from 'node:process'

import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Rates } from './globals/Rates'

const _filename = fileURLToPath(import.meta.url)
const _dirname = dirname(_filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: resolve(_dirname),
    },
  },
  collections: [Users, Media],
  globals: [Rates],
  editor: lexicalEditor(),
  secret:
    env.NODE_ENV === 'production'
      ? readFileSync('/run/secrets/payload-secret', { encoding: 'utf-8' })
      : '123213',
  typescript: {
    outputFile: resolve(_dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
})
