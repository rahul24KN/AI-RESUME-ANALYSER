import { TableSkeleton } from "../common/Loader";

export default function Table({
  headers = [],
  children,
  loading = false,
  empty = false,
  emptyMessage = "No records located."
}) {
  return (
    <div className="overflow-x-auto w-full border border-slate-200/60 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 shadow-sm">
      <table className="w-full text-left text-sm border-collapse">
        <thead>
          <tr className="bg-slate-50 dark:bg-slate-950/40 text-[10px] font-bold text-slate-400 dark:text-slate-505 uppercase tracking-wider border-b border-slate-200/60 dark:border-slate-800">
            {headers.map((h, i) => (
              <th key={i} className="px-6 py-3.5 first:pl-6 last:pr-6">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-150/60 dark:divide-slate-800/60">
          {loading ? (
            <tr>
              <td colSpan={headers.length || 1} className="px-6 py-8">
                <TableSkeleton rows={3} />
              </td>
            </tr>
          ) : empty ? (
            <tr>
              <td colSpan={headers.length || 1} className="px-6 py-10 text-center text-xs font-semibold text-slate-450 dark:text-slate-500">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            children
          )}
        </tbody>
      </table>
    </div>
  );
}
