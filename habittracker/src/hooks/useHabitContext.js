import { useContext } from "react"
import HabitContext from "../Context/HabitContext"

export const useHabitContext = function() {
    return useContext(HabitContext);
};