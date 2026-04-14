import './global.css'
import { Navigate, Route, Routes } from 'react-router';
import { appRoutes } from './navigation/route-config';

function App() {
  return(
    <Routes>
      {appRoutes.map(({path, component: Component}) => (
        <Route key={path} path={path} element={<Component />}/>
      ))}
      <Route path="*" element={<Navigate replace to='/not-found' />} />
    </Routes>
  )
}

export default App
