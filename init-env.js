/**
 * This file to be imported to init dotenv
 */

import * as dotenv from 'dotenv'
import * as url from 'url'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

dotenv.config({ path: `${__dirname}/.env` })