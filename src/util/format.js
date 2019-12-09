import numeral from 'numeral';
import 'numeral/locales';

export default function formatPrice(price) {
  numeral.locale('pt-br');
  return numeral(price).format('$ 0,0.00');
}
