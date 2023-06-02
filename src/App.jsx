import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./views/Layout/Layout.jsx";
import {All} from "./views/All.jsx";
import {Login} from "./views/Login.jsx";
import {AppCat} from "./context/MyCat.jsx";
import {store} from "./store/store.jsx";
import {Provider} from "react-redux"
import {Product} from "./views/Product.jsx";
import {Panier} from "./views/Panier.jsx";


function App() {


  return (
    <>
     <BrowserRouter>
         <AppCat>
             <Provider store={store}>
                 <Routes>
                     <Route path="/" element={<Layout/>}>
                         <Route path="/" index element={<All/>}/>
                         <Route path="/login" element={<Login/>}/>
                         <Route path="products/:id" element={<Product/>}/>
                         <Route path="/panier" element={<Panier/>}/>
                     </Route>
                 </Routes>
             </Provider>
         </AppCat>
     </BrowserRouter>
    </>
  )
}

export default App
