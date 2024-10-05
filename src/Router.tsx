import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { Success } from './pages/Success'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} /> {/* Use index para a rota raiz */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/success/:id" element={<Success />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
