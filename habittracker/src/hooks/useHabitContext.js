import { useContext } from "react"
import HabitContext from "../context/context"

export const useHabitContext = function() {
    return useContext(HabitContext);
};