import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export const Product = ()=>{
    const params =  useParams()
    const [product, setProduct] = useState([])
    const getProducts = async()=>{
        const response = await fetch(`https://fakestoreapi.com/products/${params.id}`)
        const data = await response.json()
        console.log(product)
        setProduct(data)
    }

    useEffect(()=>{
        getProducts()
    }, [])

    return (
        <>

            <div className="grid place-items-center mx-auto gap-12 bg-slate-50 w-[50%] rounded-lg mt-5">
                <Link to="/" className="font-bold place-self-start p-3 px-12 text-lg
                ">← Retour</Link>
                <div>
                    <img src={product.image} alt="" className="h-96 object-contain p-3"/>
                </div>
                <div className="w-full">
                   <div className="p-5 text-center">
                       <h1 className=" font-medium text-xl">{product.title}</h1>
                       <p>{product.description}</p>
                       <p className="font-bold text-2xl p-3 text-blue-500">${product.price}</p>
                   </div>
                    <button className="flex items-center justify-center   w-full  py-5  font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-700 rounded-b-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20"
                             fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                        </svg>
                        <span className="mx-1">Add to cart</span>
                    </button>
                </div>
            </div>
        </>
    )
}