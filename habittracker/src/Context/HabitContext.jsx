import { createContext } from "react";
import { useState } from "react";

const HabitContext = createContext();

export const HabitContextProvider = function({children}) {
    const [goal, setGoal] = useState("");
    const [habit, setHabit] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [habits, setHabits] = useState([]);
    const [checkedHabits, setCheckedHabits] = useState({});

    const toggleHabitCheck = (habit) => {
        setCheckedHabits((prev) => {
            const updatedCheckedHabits = { 
                ...prev, 
                [habit]: !prev[habit] // Toggle checked state
            };
            return updatedCheckedHabits;
        });
    };

    // Calculate checked habits count
    const completedCount = Object.values(checkedHabits).filter(Boolean).length;

    const allContextValues = {
        goal, 
        setGoal,
        habit,
        setHabit,
        openModal,
        setOpenModal,
        habits, 
        setHabits,
        checkedHabits, 
        setCheckedHabits,
        toggleHabitCheck,
        completedCount,
    };

    return (
       <HabitContext.Provider value={allContextValues}>
         {children}
       </HabitContext.Provider>
    );
};

export default HabitContext;