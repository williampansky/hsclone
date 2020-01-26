import { Provider } from 'react-redux';
import store from '~/store';
import Header from 'components/Header';

export default props => {
  const { children } = props;
  return (
    <Provider store={store}>
      <div>
        <Header />
        {children}
      </div>
    </Provider>
  );
};
