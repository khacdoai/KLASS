import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { createTask } from "../services";
import { useNavigate } from "react-router-dom";
import type { Task } from "../types";

const CreateTaskPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Task>();

  const onSubmit: SubmitHandler<Task> = async (data) => {
    try {
      await createTask(data);
      navigate("/task");
    } catch (err) {
      console.error("Error creating task:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Create New Task</h2>

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
            {...register("start_date", { required: "Start date is required" })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.start_date && (
            <p className="text-red-500 text-sm">{errors.start_date.message}</p>
          )}
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
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTaskPage;
