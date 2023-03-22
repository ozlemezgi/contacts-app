import React from 'react'
import List from './List'
import Form from './Form'
import { useState , useEffect} from 'react'

function Contacts () {

    const [contacts ,setContacts] = useState([
        {
        fullname:"Test1",
        phone_number:"123123"
    },{
        fullname:"Ayşe",
        phone_number:"456457"
    },{
        fullname:"Nazlı",
        phone_number:"987659"
    }


]);

    useEffect(() => {

    console.log(contacts);

    },[contacts])

  return (
    <div>

        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts}/>
     </div>
  )
}

export default Contacts 