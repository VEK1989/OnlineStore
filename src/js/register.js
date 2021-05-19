export default class Register {
	constructor() {
		this.render()
	}

	registerPlace() {
		const registForm = document.querySelector('.activ')
		const formBody = document.createElement('div')
		formBody.classList.add('form-body')

		formBody.innerHTML = `
			<h3 class="regist-header">Регистрация</h3>
			<form action="">
				<label for= "name" >ФИО:</label>
				<input type="text" id="name" placeholder="Иванов Иван Иванович" pattern="^[а-яА-ЯёЁa-zA-Z-\ ]+$" required>
				<label for="phone">Номер телефона:</label>
				<input type="number" id="phone" placeholder="89990009900" pattern="/^\+?(\d{7,8})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d[- .]?\d\d$/" required>
				<label for="email">Email адресс:</label>
				<input type="email" id="email" placeholder="some@mail.com" required>
				<br>
				<input class= "btn" type="submit" value="Отправить">
			</form>
		`

		const btnClose = document.createElement('button')
		btnClose.classList.add('close-button')
		btnClose.innerHTML = '&#215;'
		btnClose.addEventListener('click', () => {
			registForm.classList.remove('activ')
			formBody.remove()
			document.body.style.overflow = 'scroll'
		})
		formBody.appendChild(btnClose)

		if (registForm) {
			registForm.appendChild(formBody)
			document.body.style.overflow = 'hidden'
		}
	}

	render() {
		const registerForm = document.querySelector('.basket')
		const body = document.querySelector('body')
		const registBtn = document.createElement('button')
		const registForm = document.createElement('div')
		registForm.classList.add('regist-form')
		registBtn.innerHTML = 'Регистрация'
		registBtn.classList.add('btn')
		registBtn.addEventListener('click', () => {
			registForm.classList.toggle('activ')
			this.registerPlace()
		})
		if (registerForm) {
			registerForm.appendChild(registBtn)
			body.appendChild(registForm)
		}
	}
}