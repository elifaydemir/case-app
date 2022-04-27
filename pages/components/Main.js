import React, {useEffect, useState} from "react";
import Image from 'next/image';
import CharacterList from "./CharacterList";

function Main(){
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({});
    const [paging, setPaging] = useState([]);
    const [image, setImage] = useState();
    const [name, setName] = useState();
    const [footerList, setFooterList] = useState();
    const [firstPage, setFirstPage] = useState(true);
    const page =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
    const page2= [20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42];
    const url = "https://rickandmortyapi.com/api/character";
    const fetchData = async (url) => {
        if(21<=url){
            setPaging(page2);
        }else{
            setPaging(page);
        }
        if(typeof url ==="number"){
            url = 'https://rickandmortyapi.com/api/character/?page='+url;
        }
        const res = await fetch(
            url);
        const returnData = await res.json();
        setCharacters(returnData.results);
        let arr=[];
        returnData.results.map((item,index)=>{
            if(index<4){
                arr.push(item)
            }
        })
        setFooterList(arr);
        setInfo(returnData.info);
        window.scrollTo(0, 0);

    };

    useEffect(() => {
        fetchData(url);
        setPaging(page);
    }, []);
    useEffect(() => {
        returnPaging();
    }, [paging]);

    const handleNextPage = () => {
        fetchData(info.next);
        window.scrollTo(0, 0);
    };

    const handleCallback = (bool,image,name) => {
       console.log("childData",bool,image,name)
        setFirstPage(bool);
        setImage(image);
        setName(name);

    };

    const handlePreviousPage = () => {
        fetchData(info.prev);
        window.scrollTo(0, 0);
    };
    const returnPaging = () =>{
        return(
            paging.map((item, index) => (
                    <li key={index} className="page-item">
                        <button className="page-link"  onClick={() => fetchData(item)}>
                            {item}
                        </button>
                    </li>
                ))
        )
    }
    return (
        <>
            {firstPage?(
                <>
                    <CharacterList characters={characters} parentCallback = {handleCallback} footer={false}/>
                    <div className="container pb-5">
                        <nav>
                            <ul className="pagination justify-content-center">
                                <li className="page-item">
                                    <button className="page-link" onClick={handlePreviousPage} disabled={info.prev ?undefined:true}>
                                        Previous
                                    </button>
                                </li>
                                {returnPaging()}
                                <li className="page-item">
                                    <button className="page-link" onClick={handleNextPage} disabled={info.next ?undefined:true}>
                                        Next
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </>
            ):(
                <>
                    <div className="main-container container  pr-0 pl-0">
                        <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="card content-card" >
                                            <img className="card-img-top" src={image} alt="character" />
                                            <span className="card-title"><strong>{name}</strong></span>
                                            <div className="card-body">
                                                <span className="content-text">
                                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                    Excepteur sint occaecat cupidatat non proident,
                                                    sunt in culpa qui officia deserunt mollit anim id est laborum."
                                                </span>
                                                <span className="content-text">
                                                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                    accusantium doloremque laudantium, totam rem aperiam,
                                                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                                                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                                                    nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                                    consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                                                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                                                    exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                                                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                                                    vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                                                </span>
                                            </div>
                                        </div>
                                </div>
                        </div>
                    </div>
                    <div className="main-footer">
                        <CharacterList characters={footerList} footer={true} parentCallback = {handleCallback}/>
                    </div>

                </>
            )}

        </>
    )
}
export default Main;
