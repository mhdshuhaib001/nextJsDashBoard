'use client';

import { useSearchParams, useRouter } from 'next/navigation';

export default function SearchAndFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentQuery = searchParams.get('query') || '';
  const currentStatus = searchParams.get('status') || '';

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const status = e.target.value;
    const params = new URLSearchParams(searchParams);

    if (status) {
      params.set('status', status);
    } else {
      params.delete('status');
    }
    params.set('page', '1');

    router.push(`/dashboard/invoices?${params.toString()}`);
  };

  return (
    <div className="flex gap-2">
      {/* You might already have a Search component; use it here */}
      {/* <Search placeholder="Search invoices..." /> */}

      <select
        name="status"
        className="rounded border border-gray-300 px-2 py-1 text-sm text-gray-700"
        onChange={handleStatusChange}
        defaultValue={currentStatus}
      >
        <option value="">All</option>
        <option value="paid">Paid</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
}
