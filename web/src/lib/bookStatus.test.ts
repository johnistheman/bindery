import { describe, it, expect } from 'vitest'
import { displayStatus } from './bookStatus'

describe('displayStatus', () => {
  it('shows unmonitored for a wanted book that is not monitored', () => {
    expect(displayStatus({ status: 'wanted', monitored: false })).toBe('unmonitored')
  })

  it('keeps wanted for a monitored wanted book', () => {
    expect(displayStatus({ status: 'wanted', monitored: true })).toBe('wanted')
  })

  it('passes non-wanted statuses through regardless of monitored', () => {
    expect(displayStatus({ status: 'imported', monitored: false })).toBe('imported')
    expect(displayStatus({ status: 'downloading', monitored: true })).toBe('downloading')
    expect(displayStatus({ status: 'skipped', monitored: false })).toBe('skipped')
  })
})
