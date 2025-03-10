import React from 'react';
import Selected_details from '../Selected_details/Selected_details';

const Selected = ({show,Selected}) => {
    return (
        <div>
            {
                show && <div> 
                
                <div>
                    {
                        Selected.map((item,idx)=><Selected_details key={idx} item={item}></Selected_details>)
                    }
                </div>
            </div>
            }
            
        </div>
    );
};

export default Selected;