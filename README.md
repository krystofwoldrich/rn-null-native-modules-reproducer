# Null Argument in NativeModules Reproducer

```bash
yarn ios --mode Release
```

See that `RCT_EXPORT_SYNCHRONOUS_TYPED_METHOD(NSString *, call: (NSDictionary * _Nullable) name` argument name is `[NSNull null]`.
