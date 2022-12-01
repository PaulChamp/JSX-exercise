const person = ({name, age, hobbies}) =>{
    return <p>
        {name.length <= 8 ? name : name.substring(0,6)}
        <h3>{age >=18 ? "please vote!" : "you must be 18+"}</h3>
        <ul>
            {hobbies.map((hobby) => <li>{hobby}</li>)}
        </ul>
    </p>
}