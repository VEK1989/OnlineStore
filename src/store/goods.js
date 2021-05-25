const state = {
	data: {},
	itemOnPage: [],
	itemInBasket: [],
}

const getters = {
	getData: state => state.data,
	getItemOnPage: state => state.itemOnPage,
	getItemInBasket: state => state.itemInBasket,
}

const actions = {
	requestData({ commit }, page) {
		if (!page) {
			return
		}

		fetch(`/database/database${page}.json`)
			.then(res => {
				console.log(res)
				return res.json()
			})
			.then(data => {
				console.log(data)
				commit('setData', data)
			})
	},
	addInBasket({ state, commit }, id) {
		commit('addInBasket', id)
	}
}

const mutations = {
	setData(state, newData) {
		state.data = newData
		state.itemOnPage = Object.keys(newData).slice(0)
	},
	addInBasket(state, id) {
		state.itemInBasket.push(id)
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
}