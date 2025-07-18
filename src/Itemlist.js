import react from 'react';
const items = ['apple', 'banana', 'orange'];
const Itemlist = () => (
    <ul>
        {
            items.map(item => (
                <li key={item}>{item}</li>
            ))
        }
    </ul>

    
    );


export default Itemlist;