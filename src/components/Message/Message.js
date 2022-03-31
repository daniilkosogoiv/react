import './message.style.css'

export const Message =({ author, text })=> {
return (
    <div class="message">
        <span>{author}</span>
        <span>{text}</span>
    </div>
)
}