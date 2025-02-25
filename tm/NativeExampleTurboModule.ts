import {TurboModule, TurboModuleRegistry} from 'react-native';
import { UnsafeObject } from 'react-native/Libraries/Types/CodegenTypes';

export interface Spec extends TurboModule {
  call(name: UnsafeObject | null): string;
}

export default TurboModuleRegistry.getEnforcing<Spec>('ExampleTurboModule');
