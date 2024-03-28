import { useState } from "react";

const AddCategory = ({setCategory}) => {
    const [value,setValue] = useState("");
    const [error, setError] = useState(false);
    const SearchGif = e =>{
        e.preventDefault();
        if (value === "") {
            setError(true);
            return;
        }
        setError(false);
        setCategory(value);
        setValue("");
        console.log("enter form");
    }
    return(
        <> 
            <div className="d-flex flex-column align-items-center m-5 buscador">
                <form onSubmit={SearchGif}>
                    <input type="text" placeholder="Buscar gif..." 
                        onChange={e => setValue(e.target.value)}
                        value= {value}
                    />
                </form>
                {error ? <p className="text-danger m-2">El campo esta vacio</p>: ""}
            </div>    
        </>
    )
}

export default AddCategory;