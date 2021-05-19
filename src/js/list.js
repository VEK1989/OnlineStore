import FatherList from './fatherlist'
import Button from './button'
import GoodItem from './gooditem'

export default class List extends FatherList {
	_bascketList = null
	_pageCounter = 1

	constructor(Bascket) {
		super()
		this._bascketList = Bascket
		let goodsPromis = this.fetchGoods()
		goodsPromis.then(() => {
			this.render()
		})
		this.addShowMoreBtn()
	}

	addShowMoreBtn() {
		const mainPlaceRender = document.querySelector('.btn-place')
		const ButtonInst = new Button('Показать больше', () => {
			this.fetchGoods()
				.then(() => {
					this.render()
				})
		})
		if (mainPlaceRender) {
			mainPlaceRender.appendChild(ButtonInst.getTemplate())
		}
	}

	hideShowMoreBtn() {
		const addBtn = document.querySelector('.btn-place')
		addBtn.remove()
	}

	fetchGoods() {
		const result = fetch(`/database/database${this._pageCounter}.json`)
		return result
			.then(res => {
				return res.json()
			})
			.then(data => {
				this._pageCounter++
				this.items.push(...data.data.map(cur => {
					return new GoodItem(cur, this._bascketList)
				}))
			})
			.catch(e => {
				this.hideShowMoreBtn()
				console.log(e)
			})
	}

	render() {
		const placeToRender = document.querySelector('.goods-list')
		if (placeToRender) {
			placeToRender.innerHTML = ''
			this.items.forEach(good => {
				good.render(placeToRender)
			})
		}
	}
}
