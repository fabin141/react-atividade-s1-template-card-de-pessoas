export function Profile  ({ name, age, pais, children }) {
    return (
        <div>
            <span className="Dev"> Dev: {name}
            </span>
         
            <span>
            Idade: {age}
            </span>
           
            <span>
            País: {pais}

            </span>
            {children}
        </div>
    )
}