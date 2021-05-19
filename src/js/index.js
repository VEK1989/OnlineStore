import List from './list'
import BascketList from './basketlist'
import Register from './register'
import '../style/style.scss'


const Bascket = new BascketList()
const GoodList = new List(Bascket)
const RegiterForm = new Register()
