import useInputState from "../../useInputState";


const HookForm = () => {

    const [name,handleNameChange] = useInputState('immu hooked');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name)
    }
    return (
        <div>
            <form className=" text-2xl" onSubmit={handleSubmit}>
                <label className="ml-3" htmlFor="name">Name</label> <br />
                <input value={name} onChange={handleNameChange} className="my-2 mx-3 rounded" type="text" name="name"/>
                <br />
                <label className="ml-3" htmlFor="email">Email</label> <br />
                <input className="my-2 mx-3 rounded " type="email" name="email"/>
                <br />
                <label className="ml-3" htmlFor="password">Password</label><br />
                <input className="my-2 mx-3 rounded" type="password" name="name"/> <br />
                <button type="submit" className="btn btn-primary ml-5 mt-5 w-64 text-white font-bold">Submit</button>
            </form>
        </div>
    );
};

export default HookForm;