import Button from './button'

export default class GoodItem {
	name = ''
	price = 0
	counter = 1
	_bascketList = null

	constructor({ name, price }, Basket) {
		this.name = name
		this.price = price
		this._bascketList = Basket
	}

	render(placeToRender) {
		if (placeToRender) {
			const block = document.createElement('div')
			block.classList.add('item')
			const itemPict = document.createElement('img')
			itemPict.classList.add('item-picture')
			itemPict.setAttribute('src', '#')
			itemPict.setAttribute('alt', `${this.name}`)
			itemPict.setAttribute('width', '120px')
			itemPict.setAttribute('height', '120px')
			const itemName = document.createElement('h2')
			itemName.innerHTML = `${this.name}`
			const itemPrice = document.createElement('span')
			itemPrice.classList.add('price')
			itemPrice.innerHTML = `${this.price} $`
			const addButton = new Button('В корзину', () => {
				this._bascketList.add(new GoodItemInBascket(this))
			})

			block.appendChild(itemPict)
			block.appendChild(itemName)
			block.appendChild(itemPrice)
			block.appendChild(addButton.getTemplate())
			placeToRender.appendChild(block)
		}
	}
}