import './message.style.css'

export const Message =({ name, lastName, age})=> {
return (
    <h3 class="message">Hello,{name} {lastName} {age}</h3>
)
}