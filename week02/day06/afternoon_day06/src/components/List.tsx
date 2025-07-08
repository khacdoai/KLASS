import React, { useEffect, useState } from 'react'
import "tailwindcss";
import Delete from './Delete'
import Update from './Update';

const url = 'https://server.aptech.io/online-shop/customers';

type Customer = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    birthday: string;
};

type Props = {
    reload? : number
    deleteComponent?: React.ComponentType<{customerId: number; onDeleted: (id: number) => void}>
    updateComponent?: React.ComponentType<{
    customerId: number;
    onUpdated: (customer: any) => void;
    onClose: () => void;
  }>;
}

export default function List({reload = 0}: Props) {
    const [selectedCustomer, setSelectedCustomer] = React.useState<Customer | null>(null);
     const [customers, setCustomers] = useState<Customer[]>([]);
     const [loading, setloading] = useState(true);
    
     useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const reponse = await fetch(url);
                if(!reponse.ok){
                    throw new Error('Network reponse was not ok');
                }
                const data = await reponse.json();
                setCustomers(data);
                setloading(false)
            } catch (error) {
                console.error('Fethch error:', error);
            }finally{
                setloading(false);
            }
        };
        fetchCustomers();
     },[reload]);

     const handleOnSelect = (customer: any) => {
    setSelectedCustomer(customer);
     };
    const handleOnUpdated = (customer: any) => {
        setCustomers((prev) => prev.map((c: any) => (c.id === customer.id ? customer : c)));
        // Close the update form after updating
        setSelectedCustomer(null);
    };
    
  return (
    <div className='container mx-auto bg-white rounded-xl shadow-lg mb-6 p-6'>
        {loading && <p> Loading... </p>}
        <table className='w-full table-auto border-collapse text-sm' >
            <thead>
                <tr className='bg-gray-100 text-gray-700'>
                <th className='px-4 py-2 border'>ID</th>
                <th className='px-4 py-2 border'>Name</th>
                <th className='px-4 py-2 border'>Email</th>
                <th className='px-4 py-2 border'>Phone</th>
                <th className='px-4 py-2 border'>Address</th>
                <th className='px-4 py-2 border'>Birthday</th>
                <th className='px-4 py-2 border'>Action</th>
            </tr>
            </thead>
            <tbody>
                {customers?.map((customer , index) => {
                    return (
                            <tr key= {index} className='border-t hover:bg-gray-200 transition duration-200'>
                                <td className='px-4 py-2 text-right border'>{customer.id}</td>
                                <td className='px-4 py-2 border'>{customer.firstName + ' ' + customer.lastName}</td>
                                <td className='px-4 py-2 border'>{customer.email}</td>
                                <td className='px-4 py-2 border'>{customer.phoneNumber}</td>
                                <td className='px-4 py-2 border'>{customer.address}</td>
                                <td className='px-4 py-2 border'>{customer.birthday}</td> 
                                <td className='px-4 py-2 border text-center'>
                                    <Delete customerId={customer.id} onDelete={(id) => {
                                        setCustomers((prev) => prev.filter((customer: any) => customer.id !== id));
                                    }} />
                                    <button onClick={() => handleOnSelect(customer)} className='bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 transition-colors mr-2'>
                      Edit
                    </button>

                                </td>        
                            </tr>
                    )
                })}
            </tbody>      
        </table>
         {selectedCustomer && <Update customerId={selectedCustomer.id} onUpdated={handleOnUpdated} onClose={() => setSelectedCustomer(null)} />}
    </div>
   
  )
}