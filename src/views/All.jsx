import { useEffect, useState} from "react";
import {Card} from "../components/Card.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {addPannier} from "../store/slice/pannierSlice.jsx";
import {addProduct} from "../store/slice/productSlice.jsx";
import {SnackBar} from "../components/SnackBar.jsx";

export const All = ()=>{
    const [products, setProducts] = useState([])
    const category = useSelector((state)=>state.rootReducer.category.value )
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [openSnack, setOpenScnak] = useState(false)
    const [snackTitle, setSnackTitle] = useState()
    const getProducts = async ()=>{
        let response
        if (category){
             response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
        }else {
             response = await fetch('https://fakestoreapi.com/products')
        }
        const data =await response.json()
        setProducts(data)
    }

    useEffect(()=>{
        getProducts()
    }, [category])

    const handleProducts = (id)=>{
        console.log("id => "+ id)
    }
    return(
        <>
            {openSnack && <SnackBar title={snackTitle} content={"à été ajouté au panier"} type={'bg-green-500'}/>}
            <div className="p-10">
                <div className="grid grid-cols-3 gap-8 ">
                    {products.map((product)=>(
                        <Card {...product} key={product.id} details={()=>{
                            handleProducts(product.id)
                            navigate(`/products/${product.id}`)

                        }} pannier={()=>{
                            dispatch(addPannier())
                            dispatch(addProduct(JSON.stringify(product)))
                            setSnackTitle(product.title)
                            setOpenScnak(true)
                            setTimeout(()=>{
                                document.querySelector('.snackbar') && document.querySelector('.snackbar').classList.add('hidden')
                                setOpenScnak(false)
                            }, 3000)
                        }}/>
                    ))}

                </div>
            </div>
        </>
    )
}