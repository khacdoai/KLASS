import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context";
import { getTasks } from "../services";
import type { Task } from "../types";

const ListTaskPage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const result = await getTasks();
        setTasks(result);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      }
    };
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter((task) => {
    const matchTitle = task.title.toLowerCase().includes(search.toLowerCase());
    const matchPriority = priorityFilter
      ? task.priority === priorityFilter
      : true;
    return matchTitle && matchPriority;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800">📋 Task Manager</h1>
        <button
          onClick={() => navigate("/create")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg shadow transition duration-200"
        >
          + Create Task
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <input
          type="text"
          placeholder="🔍 Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none transition"
        />
        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none transition"
        >
          <option value="">🎯 All Priorities</option>
          <option value="low">⬇️ Low</option>
          <option value="medium">➡️ Medium</option>
          <option value="high">⬆️ High</option>
        </select>
      </div>

      {/* Task Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-indigo-50">
            <tr>
              <th className="px-6 py-3 text-left font-semibold text-gray-700">Title</th>
              <th className="px-6 py-3 text-left font-semibold text-gray-700">Status</th>
              <th className="px-6 py-3 text-left font-semibold text-gray-700">Priority</th>
              <th className="px-6 py-3 text-left font-semibold text-gray-700">Due Date</th>
              <th className="px-6 py-3 text-center font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredTasks.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-6 text-gray-500">
                  No tasks found.
                </td>
              </tr>
            ) : (
              filteredTasks.map((task) => (
                <tr key={task.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{task.title}</td>
                  <td className="px-6 py-4 capitalize">{task.status}</td>
                  <td className="px-6 py-4 capitalize">{task.priority}</td>
                  <td className="px-6 py-4">
                    {task.due_date
                      ? new Date(task.due_date).toLocaleDateString()
                      : "-"}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => navigate(`/update-task/${task.id}`)}
                      className="text-indigo-600 hover:text-indigo-800 font-medium transition"
                    >
                      Edit ✏️
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTaskPage;
