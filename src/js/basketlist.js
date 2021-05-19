import FatherList from './fatherlist'
import Button from './button'

export default class BascketList extends FatherList {
	constructor() {
		super()
		this.init()
	}

	init() {
		const ButtonInst = new Button('Корзина', () => {
			basketPlace.classList.toggle('clicked')
		})

		const basketPlace = document.createElement('div')
		basketPlace.classList.add('basket-place')

		const placeToBasket = document.querySelector('.basket')
		if (placeToBasket) {
			placeToBasket.appendChild(ButtonInst.getTemplate())
			placeToBasket.appendChild(basketPlace)
		}
	}

	render() {
		const placeToRender = document.querySelector('.basket-place')
		if (placeToRender) {
			placeToRender.innerHTML = ''
			if (this.items.length) {
				this.items.forEach(good => {
					good.render(placeToRender)
				})
			} else {
				placeToRender.innerHTML = 'Нет товаров в корзине!'
			}
		}
	}
}