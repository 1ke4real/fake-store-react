import { useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {newCategorie, resetCategorie} from "../store/slice/categorieSlice.jsx";


export const Categories = ()=>{
    const [categories, setCategories] = useState([])
    const category = useSelector((state)=>state.rootReducer.category.value)
    const dispatch = useDispatch()

    const handleGetCatgories = async ()=>{
        const response = await fetch("https://fakestoreapi.com/products/categories")
        const data = await response.json()
        setCategories(data)
    }
    const handleList = ()=>{
        document.querySelector('.list-categories').classList.toggle('hidden')
       setTimeout(()=>{
           if(document.querySelector('.list-categories').classList.contains('hidden') !== false){
               document.querySelector('.list-categories').classList.add('hidden')
           }
       }, 10)
    }
    useEffect(()=>{
        handleGetCatgories()
    }, [])

    return (
        <>


            <div className=" px-20 pt-5 " id="cat-btn">
                <button className=" flex items-center text-white px-10 py-3 rounded font-medium transition-colors duration-200 transform bg-gray-700 rounded-b-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-700 drop-shadow-lg"
                onClick={()=>{
                    handleList()
                }}>▼ {category ? category : "Catégorie"} {category ? <span className=" cursor-pointer px-2.5"
                    onClick={()=>{
                        dispatch(resetCategorie())
                        handleList()
                    }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg></span>: '' }</button>
                <ul className="absolute mt-1.5 z-40 bg-slate-700 text-white font-medium w-[15%]  list-categories rounded drop-shadow-2xl hidden ">
                    {categories.map((value, key) => (
                        <li className="p-5 transition-colors duration-20 hover:bg-slate-600 cursor-pointer" key={key} onClick={()=>{
                            dispatch(newCategorie(value))
                            handleList()
                        }}>{value}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}