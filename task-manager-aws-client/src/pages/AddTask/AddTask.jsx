import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

const AddTask = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addTask = (entries) => {
    const task = {
      ...entries,
      email: user.email,
      status: "To Do",
    };
    const toastId = toast.loading("Adding task...");
    axiosSecure
      .post("/tasks", task)
      .then((res) => {
        toast.success("Task added successfully", { id: toastId });
        console.log(res);
        navigate("/dashboard/tasksList");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Task was not added", { id: toastId });
      });
    console.log(task);
  };
  return (
    <div className="container px-2 mx-auto mt-10 mb-10">
      <Helmet>
        <title>Tasky | Add Task</title>
      </Helmet>
      <div className="hero">
        <div className="flex-col lg:flex-row-reverse hero-content">
          <div className="max-w-[300px]">
            <img className="" src="/travel-selfie.gif" alt="" />
          </div>
          <div className="flex-shrink-0 border-2 border-yellow-500 shadow-xl card">
            <form
              onSubmit={handleSubmit((data) => addTask(data))}
              className="card-body"
            >
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                <div className="md:col-span-2 form-control">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    {...register("title", { required: true })}
                    type="text"
                    placeholder="Task Title"
                    className="input input-bordered"
                  />
                  {errors.title && (
                    <p className="text-red-500">Title is required.</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Deadline</span>
                  </label>
                  <input
                    {...register("deadline", { required: true })}
                    type="date"
                    placeholder="Deadline"
                    className="input input-bordered"
                  />
                  {errors.deadline && (
                    <p className="text-red-500">Deadline is required.</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Priority</span>
                  </label>
                  <input
                    {...register("priority", { required: true })}
                    type="text"
                    placeholder="Low, Moderate, High etc"
                    className="input input-bordered"
                  />
                  {errors.priority && (
                    <p className="text-red-500">Priority is required.</p>
                  )}
                </div>
                <div className="md:col-span-2 form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered"
                    placeholder="description"
                    {...register("description", { required: true })}
                  ></textarea>
                  {errors.description && (
                    <p className="text-red-500">Description is required.</p>
                  )}
                </div>
              </div>

              <div className="mt-6 form-control">
                <button className="bg-yellow-500 hover:opacity-90 text-white text-xl md:text-3xl h-[60px] px-[20px] rounded-lg">
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
