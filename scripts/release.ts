import { execSync } from 'child_process'

const publishCommand = `npm publish --provenance --tag canary`

execSync(publishCommand, { stdio: 'inherit' })
