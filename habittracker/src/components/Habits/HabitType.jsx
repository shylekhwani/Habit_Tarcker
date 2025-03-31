import { useState } from "react";

export const HabitType = function() {
    const [type, setType] = useState(""); 

    return (
        <select 
            value={type} 
            onChange={(e) => setType(e.target.value)} 
            className="select select-bordered bg-slate-200 text-slate-900"
        >
            <option value="" disabled>Select a Type</option>
            <option value="Everday">Everday</option>
            <option value="Weekly">Weekly</option>
            <option value="Twice in a month">Twice in a month</option>
        </select>
    );
};
