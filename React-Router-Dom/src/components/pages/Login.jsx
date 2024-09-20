export default function Login({handleLogin}) {
    return (
        <>
            <h1>Login</h1>
            <button className="btn btn-danger" onClick={handleLogin}>Giriş Yap...</button>
        </>
    )
}