function LocalData({ users }) {

    return (
        <div>
            <h2>Local Data</h2>
            {users.map((u, index) => ( // map() - loop data 
                <p key={index}>{u}</p> // unique id 
            ))}
        </div>
    );
}

export default LocalData; 