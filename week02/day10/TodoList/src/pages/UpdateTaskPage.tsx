import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { getTasksByID, updateTask } from "../services";
import type { Task } from "../types";
import type { SubmitHandler } from "react-hook-form";

// React Icons
import { IoArrowBack, IoCalendar, IoDocumentText, IoPerson } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";

const UpdateTaskPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Task>();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        if (!id) return;
        const task = await getTasksByID(Number(id));
        reset(task);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch task:", err);
      }
    };

    fetchTask();
  }, [id, reset]);

  const onSubmit: SubmitHandler<Task> = async (data) => {
    try {
      if (!id) return;
      await updateTask(Number(id), data);
      navigate("/task");
    } catch (err) {
      console.error("Failed to update task:", err);
      alert("Error updating task");
    }
  };

  if (loading) return <div className="text-center mt-10 text-gray-500">Loading...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white px-4 py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl space-y-6"
      >
        {/* Nút Back */}
        <button
          type="button"
          onClick={() => navigate("/task")}
          className="text-indigo-600 hover:text-indigo-800 flex items-center text-sm font-medium transition mb-2"
        >
          <IoArrowBack className="mr-2 text-lg" />
          Back to Task List
        </button>

        {/* Tiêu đề */}
        <h2 className="text-3xl font-extrabold text-center text-indigo-700 flex items-center justify-center gap-2">
          <FaTasks className="text-indigo-500" />
          Update Task
        </h2>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <div className="relative">
            <IoDocumentText className="absolute top-2.5 left-3 text-gray-400" />
            <input
              {...register("title", { required: "Title is required" })}
              className="pl-10 w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Enter task title"
            />
          </div>
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            {...register("description")}
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            rows={3}
            placeholder="Enter task description"
          />
        </div>

        {/* Status & Priority */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              {...register("status")}
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            >
              <option value="to_do">To Do</option>
              <option value="in_progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
            <select
              {...register("priority")}
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
            <div className="relative">
              <IoCalendar className="absolute top-2.5 left-3 text-gray-400" />
              <input
                type="date"
                {...register("start_date")}
                className="pl-10 w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
            <div className="relative">
              <IoCalendar className="absolute top-2.5 left-3 text-gray-400" />
              <input
                type="date"
                {...register("due_date")}
                className="pl-10 w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Assignee ID */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Assignee ID</label>
          <div className="relative">
            <IoPerson className="absolute top-2.5 left-3 text-gray-400" />
            <input
              type="number"
              {...register("assignee_id", { valueAsNumber: true })}
              className="pl-10 w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Enter user ID"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg shadow transition"
        >
           Update Task
        </button>
      </form>
    </div>
  );
};

export default UpdateTaskPage;
