import React , {useState , useEffect} from "react";
import bg from '../../assets/img2.jpg'
import bg3 from '../../assets/img3.jpg'
import bg4 from '../../assets/img11.jpg'
import bg5 from '../../assets/img8.jpg'
import bg6 from '../../assets/img10.jpg'
import avatar from '../../assets/img6.jpg'
/* Icons React */
import {FiArrowLeft , FiArrowRight} from 'react-icons/fi'
import {AiFillStar} from 'react-icons/ai'
import {BiShowAlt} from 'react-icons/bi'
import {MdPlayCircleOutline} from 'react-icons/md'
import './Course.css'
function Course(){
    const [Courses , SetCourses] = useState([
        {id:1 , Title:"UX DESGINE & USER EXPERINECE" , Background_Img:bg , Price_Before:"99.9" , Price_After:"49.99" , Auth:{name:"Alex Helse" , avatar:avatar} , Views:"28.500" , Lectures:"39" , rating:"4.7" ,Create_At:"19/12/2020"  },
        {id:0 , Title:"UX DESGINE & USER EXPERINECE" , Background_Img:bg , Price_Before:"99.9" , Price_After:"49.99" , Auth:{name:"Alex Helse" , avatar:avatar} , Views:"28.500" , Lectures:"39" , rating:"4.7" ,Create_At:"19/12/2020"  },
        {id:2 , Title:"UX DESGINE & USER EXPERINECE" , Background_Img:bg3 , Price_Before:"99.9" , Price_After:"49.99" , Auth:{name:"Alex Helse" , avatar:avatar} , Views:"28.500" , Lectures:"39" , rating:"4.7" ,Create_At:"19/12/2020"  },
        {id:3 , Title:"UX DESGINE & USER EXPERINECE" , Background_Img:bg4 , Price_Before:"99.9" , Price_After:"49.99" , Auth:{name:"Alex Helse" , avatar:avatar} , Views:"28.500" , Lectures:"39" , rating:"4.7" ,Create_At:"19/12/2020"  },
        {id:4 , Title:"UX DESGINE & USER EXPERINECE" , Background_Img:bg5 , Price_Before:"99.9" , Price_After:"49.99" , Auth:{name:"Alex Helse" , avatar:avatar} , Views:"28.500" , Lectures:"39" , rating:"4.7" ,Create_At:"19/12/2020"  },
        {id:5 , Title:"UX DESGINE & USER EXPERINECE" , Background_Img:bg6, Price_Before:"99.9" , Price_After:"49.99" , Auth:{name:"Alex Helse" , avatar:avatar} , Views:"28.500" , Lectures:"39" , rating:"4.7" ,Create_At:"19/12/2020"  },
        {id:6 , Title:"UX DESGINE & USER EXPERINECE" , Background_Img:bg6, Price_Before:"99.9" , Price_After:"49.99" , Auth:{name:"Alex Helse" , avatar:avatar} , Views:"28.500" , Lectures:"39" , rating:"4.7" ,Create_At:"19/12/2020"  },
        {id:7 , Title:"UX DESGINE & USER EXPERINECE" , Background_Img:bg6, Price_Before:"99.9" , Price_After:"49.99" , Auth:{name:"Alex Helse" , avatar:avatar} , Views:"28.500" , Lectures:"39" , rating:"4.7" ,Create_At:"19/12/2020"  },
        {id:7 , Title:"UX DESGINE & USER EXPERINECE" , Background_Img:bg6, Price_Before:"99.9" , Price_After:"49.99" , Auth:{name:"Alex Helse" , avatar:avatar} , Views:"28.500" , Lectures:"39" , rating:"4.7" ,Create_At:"19/12/2020"  },
        {id:7 , Title:"UX DESGINE & USER EXPERINECE" , Background_Img:bg6, Price_Before:"99.9" , Price_After:"49.99" , Auth:{name:"Alex Helse" , avatar:avatar} , Views:"28.500" , Lectures:"39" , rating:"4.7" ,Create_At:"19/12/2020"  },
        {id:8 , Title:"UX DESGINE & USER EXPERINECE" , Background_Img:bg6, Price_Before:"99.9" , Price_After:"49.99" , Auth:{name:"Alex Helse" , avatar:avatar} , Views:"28.500" , Lectures:"39" , rating:"4.7" ,Create_At:"19/12/2020"  },
        {id:9 , Title:"UX DESGINE & USER EXPERINECE" , Background_Img:bg6, Price_Before:"99.9" , Price_After:"49.99" , Auth:{name:"Alex Helse" , avatar:avatar} , Views:"28.500" , Lectures:"39" , rating:"4.7" ,Create_At:"19/12/2020"  },
        {id:10 , Title:"UX DESGINE & USER EXPERINECE" , Background_Img:bg6, Price_Before:"99.9" , Price_After:"49.99" , Auth:{name:"Alex Helse" , avatar:avatar} , Views:"28.500" , Lectures:"39" , rating:"4.7" ,Create_At:"19/12/2020"  },
        {id:11 , Title:"UX DESGINE & USER EXPERINECE" , Background_Img:bg6, Price_Before:"99.9" , Price_After:"49.99" , Auth:{name:"Alex Helse" , avatar:avatar} , Views:"28.500" , Lectures:"39" , rating:"4.7" ,Create_At:"19/12/2020"  },
        {id:11 , Title:"UX DESGINE & USER EXPERINECE" , Background_Img:bg6, Price_Before:"99.9" , Price_After:"49.99" , Auth:{name:"Alex Helse" , avatar:avatar} , Views:"28.500" , Lectures:"39" , rating:"4.7" ,Create_At:"19/12/2020"  },
        {id:11 , Title:"UX DESGINE & USER EXPERINECE" , Background_Img:bg6, Price_Before:"99.9" , Price_After:"49.99" , Auth:{name:"Alex Helse" , avatar:avatar} , Views:"28.500" , Lectures:"39" , rating:"4.7" ,Create_At:"19/12/2020"  },
        {id:11 , Title:"UX DESGINE & USER EXPERINECE" , Background_Img:bg6, Price_Before:"99.9" , Price_After:"49.99" , Auth:{name:"Alex Helse" , avatar:avatar} , Views:"28.500" , Lectures:"39" , rating:"4.7" ,Create_At:"19/12/2020"  },
        {id:11 , Title:"UX DESGINE & USER EXPERINECE" , Background_Img:bg6, Price_Before:"99.9" , Price_After:"49.99" , Auth:{name:"Alex Helse" , avatar:avatar} , Views:"28.500" , Lectures:"39" , rating:"4.7" ,Create_At:"19/12/2020"  },
        {id:11 , Title:"UX DESGINE & USER EXPERINECE" , Background_Img:bg6, Price_Before:"99.9" , Price_After:"49.99" , Auth:{name:"Alex Helse" , avatar:avatar} , Views:"28.500" , Lectures:"39" , rating:"4.7" ,Create_At:"19/12/2020"  },

    ])
    const [active , setActive] = useState({min:0 , max:4 })
    // console.log({max:activeNow.max , C:Courses.length});

    useEffect(()=>{
        // const xhr = new XMLHttpRequest();
        // xhr.open("GET" , 'http://localhost:3001/Course/All')
        // xhr.onload = data =>{
        //     console.log(data);
        // }
        // xhr.onerror = function(e){
        //     console.log(e)
        // }
        // xhr.send(null)
        var xhr = new XMLHttpRequest();
        var json_obj, status = false;
        xhr.open("GET", "http://localhost:3001/course/All", true);
        xhr.onload = function (e) {
          console.log(JSON.parse(e.target.response))
        }.bind(this);
        xhr.onerror = function (e) {
          console.error(xhr.statusText);
        };
        xhr.send(null);
    },[])

   async function Next_Slider(){
     
         if(active.max  <= Courses.length){
            setActive({min:active.min + 4 , max:active.max + 4})
        }
        if(active.max >= Courses.length){
            setActive({min:0 , max:4})
        }

     
    }

    function Back_Slider(){
         if(active.min > 0 ){
            setActive({min:active.min - 4 , max:active.max - 4})

         }
        
    }

    return(
        <div className='course'>
            <h1 id='title'>Find The Right Online Course For You</h1>
            <div className="Slider">
                {Courses.slice(active.min , active.max).map(course =>{
                    return(
                        <div key={course._id} className="Card">
                            <div className="rating">
                                <AiFillStar id='star'></AiFillStar>
                                <p>{course.rating} (50)</p>
                            </div>
                            
                            <div className="Img">
                                <img id='background' src={course.Background_Img}></img>
                            </div>
                            
                            <div className="title">
                                <p>{course.Title}</p>
                            </div>
                            
                            <div className="details">
                                <div className="Author">
                                    <img id='avatar' src={course.Auth.avatar}></img>
                                    <p id='name'>{course.Auth.name}</p>
                                </div>

                                <div className="Price">
                                    <span id='before'>{course.Price_Before}</span>
                                    <span id='after'>{course.Price_After}</span>
                                </div>
                            </div>
                            <div className="Views">
                               <div>
                                     <BiShowAlt></BiShowAlt>
                                     <span>{course.Views}</span>
                                </div>
                                <div>
                                    <MdPlayCircleOutline></MdPlayCircleOutline>
                                    <span>{course.Lectures}  Lectures</span>
                                </div>
                            </div>
                        </div>
                    )
                })}

                <div>

                </div>
               
            </div>
            <div className="Arrows">
                <FiArrowLeft onClick={Back_Slider}></FiArrowLeft>
                <FiArrowRight onClick={Next_Slider}></FiArrowRight>
            </div>
        </div>
    )
}

export default Course;