import {useState, useEffect, useCallback} from 'react'
import Card from './Card'

const Cards = () => {

    const [images, setImages] = useState([]);
    const [input, setInput] = useState('cats')

    const peticion = useCallback(async () => {

        const KEY = 'client_id=GF2vb5iFs_US0pa7Tky7llUWidzehtYXatU9TvBZxT0';
        let route = `https://api.unsplash.com/photos?${KEY}`;
        
        

        if(input !== ''){
            route =`https://api.unsplash.com/search/photos?query=${encodeURI(input)}&${KEY}`;
        }

        const res = await fetch(route);
        const data = await res.json();

        if(data.results){
            setImages(data.results);
        }else{
            setImages(data);
        }
    },[input]);

   
    const handleSubmit = (event) => {
        event.preventDefault();
        const text = event.target[0].value;
    
        setInput(text); 
    }

    useEffect(()=>{
         peticion();
    }, [peticion]);


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='input-group mb-3 p-3'>
                    <input className='form-control' type={'text'} name='inputText'placeholder='Buscar'/>
                    <button className='btn btn-primary' type="submit">
                        <span className="material-icons"
                            >search
                        </span>
                    </button>
                </div>
            </form>
            <hr />
            <div className="row">
            {
               images.map(element => (
               <div className="col-4 my-2 ml-2" key={element.id}>
                   {console.log(element.description)}
                    <Card 
                        imagen={element.urls.regular} 
                        description={element.description}
                        color={element.color}
                    />
               </div>
            ) )
            }
            </div>
            
        </>
    );
}

export default Cards
