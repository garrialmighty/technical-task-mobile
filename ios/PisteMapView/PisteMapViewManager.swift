//
//  PisteMapViewManager.swift
//  TechTaskGarriNablo
//
//  Created by Garri Adrian Nablo on 29/06/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

import MapKit

@objc(PisteMapViewManager)
final class PisteMapViewManager: RCTViewManager {
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  override func view() -> UIView! {
    let mapView = PisteMapView()
    mapView.delegate = self
    return mapView
  }
}

// MARK: - MKMapViewDelegate
extension PisteMapViewManager: MKMapViewDelegate {
  func mapView(_ mapView: MKMapView, rendererFor overlay: MKOverlay) -> MKOverlayRenderer {
    let renderer = MKPolylineRenderer(overlay: overlay)
    renderer.strokeColor = UIColor.blue
    renderer.lineWidth = 2.0
    return renderer
  }
}
