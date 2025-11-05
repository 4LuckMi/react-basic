import "./Button.css"

export default function Button({variant = 'primary',size = 'big'}) {
    const Size = `${variant} ${size}`

    return <button className={Size}>Click Me</button>
}