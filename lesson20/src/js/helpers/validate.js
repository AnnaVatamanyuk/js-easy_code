const regExpDic = {
    email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
    password: /^[0-9a-zA-Z]{4,}$/,
};


function validate(elem){
    const regExpName = elem.dataset.required;
    return regExpDic[regExpName].test(elem.value)
}

export function validateForm(email, password) {
    const emailError = validate(email) ? null : 'Введите email';
    const passwordError = validate(password) ? null : 'Введите password';
    if (!emailError && !passwordError){
        return false;
    }
    return {
        email: emailError,
        password: passwordError,
    }
}