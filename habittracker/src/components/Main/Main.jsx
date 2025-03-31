import { HabitList } from "../HabitList/HabitList";
import { HabitProgress } from "../HabitProgress/HabitProgress";
import { NewHabit } from "../NewHabit/NewHabit";

export const Main = function () {

  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-screen">
      <p className="text-gray-600 dark:text-gray-900">Sun 1 March 2022</p>
      <span className="text-lg font-bold text-slate-600 dark:text-slate-900">
        Hello, <span className="text-orange-500">Susy</span>
      </span>


      <div className="w-full max-w-lg mt-6">
        <HabitProgress />
      </div>
      <div className="w-full max-w-lg mt-6">
        <HabitList />
      </div>

      <NewHabit />
    </div>
  );
};
