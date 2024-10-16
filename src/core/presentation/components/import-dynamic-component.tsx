import dynamic from 'next/dynamic'

export const importDynamicComponent = (componentWrapper: any) =>
  dynamic(() => componentWrapper, {
    ssr: false
  })
