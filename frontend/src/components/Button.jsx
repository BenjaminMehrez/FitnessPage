export function Button({ label, parentMethod }) {
    return (
        <>
            <button className="w-20 bg-slate-300" onClick={parentMethod}>
                {label}
            </button>
        </>
    )
}