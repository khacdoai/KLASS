// app/task-isr/[id]/page.tsx
import React from 'react';

export const revalidate = 60; // ISR: regenerate every 60s

async function fetchTask(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

export default async function TaskISRPage({ params }: { params: { id: string } }) {
  const task = await fetchTask(params.id);

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 border">
      <h1 className="text-2xl font-semibold text-purple-700 mb-4">📄 Task Detail (ISR)</h1>

      <div className="space-y-3">
        <p>
          <span className="font-medium text-gray-600">🆔 ID:</span>{' '}
          <span className="text-gray-800">{task.id}</span>
        </p>
        <p>
          <span className="font-medium text-gray-600">📌 Title:</span>{' '}
          <span className="text-gray-800">{task.title}</span>
        </p>
        <p>
          <span className="font-medium text-gray-600">✅ Completed:</span>{' '}
          <span
            className={
              task.completed
                ? 'text-green-600 font-semibold'
                : 'text-yellow-600 font-semibold'
            }
          >
            {task.completed ? 'Yes' : 'No'}
          </span>
        </p>
      </div>
    </div>
  );
}
