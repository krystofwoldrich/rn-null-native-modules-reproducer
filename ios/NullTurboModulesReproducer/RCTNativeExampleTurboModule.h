#import <Foundation/Foundation.h>
#import <ExampleTurboModuleSpecs/ExampleTurboModuleSpecs.h>
#import <React/RCTBridge.h>

@interface RCTNativeExampleTurboModule : NSObject
 <RCTBridgeModule> // Causes the module to register as NativeModule (Legacy) which triggeres the InteroptTurboModule
// <NativeExampleTurboModuleSpec>

@end
