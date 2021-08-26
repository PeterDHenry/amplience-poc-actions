import React from 'react'
import PushPanel from './PushPanel'
import { PushPanelProps, PushPanelListProps } from './types'

export default function PushPanelRow({
  pushPanelList,
  stackMobileLayout,
}: PushPanelListProps) {
  let cssClass = `w-pr-4 w-pl-2 w-pl-sm-4 stack-${stackMobileLayout}`
  switch (pushPanelList.length) {
    case 2: {
      cssClass = 'col-xs-12 col-sm-6 ' + cssClass
      break
    }
    case 3: {
      cssClass = 'col-xs-6 col-sm-4 ' + cssClass
      break
    }
    //TODO
    //default: {

    //break
    //}
  }
  return (
    <div className="container py-5">
      <div className="row">
        {pushPanelList.map((panel: PushPanelProps) => (
          <div key={panel._meta.deliveryId} className={cssClass}>
            <PushPanel {...panel} />
          </div>
        ))}
      </div>
    </div>
  )
}
