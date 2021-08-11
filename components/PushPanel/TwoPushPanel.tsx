import React from 'react'
import PushPanel from './PushPanel'
import { PushPanelProps, PushPanelListProps } from './types'

export default function PushPanelRow({ pushPanelList }: PushPanelListProps) {
  return (
    <div className="container py-5">
      <div className="row">
        {pushPanelList.map((panel: PushPanelProps) => (
          <div
            key={panel._meta.deliveryId}
            className="col-xs-12 col-sm-6 w-pr-4 w-pl-2 w-pl-sm-4"
          >
            <PushPanel {...panel} />
          </div>
        ))}
      </div>
    </div>
  )
}
