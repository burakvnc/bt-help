// pages/adminlogin.js

import { useState } from 'react';

export default function AdminPanel() {
    const [loginMessage, setLoginMessage] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        const username = formData.get('username');
        const password = formData.get('password');
        const credentials = username + ":" + password;
        const encodedCredentials = btoa(credentials);

        try {
            const response = await fetch("http://localhost:8000/admin/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + encodedCredentials
                },
                body: JSON.stringify(jsonData)
            });

            if (response.ok) {
                setLoginMessage("Giriş başarılı Yönlendiriliyorsunuz");
                setTimeout(() => {
                    window.location.href = "/admin/panel";
                }, 2000);
            } else {
                setLoginMessage("Kullanıcı Adı veya Şifre Hatalı");
            }
        } catch (error) {
            console.error("Error:", error);
            setLoginMessage("Giriş başarısız");
        }

        setTimeout(() => {
            setLoginMessage('');
        }, 3000);
    };

    return (
        <div className="container">
            <div className="form" id="login">
                <h1 className="form__title">BTsd Help Admin Panel</h1>
                <form onSubmit={handleLogin}>
                    <div className="form__input-group">
                        <input type="text" className="form__input" autoFocus placeholder="Kullanıcı Adı" name="username" />
                    </div>
                    <div className="form__input-group">
                        <input type="password" className="form__input" autoFocus placeholder="Şifre" name="password" />
                        <div className="padding"></div>
                        <button type="submit" className="form__button">Giriş Yap</button>
                    </div>
                    {loginMessage && <div className={loginMessage.includes('başarılı') ? 'success message' : 'error message'}>{loginMessage}</div>}
                </form>
            </div>
        </div>
    );
}
