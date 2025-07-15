// app/task-ssr/page.tsx
import React from 'react';
import Link from 'next/link';
import { Eye } from 'lucide-react';

async function fetchTasks() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    cache: 'no-store', // always fetch
  });
  return res.json();
}

export default async function TaskSSRPage() {
  const tasks = await fetchTasks();

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">⚡ Task List (SSR)</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-purple-600 text-white">
            <tr>
              <th className="py-2 px-4 text-left">ID</th>
              <th className="py-2 px-4 text-left">Title</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.slice(0, 10).map((task: any) => (
              <tr key={task.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{task.id}</td>
                <td className="py-2 px-4">{task.title}</td>
                <td className="py-2 px-4">
                  {task.completed ? (
                    <span className="text-green-600 font-medium">Completed</span>
                  ) : (
                    <span className="text-yellow-600 font-medium">Pending</span>
                  )}
                </td>
                <td className="py-2 px-4 text-center">
                  <Link
                    href={`/task-isr/${task.id}`}
                    className="text-purple-600 hover:text-purple-800 transition flex items-center justify-center"
                    title="View Task Detail (ISR)"
                  >
                    <Eye className="w-5 h-5" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
