import react from 'react';
const user = [
    {id: 1, name: 'Nithin', age: 25},
    {id: 2, name: 'John', age: 30},
];
const Usertable = () => (
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
        </thead>
       <tbody>
        {user.map(u =>(
            <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.age}</td>
            </tr>

        ))}
       </tbody>

    </table>
);
    export default Usertable;
