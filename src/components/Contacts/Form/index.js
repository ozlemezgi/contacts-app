import React from 'react'
import { useState , useEffect} from 'react';

const initialFormValues = {fullname: "", phone_number: ""};

function Form({addContact , contacts}) {


const [form, setForm] = useState(initialFormValues);

//form doldurulduğunda formun içeriğini silme işlemi
useEffect(()=>{
    setForm(initialFormValues);
},[contacts]);

const onChangeInput = (e) => {
    setForm({...form,[e.target.name]:e.target.value});
}

const onSubmit = (e) => {
    // submit olduğunda form yenilenmesin
    e.preventDefault();

    if(form.fullname === "" || form.phone_number === ""){
        return false;
    }

    addContact([...contacts ,form]);

    console.log(form);
}

  return (
    <form onClick={onSubmit}>
        <div>
            <input name="fullname" placeholder='Full Name'
            value={form.fullname}
            onChange={onChangeInput}></input>
        </div>
        <div>
            <input name="phone_number" placeholder='Phone Number'
            value={form.phone_number}
            onChange={onChangeInput}></input>
        </div>

        <div className='btn'>
            <button >
                Add
            </button>
        </div>

    </form>
  )
}

export default Form