#import "RCTNativeExampleTurboModule.h"

@implementation RCTNativeExampleTurboModule

RCT_EXPORT_MODULE(ExampleTurboModule);

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeExampleTurboModuleSpecJSI>(params);
}

RCT_EXPORT_SYNCHRONOUS_TYPED_METHOD(NSString *, call: (NSDictionary * _Nullable) name) {
// - (nonnull NSString *)call:(NSDictionary * _Nullable)name {
  if ([[NSNull null] isEqual:name]) {
    return @"Argument is NSNull null";
  } else if (name == nil) {
    return @"Argument is nil";
  } else {
    return @"Argument was not null and not nil";
  }
}

@end
