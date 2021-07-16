import React from 'react';
import PushPanel from './PushPanel'

export default function CarouselsAll ({ pushPanelList }) {
    debugger
    return ( 
      <div className="container py-5">
        <div className="row">
          {( pushPanelList.map((panel)=>(
            <div className="col-xs-6 col-sm-4 w-pr-4 w-pl-2 w-pl-sm-4">
              <PushPanel  key={panel._meta.deliveryId}
                          {...panel}/>
            </div>
          )))}   
        </div>
      </div>
    )
};
  
