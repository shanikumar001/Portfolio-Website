const Project = () => {

    const data = [
       { title : 'Emoji',
        discription : 'This is an amazing Atrificial Emoji with Expression',
        img : 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg',
        link : 'emotion-based-emoji-expression-4fybw6gtl.vercel.app',
       },
       { title : 'Emoji',
        discription : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere voluptates impedit modi quisquam ipsum sit ',
        img : 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg',
        link : 'emotion-based-emoji-expression-4fybw6gtl.vercel.app',
       },
       { title : 'Weather App',
        discription : 'This is an amazing Atrificial Emoji with Expression',
        img : 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg',
        link : 'https://smart-emojji-geqor1azc-shani-kumars-projects-838deea4.vercel.app/',
       },
       { title : 'Scintefic Calculator',
        discription : 'This is an amazing Atrificial Emoji with Expression',
        img : 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg',
        link : 'https://smart-emojji-geqor1azc-shani-kumars-projects-838deea4.vercel.app/',
       }
    ]

    return(
        <div className=" h-full ">
        <div className="flex overflow-auto max-h-180 flex-wrap justify-start gap-10 w-full py-10 px-20">
           {
            data.map((item, i) => (
                <div key={i} className="border-[0.1px] border-orange-900/50 h-120 w-100  bg-[#111] rounded-[8px] py-4 px-2 shadow-lg shadow-black transition-all duration-300  hover:shadow-orange-900/20 hover:shadow-xl hover:scale-105 animate-card-scale">
                    <div className="">
                        <h3 className="font-mono text-[16px] pl-5 text-slate-200">Project{i+1}</h3>
                        <h3 className="font-mono text-[24px] mt-2 mb-2 text-orange-600/80 text-center">{item.title}</h3>
                        <div className="flex justify-center items-center">
                            <img className="h-50 rounded-[10px]" src={item.img} alt={`project ${i}`} />
                        </div>
                        <p className="mt-2 font-mono text-[16px] pl-5 text-slate-200">
                            {item.discription}
                        </p>
                        <a className="font-mono text-[16px] pl-5 text-orange-500 " href={item.link}>view project</a>
                    </div>
                </div>
            ))
           }
        </div>
        </div>
    )
}

export default Project;