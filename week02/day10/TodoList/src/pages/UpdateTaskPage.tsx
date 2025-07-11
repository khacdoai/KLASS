import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTasksByID, updateTask } from "../services";
import type { Task } from "../types";
import type { SubmitHandler } from "react-hook-form";

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
        reset(task); // Đổ dữ liệu vào form
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

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Update Task</h2>

        <div className="mb-4">
          <label className="block font-medium">Title</label>
          <input
            {...register("title", { required: "Title is required" })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-medium">Description</label>
          <textarea
            {...register("description")}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Status</label>
          <select
            {...register("status")}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="to_do">To Do</option>
            <option value="in_progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-medium">Priority</label>
          <select
            {...register("priority")}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-medium">Start Date</label>
          <input
            type="date"
            {...register("start_date")}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Due Date</label>
          <input
            type="date"
            {...register("due_date")}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Assignee ID</label>
          <input
            type="number"
            {...register("assignee_id", { valueAsNumber: true })}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Update Task
        </button>
      </form>
    </div>
  );
};

export default UpdateTaskPage;
