import 'antd/dist/antd.css';
import ArticleList from './containers/ArticleList';
import CustomLayout from './containers/Layout';
import BaseRouter from './routes';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <CustomLayout>
        <BaseRouter/>
      </CustomLayout>
      </Router>
    </div>
  );
}

export default App;