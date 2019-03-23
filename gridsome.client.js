import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faShoppingCart, faHome, faGift, faCreditCard
} from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingCart, faHome, faGift, faCreditCard)

export default function (Vue) {
  Vue.component('font-awesome', FontAwesomeIcon)
}