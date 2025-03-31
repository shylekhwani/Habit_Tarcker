import { useContext } from "react"
import HabitContext from "../context/Context"

export const useHabitContext = function() {
    return useContext(HabitContext);
};