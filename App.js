import React from "react"

export default function App() {

    
    const [formData, setFormData] = React.useState(
        {
            email: "",
            pass: "",
            repass: "",
            okayToEmail: true
        });
        
    function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        {formData.pass == formData.repass ? console.log("log succesfully") : console.log("pass do not match");
        };
        {formData.okayToEmail && console.log("Thanks for signing up for our newsletter!")};
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email"
                    placeholder="Email address"
                    className="form--input"
                    name="email" 
                    onChange={handleChange}
                    value={formData.email}
                />
                <input 
                    type="password"
                    name="pass"
                    value={formData.pass}
                    onChange={handleChange} 
                    placeholder="Password"
                    className="form--input"
                />
                <input 
                    type="password"
                    name="repass"
                    value={formData.repass}
                    onChange={handleChange} 
                    placeholder="Confirm password"
                    className="form--input"
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        checked={formData.okayToEmail}
                        onChange={handleChange}
                        name="okayToEmail"
                        type="checkbox"
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
