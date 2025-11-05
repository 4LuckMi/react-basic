import GrandChild from "./GrandChild";

type ChildProps ={
    // text: string
    childIncrese: () => void
}

export default function Child({childIncrese}:ChildProps) {
    return(
        <>
        <h1>Child Componet</h1>
        {/* <GrandChild text={text}/> */}
        <GrandChild onIncrease={childIncrese}/>

        </>
    )
}