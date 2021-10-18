import Card from './Card'
import FormSearchImg from './FormSearchImg';
import Loading from './Loading';
import { useFetchImgs } from '../hooks/useFetchImgs';

const Cards = () => {

    const [images, isLoading, handleSubmit] = useFetchImgs();

    return (
        <>
            <FormSearchImg handleSubmit={handleSubmit} />
            <hr />

            {isLoading && <Loading />}

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
