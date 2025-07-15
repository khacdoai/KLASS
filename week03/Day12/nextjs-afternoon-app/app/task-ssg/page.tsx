// app/task-ssg/page.tsx
import React from 'react';
import Link from 'next/link';
import { Eye } from 'lucide-react';

export const dynamic = 'force-static';

async function fetchTasks() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    cache: 'force-cache', // use static cache
  });
  return res.json();
}

export default async function TaskSSGPage() {
  const tasks = await fetchTasks();

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">📦 Task List (SSG)</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-green-600 text-white">
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
                    className="text-green-600 hover:text-green-800 transition flex items-center justify-center"
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
