import {useDispatch, useSelector} from "react-redux";
import {PanierList} from "../components/PanierList.jsx";
import {removeProduct} from "../store/slice/productSlice.jsx";
import {removePannier} from "../store/slice/pannierSlice.jsx";
import {useState} from "react";
import {SnackBar} from "../components/SnackBar.jsx";

export const Panier = ()=>{
    const numberPannier = useSelector((state)=>state.rootReducer.pannier.value)
    const products = useSelector((state)=>state.rootReducer.product.value)
    const dispatch = useDispatch()
    const [openSnack, setOpenScnak] = useState(false)
    const [snackTitle, setSnackTitle] = useState()

    products.map((product)=>{
        console.log(JSON.parse(product))
    })

    return(
        <div className="px-12 py-10">
            {openSnack && <SnackBar title={snackTitle} content={"à été supprimer du panier"} type={'bg-red-500'}/>}
            <div className=" flex text-center border-2 border-slate-600 font-bold text-white">
                <span className="flex-1 p-3 bg-slate-600 ">Product</span>
                <span className="flex-1 p-3 bg-slate-600 ">Name</span>
                <span className="flex-1 p-3 bg-slate-600 ">Details</span>
                <span className="flex-1 p-3 bg-slate-600 ">Price</span>
                <span className="w-10 bg-slate-600 "></span>
            </div>
               {products.map((product)=>{
                   product = JSON.parse(product)
                   return(
                       <div key={product.id}>
                           <PanierList {...product} action={()=>{
                               dispatch(removeProduct(JSON.stringify(product)))
                               dispatch(removePannier())
                               setOpenScnak(true)
                               setSnackTitle(product.title)
                               setTimeout(()=>{
                                   document.querySelector('.snackbar').classList.add('hidden')
                                   setOpenScnak(false)
                               }, 3000)
                           }}/>
                       </div>
                   )
               })}

        </div>
    )
}