export const SnackBar = ({title, content, type})=>{

    return(
        <div className={`snackbar ${type} w-[50%] fixed bottom-5 z-40 p-5 left-[25%] flex justify-between rounded text-white font-bold`}>
            <p><b>{title}</b> {content}</p>
            <button onClick={()=>{
                document.querySelector('.snackbar').classList.add('hidden')
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

        </div>
    )
}