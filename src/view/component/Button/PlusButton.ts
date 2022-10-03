import counterStore from 'src/store/CounterStore';
import Button from './Button';

export default class PlusButton extends Button {
  constructor() {
    super({
      children: '+',
      onClick: () => {
        try {
          counterStore.plus();
        } catch ({ message }) {
          alert(message);
        }
      },
    });
  }
}
