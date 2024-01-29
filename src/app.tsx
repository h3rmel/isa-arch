import { ReactNode } from 'react';

// #region Examples

// import { NormalExample } from '@/examples/normal';
// import { ContextExample } from '@/examples/isa-with-context';
// import { ContextReducerExample } from '@/examples/isa-with-context-and-reducer';
import { ZustandExample } from '@/examples/isa-with-zustand';

// #endregion

export function App(): ReactNode {
  return <ZustandExample />;
}
