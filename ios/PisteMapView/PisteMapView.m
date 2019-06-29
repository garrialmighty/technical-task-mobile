//
//  PisteMapView.m
//  TechTaskGarriNablo
//
//  Created by Garri Adrian Nablo on 29/06/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(PisteMapViewManager, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(points, NSArray)
@end
