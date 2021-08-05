import React from 'react'
import PushPanel, { PushPanelProps } from './PushPanel'

export interface PushPanelListProps {
  pushPanelList: PushPanelProps[]
}

export default function PushPanelRow({ pushPanelList }: PushPanelListProps) {
  return (
    <div className="container py-5">
      <div className="row">
        {pushPanelList.map((panel: PushPanelProps) => (
          <div className="col-xs-6 col-sm-4 w-pr-4 w-pl-2 w-pl-sm-4">
            <PushPanel key={panel._meta.deliveryId} {...panel} />
          </div>
        ))}
      </div>
    </div>
  )
}