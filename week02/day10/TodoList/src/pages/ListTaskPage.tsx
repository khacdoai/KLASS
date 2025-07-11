import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../context";
import { getTasks } from "../services";
import type { Task } from "../types";
import { MdOutlineChecklist } from "react-icons/md";
import { FiSearch, FiEdit } from "react-icons/fi";

const ListTaskPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { user: _user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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

  // Filter tasks based on search and priority 

  const filteredTasks = tasks.filter((task) => {
    const matchTitle = task.title.toLowerCase().includes(search.toLowerCase());
    const matchPriority = priorityFilter
      ? task.priority === priorityFilter
      : true;
    return matchTitle && matchPriority;
  });

  const totalPages = Math.ceil(filteredTasks.length / itemsPerPage);
  const paginatedTasks = filteredTasks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 inline-flex items-center">
          <MdOutlineChecklist className="mr-2 text-indigo-600" />
          Task Manager
        </h1>
        <button
          onClick={() => navigate("/create")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg shadow transition"
        >
          + Create Task
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <div className="relative">
          <FiSearch className="absolute top-2.5 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search by title..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="pl-10 border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-indigo-400 outline-none"
          />
        </div>

        <select
          value={priorityFilter}
          onChange={(e) => {
            setPriorityFilter(e.target.value);
            setCurrentPage(1);
          }}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-indigo-400 outline-none"
        >
          <option value="">All Priorities</option>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
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
            {paginatedTasks.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-6 text-gray-500">
                  No tasks found.
                </td>
              </tr>
            ) : (
              paginatedTasks.map((task) => (
                <tr key={task.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{task.title}</td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 text-sm rounded border font-medium
                        ${
                          task.status === "to_do"
                            ? "text-gray-600 border-gray-300 bg-gray-100"
                            : task.status === "in_progress"
                            ? "text-blue-600 border-blue-300 bg-blue-50"
                            : "text-green-600 border-green-300 bg-green-50"
                        }
                      `}
                    >
                      {task.status.replace("_", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                    </span>
                  </td>

                  {/* Priority */}
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 text-sm rounded border font-medium
                        ${
                          task.priority === "low"
                            ? "text-green-600 border-green-300 bg-green-50"
                            : task.priority === "medium"
                            ? "text-yellow-600 border-yellow-300 bg-yellow-50"
                            : "text-red-600 border-red-300 bg-red-50"
                        }
                      `}
                    >
                      {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                    </span>
                  </td>

                  {/* Due Date */}
                  <td className="px-6 py-4">
                    {task.due_date ? (
                      <span
                        className={`text-sm font-semibold
                          ${
                            new Date(task.due_date) >= new Date()
                              ? "text-green-700"
                              : "text-red-600 line-through"
                          }
                        `}
                      >
                        {new Date(task.due_date).toLocaleDateString()}
                      </span>
                    ) : (
                      "-"
                    )}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => navigate(`/update-task/${task.id}`)}
                      className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-medium transition"
                    >
                      <FiEdit /> Edit
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 gap-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ListTaskPage;
