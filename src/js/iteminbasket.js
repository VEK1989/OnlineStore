import GoodItem from './gooditem'

export default class GoodItemInBascket extends GoodItem {
	constructor(props) {
		super(props)
	}

	render(placeToRender) {
		if (placeToRender) {
			const block = document.createElement('div')
			block.innerHTML = `${this.name} = ${this.price} x ${this.counter}`
			placeToRender.appendChild(block)
		}
	}
}