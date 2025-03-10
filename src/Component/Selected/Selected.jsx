import React from 'react';

const Selected = ({show}) => {
    return (
        <div>
            {
                show && <div className='flex border mt-3 p-3 rounded-xl'> 
                
                <div>
                    <h2>Name</h2>
                    <p>Category</p>
                </div>
            </div>
            }
            
        </div>
    );
};

export default Selected;