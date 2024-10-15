## Logica

## Todo

- [x] Crear el componente Input con sus tipos de text - email - password
- [x] Crear el screen de Login y de register
- [x] Crear los componentes CheckBox, Button y MyIcon

## Codigo a revisar

```js
const onChangeUser = (user: string) => {
	setLoginState({ ...loginState, user })
}

const onChangeEmail = (email: string) => {
	setLoginState({ ...loginState, email })
}

const onChangePassword = (password: string) => {
	setLoginState({ ...loginState, password })
}

const onClickChecked = () => {
	setLoginState({ ...loginState, isChecked: !isChecked })
}
```
