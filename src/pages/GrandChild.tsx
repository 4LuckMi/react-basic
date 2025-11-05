type GrandChildProps ={
    onIncrease: () => void
}

export default function GrandChild({onIncrease}: GrandChildProps) {
    return(
        <>
        <h1>GrandChild Component</h1>
        <button onClick={onIncrease}>Tambah cucu</button>
        </>
    )
}