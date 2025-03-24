import { FaRegMoon } from "react-icons/fa";
import { HiOutlinePlus } from "react-icons/hi2";
import { useForm } from "react-hook-form";
import { useDispatch,useSelector } from "react-redux";
export default function Todo() {
  const todo = useSelector((state) => state.todoList.todos); 


    const dispatch =  useDispatch()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
        reset()
        dispatch({type:"Add_todo",payload:data.todo})
      };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="todo-container bg-white  md:h-96 md:w-96 lg:h-[500px] lg:w-[500px]">
        <h1 className="text-center p-6 text-2xl">TODO LIST</h1>
<h1>TEST</h1>
        <div className="header flex p-5">
          {/* Search Bar */}
          <div className="search-bar flex col-span-8">
            <input
              type="text"
              placeholder="Search Todo"
              className="border rounded p-2 w-full border-indigo-400 focus:border-indigo-400"
            />
          </div>

          {/* Filter Options */}
          <select className="col-span-2 bg-indigo-400 text-white p-3 ml-2 cursor-pointer">
            <option>ALL</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>

          <div className="p-3 bg-indigo-400 mx-2 cursor-pointer">
            <FaRegMoon className="text-2xl  text-white cursor-pointer" />
          </div>
        </div>

        <div className="todo-list mt-4 p-7">
          {todo && todo.map((todo, index) => {
            return (
              <ul key={index}>
                <li className="border-b-2 p-3">
                  <input type="checkbox" className="cursor-pointer" />
                  <span className="text-lg p-5">{todo.task}</span>
                </li>
              </ul>
            );
          })}
        </div>

        {/* Footer */}
        <div className="footer p-4">
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="Add-todo flex justify-between items-end p-2">
            <input
              type="text"
              placeholder="ENTER TODO"
              className="border rounded p-2 w-80 border-indigo-400 focus:border-indigo-400"
              {...register("todo", { required: "Todo is required" })}
            />
            <div className="bg-indigo-400 p-2 rounded-full">
              <button type="submit">
                <HiOutlinePlus className="text-2xl text-white cursor-pointer" />
              </button>
            </div>
          </form>
          {errors.todo && <p className="text-red-500">{errors.todo.message}</p>}


      </div>
    </div>
    </div>
  );
}
