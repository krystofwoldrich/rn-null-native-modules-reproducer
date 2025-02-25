# Null Argument in NativeModules Reproducer

```bash
yarn ios --mode Release
```

See that `RCT_EXPORT_SYNCHRONOUS_TYPED_METHOD(NSString *, call: (NSDictionary * _Nullable) name` argument name is `[NSNull null]`.

The difference between Debug and Release version of `RCT_JSON_CONVERTER` causes the nil to be converted to null.

https://github.com/facebook/react-native/blob/77889afa1c9d0bdb966102860a5d1d1d91187ae8/packages/react-native/React/Base/RCTConvert.mm#L39-L55
