import { describe, it, expect } from 'vitest'
import { canonicalLanguage, languageName } from './language'

describe('canonicalLanguage', () => {
  it('folds every spelling of a language onto its ISO 639-2/B code', () => {
    for (const v of ['en', 'eng', 'EN', 'en-US', 'en_GB', 'English', ' eng ']) {
      expect(canonicalLanguage(v)).toBe('eng')
    }
    expect(canonicalLanguage('de')).toBe('ger')
    expect(canonicalLanguage('deu')).toBe('ger')
    expect(canonicalLanguage('zh-Hans')).toBe('chi')
  })

  it('passes an unknown code through lowercased and maps empty to empty', () => {
    expect(canonicalLanguage('SWE')).toBe('swe')
    expect(canonicalLanguage('')).toBe('')
    expect(canonicalLanguage(undefined)).toBe('')
  })

  it('treats names of Object.prototype members as ordinary unknown codes', () => {
    for (const v of ['constructor', 'toString', '__proto__', 'hasOwnProperty']) {
      expect(canonicalLanguage(v)).toBe(v.toLowerCase())
      expect(typeof languageName(v)).toBe('string')
    }
  })
})

describe('languageName', () => {
  it('names known languages and falls back to the code', () => {
    expect(languageName('en')).toBe('English')
    expect(languageName('fra')).toBe('French')
    expect(languageName('swe')).toBe('swe')
    expect(languageName('')).toBeNull()
  })
})
