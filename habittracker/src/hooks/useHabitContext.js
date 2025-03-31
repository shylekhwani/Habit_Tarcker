import { useContext } from "react"
import HabitContext from "../Context/Context"

export const useHabitContext = function() {
    return useContext(HabitContext);
};