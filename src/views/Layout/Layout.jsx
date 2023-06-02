import {Link, Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import {Categories} from "../../components/Categories.jsx";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export const Layout = ()=>{
    const params = useParams()
    const numberPannier = useSelector((state)=>state.rootReducer.pannier.value)
    const navigate = useNavigate()
    const location = useLocation()
    const [token, setToken]= useState()
    const handleConnection = async ()=>{
        if (!token){
            const response =await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: "mor_2314",
                    password: "83r5^_",
                })
            })
            const req = await response.json()
            setToken(req.token)
        }else {
            setToken(null)
            sessionStorage.removeItem('access_token')
        }
    }
    useEffect(()=>{
        token && sessionStorage.setItem('access_token', token)
    }, [token])

    useEffect(()=>{
        if ( document.querySelector('#cat-btn')){
            if (location.pathname === "/panier"){
                document.querySelector('#cat-btn').classList.add('hidden')
            }else {
                document.querySelector('#cat-btn').classList.remove('hidden')
            }
        }
    }, [location])

    return(
        <>
            <nav className="flex justify-between p-10 bg-slate-700 text-slate-50 items-center">
                <span className="uppercase font-bold">Fake store</span>
                <ul className="flex items-center">
                    <li className="px-5"><Link to="/">Home</Link></li>
                    <li className="px-5"><button className="border-2 px-3 py-1.5 rounded hover:bg-slate-600/50" onClick={()=>handleConnection()}>
                        {token ? 'Logout': 'Login'}
                    </button></li>
                    <li className="flex cursor-pointer" onClick={()=>
                        navigate('/panier')
                    }>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        <span>
                            {numberPannier}
                        </span>
                    </li>
                </ul>
            </nav>

            {!params.id ? <Categories /> : ''}
            <Outlet/>
        </>

    )
}