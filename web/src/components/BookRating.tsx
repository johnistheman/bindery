import { useTranslation } from 'react-i18next'
import type { Book } from '../api/client'

// Community rating as "★ 4.21", followed by the ratings count when withCount
// is set. Renders nothing for a book no provider has rated.
export default function BookRating({ book, withCount = false, className }: {
  book: Pick<Book, 'averageRating' | 'ratingsCount'>
  withCount?: boolean
  className?: string
}) {
  const { t } = useTranslation()
  if (!book.averageRating || book.averageRating <= 0) return null
  const count = book.ratingsCount
    ? t('books.ratingsCount', { count: book.ratingsCount, formatted: book.ratingsCount.toLocaleString() })
    : ''
  return (
    <span className={className} title={withCount ? undefined : count || undefined}>
      ★ {book.averageRating.toFixed(2)}{withCount && count ? ` (${count})` : ''}
    </span>
  )
}
