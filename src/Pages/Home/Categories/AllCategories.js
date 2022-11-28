import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';



const AllCategories = () => {

    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`https://assignment-hero-twelfth-server.vercel.app/categories`);
            const data = await res.json();
            return data;
        }
    });

    if(isLoading){
        return <Loading></Loading>
    }

    console.log(products);
    return (

        <div className='text-center'>
            <div className="card-body w-100 justify center">
            <div className="card-actions justify-center my-20 text-4xl text-orange-600 font-semibold">
             Resale  SmartPhone Categories
                </div>
                      
                <div className="justify-center my-5">
                    
                {
                    products.map(product=>
                        <div className="card-actions justify-center my-5">
                        <Link to={`/${product.categoryName}`}>
                        <button className="btn btn-primary px-90 text-3xl"><p> {product.categoryName} </p></button>
                        
                    </Link>
                    </div>
                        )
                }

                    
                </div>              
            </div>
        </div>

// {`/${product._id}`}{`/product._id`}
        // {
        //     products.data.map(product=><Product 
        //         key={product.id}
        //         product={product}
        //         ></Product>)
        // }
    );
};

export default AllCategories;