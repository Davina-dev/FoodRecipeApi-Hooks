import { Route, Routes } from 'react-router-dom'
import Search from './pages/Search'
import ListFood from './pages/ListFood'

import Layout from './components/Layout'


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Search />} />
          <Route path="listFood" element={<ListFood />} />
        </Route>
      </Routes>
    </div>
    /* https://nicepage.com/t/460621/healthy-evening-template*/
  )
}
