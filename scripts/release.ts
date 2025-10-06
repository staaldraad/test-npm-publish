import { execSync } from 'child_process'

const publishCommand = `npm publish --tag canary`

execSync(publishCommand, { stdio: 'inherit' })
