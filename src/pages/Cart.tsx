import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

function Cart() {
  return (
    <>
      <div>
        <h1>Cart</h1>
        <Button asChild>
          <Link to="/">back</Link>
        </Button>
      </div>
    </>
  );
}
export default Cart;
