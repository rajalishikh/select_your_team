import React from 'react';
import Selected_details from '../Selected_details/Selected_details';

const Selected = ({show,Selected,display,deleteFunction}) => {
    return (
        <div>
            {
                show && <div> 
                
                <div>
                    {
                        Selected.map((item,idx)=><Selected_details deleteFunction={deleteFunction} key={idx} item={item}></Selected_details>)
                    }
                </div>
                <div className='border border-slate-500 w-40 text-center p-2 rounded-md'>
                <button onClick={display}  className='bg-[#E7FE29] p-2 rounded-xl font-bold '>Add More player</button>
                </div>
            </div>
            }
            
        </div>
    );
};

export default Selected;