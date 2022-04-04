import React, {Fragment, useState}  from "react";

type LoginProps = {
    viewName?: string,
    username: string,
    password: string
};

function Login (props :LoginProps) {
    const  {
        viewName = 'Login',
        username,
        password
    } = props;
const [usernameValue, setUsernameValue] = useState<string>('');
const [passwordValue, setPasswordValue] = useState<string>('');
console.log(usernameValue, passwordValue);

const onSubmit = () :any => {
    const data = {
            username: usernameValue,
            password: passwordValue
    };

    console.log(data);
    }
    return (
        <>
            <form>
                <input
                    type="text"
                    placeholder='username'
                    onChange={(event) => setUsernameValue(event.target.value)}
                    />
                <input
                    type="password"
                    placeholder='password'
                    onChange={(event) => setPasswordValue(event.target.value)}
                />
                <button type='button' onClick={() => onSubmit()}>Submit</button>
            </form>
        </>
    );
}


// Export
export const USER_LOGIN = 'chat';
export const USER_REGISTER = 'abcde';
export default Login;