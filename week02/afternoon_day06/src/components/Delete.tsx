import React from 'react'

const url = 'https://server.aptech.io/online-shop/customers'

type Props = {
    customerId: number;
    onDelete?: (id: number) => void;
}

export default function Delete({customerId, onDelete}: Props) {
    const handleOnDelete = async (id: number) => {
        try {
            if (!confirm ('Are you sure you wany to delete thí customer')) {
                console.log('Delete operation cancelled');
                return;
            }
            const response = await fetch(`${url}/${id}` , {
                method: 'DELETE',
            });
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Customer deleted successfully:', data);
            if (onDelete && typeof onDelete === 'function') {
                onDelete(id);
            }
        }catch (error) {
            console.log(error);
        }
    };
  return (
    <button  className="bg-red-500 text-white py-1 px-2 rounded hover:bg-blue-600 transition-colors mr-2" onClick={() => handleOnDelete(customerId)}>Delete</button>
  )
}