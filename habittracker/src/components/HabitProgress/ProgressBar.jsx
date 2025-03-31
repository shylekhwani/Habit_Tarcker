export const ProgressBar = function({ percentage }) {
    return (
        <div 
            className="radial-progress text-white" 
            style={{ "--value": percentage }} 
            aria-valuenow={percentage} 
            role="progressbar"
        >
            {Math.round(percentage)}%
        </div>
    );
};
