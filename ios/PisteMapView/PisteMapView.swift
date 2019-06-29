//
//  PisteMapView.swift
//  TechTaskGarriNablo
//
//  Created by Garri Adrian Nablo on 29/06/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

import MapKit

typealias PisteMapCoordinates = Array<Double>

extension CLLocationCoordinate2D {
  init(coordinates: PisteMapCoordinates) {
    self.init(latitude: coordinates[0], longitude: coordinates[1])
  }
}

final class PisteMapView: MKMapView {
  
  @objc var points: NSArray = [] {
    didSet {
      setNeedsLayout()
    }
  }
  
  override func draw(_ rect: CGRect) {
    super.draw(rect)
    
    guard let paths = points as? [[PisteMapCoordinates]] else { return }
    
    // loop through each path data
    let pathCoordinates = paths.flatMap { path -> [CLLocationCoordinate2D] in
      // add path to map
      let coordinates = path.map({ CLLocationCoordinate2D(coordinates: $0) })
      addOverlay(MKPolyline(coordinates: coordinates, count: coordinates.count))
      
      return coordinates
    }
    
    // zoom out to contain all paths
    let polyline = MKPolyline(coordinates: pathCoordinates, count: pathCoordinates.count)
    setVisibleMapRect(polyline.boundingMapRect, animated: true)
  }
}
