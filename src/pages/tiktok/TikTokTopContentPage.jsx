/**
 * TikTokTopContentPage
 * ─────────────────────
 * Sortable table of all TikTok videos with per-video metrics.
 *
 * Columns: thumbnail, title, published date, views, likes, comments,
 *          shares, engagement rate, avg watch time, completion rate.
 *
 * Data:
 *   useFetch(() => tiktokService.fetchTopContent({ range }), [range])
 */

import PageHeader    from '@/components/ui/PageHeader'
import ChartCard     from '@/components/charts/ChartCard'
import DataTable     from '@/components/tables/DataTable'
import TableToolbar  from '@/components/tables/TableToolbar'

export default function TikTokTopContentPage() {
  // TODO: const { content, isLoading, error } = useFetch(...)
  // TODO: const { search, setSearch, filtered } = useTableSearch(content, ['title'])

  const columns = [
    { key: 'title',          header: 'Video',        sortable: false },
    { key: 'publishedAt',    header: 'Published',    sortable: true  },
    { key: 'views',          header: 'Views',        sortable: true, align: 'right' },
    { key: 'likes',          header: 'Likes',        sortable: true, align: 'right' },
    { key: 'comments',       header: 'Comments',     sortable: true, align: 'right' },
    { key: 'engagementRate', header: 'Eng. Rate',    sortable: true, align: 'right' },
    { key: 'avgWatchTime',   header: 'Watch Time',   sortable: true, align: 'right' },
  ]

  return (
    <div className="space-y-6">
      <PageHeader title="Top Content" subtitle="Performance breakdown by video" />

      <ChartCard title="All Videos">
        <TableToolbar
          search=""
          onSearch={() => {}}
          placeholder="Search videos…"
        />
        <DataTable
          columns={columns}
          data={[]}
          keyExtractor={(row) => row.id}
          emptyTitle="No videos found"
          emptyDescription="Try adjusting your search or date range."
        />
      </ChartCard>
    </div>
  )
}
