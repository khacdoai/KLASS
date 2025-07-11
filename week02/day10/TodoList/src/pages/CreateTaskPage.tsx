import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { createTask } from "../services";
import { useNavigate } from "react-router";
import type { Task } from "../types";

// React Icons
import { IoArrowBack, IoCalendar, IoDocumentText, IoPerson } from "react-icons/io5";
import { FcSurvey } from "react-icons/fc";

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white px-4 py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl space-y-6"
      >
        {/* Nút back */}
        <button
          type="button"
          onClick={() => navigate("/task")}
          className="text-indigo-600 hover:text-indigo-800 flex items-center text-sm font-medium transition mb-2"
        >
          <IoArrowBack className="mr-2 text-lg" />
          Back to Task List
        </button>

        {/* Tiêu đề */}
        <div className="flex justify-center">
          <h2 className="text-3xl font-extrabold text-indigo-700 inline-flex items-center">
            Create New Task <span className="ml-2"><FcSurvey /></span>
          </h2>
        </div>

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

        {/* Start Date & Due Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
            <div className="relative">
              <IoCalendar className="absolute top-2.5 left-3 text-gray-400" />
              <input
                type="date"
                {...register("start_date", { required: "Start date is required" })}
                className="pl-10 w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>
            {errors.start_date && (
              <p className="text-red-500 text-sm mt-1">{errors.start_date.message}</p>
            )}
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

        {/* Assignee */}
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

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg shadow transition"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTaskPage;
