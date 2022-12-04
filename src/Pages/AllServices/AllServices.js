import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Service from '../Home/Services/Service';
import Loader from '../Shared/Loader/Loader';

const AllServices = () => {

    const {data: services, isLoading} = useQuery({
        queryKey: [`services`],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/allservices`);
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Loader></Loader>
    }
    console.log(services);

    return (
        <div>
            <h2 className="text-center my-5 text-5xl font-bold text-primary capitalize">our all services</h2>
            <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-12">
                {
                    services.map(service => <Service service={service} key={service._id}></Service>)
                }
            </div>
        </div>
    );
};

export default AllServices;