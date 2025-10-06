import { execSync } from 'child_process'

const publishCommand = `npm publish `

execSync(publishCommand, { stdio: 'inherit' })
