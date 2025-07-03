import type { Linter } from 'eslint'

import eslintConfig from '@azat-io/eslint-config'

export default eslintConfig() satisfies Promise<Linter.Config[]>
