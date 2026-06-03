// A book carries two orthogonal axes: `status` (acquisition lifecycle —
// wanted → downloading → downloaded → imported, plus skipped) and `monitored`
// (whether bindery actively pursues it). The Wanted page lists only
// status='wanted' AND monitored books, so a `wanted` book that isn't monitored
// must not be labelled "Wanted" — the pill would contradict the Wanted page,
// where the book never appears. displayStatus collapses that one case to a
// distinct 'unmonitored' display key. Purely cosmetic — the stored status is
// untouched.
export function displayStatus(book: { status: string; monitored: boolean }): string {
  if (book.status === 'wanted' && !book.monitored) return 'unmonitored'
  return book.status
}
