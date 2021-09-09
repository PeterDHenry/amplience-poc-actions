import React from 'react'
import PushPanel from './PushPanel'
import { PushPanelProps, PushPanelListProps } from './types'

export default function PushPanelRow({
  pushPanelList,
  stackMobileLayout,
}: PushPanelListProps) {
  let cssClass = `w-pr-4 w-pl-2 w-pl-sm-4 stack-${stackMobileLayout}`
  let height = 1
  let width = 1
  switch (pushPanelList.length) {
    case 2: {
      cssClass = 'col-xs-12 col-sm-6 ' + cssClass
      height = 38
      width = 53
      break
    }
    case 3: {
      cssClass = 'col-xs-6 col-sm-4 ' + cssClass
      break
    }
    case 4: {
      cssClass = 'col-xs-6 col-md-6 col-lg-3 ' + cssClass
      break
    }
  }
  return (
    <div className="container py-5">
      <div className="row">
        {pushPanelList.map((panel: PushPanelProps) => (
          <div
            key={panel._meta.deliveryId}
            className={`push-panel-item ${cssClass}`}
          >
            <PushPanel {...panel} height={height} width={width} />
          </div>
        ))}
      </div>
    </div>
  )
}
