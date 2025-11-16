import './index.css';
import { useState } from 'react';



const Project = () => {
    const style = {
        card : 'grid items-center mx-auto text-center  p-5 bg-orange-100 rounded-[5px] min-w-60 h-70  shadow-2xl shadow-black transition-transform transition-colors duration-300 ease-in-out hover:scale-110 hover:bg-orange-200 hover:cursor-pointer bg-gradient-to-br from-white to-blue-700    sm:mx-4.6',

        img : 'border-2 border-black h-40 w-full mx-auto rounded-2xl m-1',

        h1 : 'mx-auto text-red-600 font-bold text-1xl font-serif ',

        btn : 'bg-orange-500 w-20 h-6 mx-auto rounded-[5px] text-center text-white hover:text-black hover:bg-orange-400 hover:cursor-pointer',


    }

    const imgSrc = "https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg"

    let n = 0;
    let c = `card ${n}`;

    // function btnClick (){
    //     alert("Button was clicked!!")
    //     n++
    // }
     
    let x = 10;

    const [count, setCount] = useState(0)
    const btnClick = () => {
        // alert("Button was clicked!!")
        setCount(prev => prev + 1)
    }




    return(
        <div className='grid h-[650px] w-screen items-center p-5 px-15 bg-gradient-to-br from-re to-blue-700'>

        <div className='grid mx-auto h-[700px] w-[300px] p-8 rounded-2xl overflow-scroll no-scrollbar space-y-10   sm:flex flex-wrap sm:h-[90%] sm:w-[99%] sm:space-x-1 sm:p-8 sm:items-center'>
            <div className={style.card}>
                <h1 className={style.h1}>{count}</h1>
                <img className={style.img} src={imgSrc}/>
                <button className={style.btn} onClick={() => btnClick()}>view</button>
            </div>
            <div className={style.card}>
                <h1 className={style.h1}>{count}</h1>
                <img className={style.img} src={imgSrc} />
                <button className={style.btn} onClick={() => btnClick()}>view</button>
            </div>
            <div className={style.card}>
                <h1 className={style.h1}>{count}</h1>
                <img className={style.img} src={imgSrc} />
                <button className={style.btn} onClick={() => btnClick()}>view</button>
            </div>
            <div className={style.card}>
                <h1 className={style.h1}>{count}</h1>
                <img className={style.img} src={imgSrc}/>
                <button className={style.btn} onClick={() => btnClick()}>view</button>
            </div>
            <div className={style.card}>
                <h1 className={style.h1}>{count}</h1>
                <img className={style.img} src={imgSrc} />
                <button className={style.btn} onClick={() => btnClick()}>view</button>
            </div>
            <div className={style.card}>
                <h1 className={style.h1}>{count}</h1>
                <img className={style.img} src={imgSrc} />
                <button className={style.btn} onClick={() => btnClick()}>view</button>
            </div>
            <div className={style.card}>
                <h1 className={style.h1}>{count}</h1>
                <img className={style.img} src={imgSrc}/>
                <button className={style.btn} onClick={() => btnClick()}>view</button>
            </div>
            <div className={style.card}>
                <h1 className={style.h1}>{count}</h1>
                <img className={style.img} src={imgSrc} />
                <button className={style.btn} onClick={() => btnClick()}>view</button>
            </div>
            <div className={style.card}>
                <h1 className={style.h1}>{count}</h1>
                <img className={style.img} src={imgSrc} />
                <button className={style.btn} onClick={() => btnClick()}>view</button>
            </div>
            <div className={style.card}>
                <h1 className={style.h1}>{count}</h1>
                <img className={style.img} src={imgSrc} />
                <button className={style.btn} onClick={() => btnClick()}>view</button>
            </div>
            <div className={style.card}>
                <h1 className={style.h1}>{count}</h1>
                <img className={style.img} src={imgSrc}/>
                <button className={style.btn} onClick={() => btnClick()}>view</button>
            </div>
            <div className={style.card}>
                <h1 className={style.h1}>{count}</h1>
                <img className={style.img} src={imgSrc} />
                <button className={style.btn} onClick={() => btnClick()}>view</button>
            </div>
            <div className={style.card}>
                <h1 className={style.h1}>{count}</h1>
                <img className={style.img} src={imgSrc} />
                <button className={style.btn} onClick={() => btnClick()}>view</button>
            </div>
            <div className={style.card}>
                <h1 className={style.h1}>{count}</h1>
                <img className={style.img} src={imgSrc} />
                <button className={style.btn} onClick={() => btnClick()}>view</button>
            </div>
            <div className={style.card}>
                <h1 className={style.h1}>{count}</h1>
                <img className={style.img} src={imgSrc}/>
                <button className={style.btn} onClick={() => btnClick()}>view</button>
            </div>
            <div className={style.card}>
                <h1 className={style.h1}>{count}</h1>
                <img className={style.img} src={imgSrc} />
                <button className={style.btn} onClick={() => btnClick()}>view</button>
            </div>
            <div className={style.card}>
                <h1 className={style.h1}>{count}</h1>
                <img className={style.img} src={imgSrc} />
                <button className={style.btn} onClick={() => btnClick()}>view</button>
            </div>

        </div>



        </div>
    )
}

export default Project;