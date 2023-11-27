import { CartItemProps } from './CartItem.props';
import styles from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';

const CartItem = (props: CartItemProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const increase = () => {
    dispatch(cartActions.add(props.id));
  };

  const decrease = () => {
    dispatch(cartActions.delete(props.id));
  };

  const remove = () => {
    dispatch(cartActions.remove(props.id));
  };

  return (
    <div className={styles['item']}>
      <div
        className={styles['image']}
        style={{ backgroundImage: `url('${props.image}')` }}></div>
      <div className={styles['description']}>
        <div className={styles['name']}>{props.name}</div>
        <div className={styles['currency']}>{props.price}&nbsp;$</div>
      </div>
      <div className={styles['actions']}>
        <button
          className={styles['button-minus']}
          onClick={decrease}>
          <img
            src="/minus-icon.svg"
            alt="decrease card"
          />
        </button>
        <div className={styles['number']}>{props.count}</div>
        <button
          className={styles['button-plus']}
          onClick={increase}>
          <img
            src="/plus-icon.svg"
            alt="add to card"
          />
        </button>
        <button
          className={styles['remove']}
          onClick={remove}>
          <img
            src="/remove-icon.svg"
            alt="remove from card"
          />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
