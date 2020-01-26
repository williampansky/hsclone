import { Provider } from 'react-redux';
import store from '../store';
import Header from 'components/Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

export default props => (
  <Provider store={store}>
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  </Provider>
);
