import {useEffect, useRef} from 'react'
import _ from 'lodash'

function deepCompareEquals(a, b) {
  return _.isEqual(a, b)
}

function useDeepCompareMemoize(value) {
  const ref = useRef()

  if (!deepCompareEquals(value, ref.current)) {
    ref.current = value
  }

  return ref.current
}

function useDeepCompareEffect(callback, dependencies) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(callback, dependencies.map(useDeepCompareMemoize))
}

export default useDeepCompareEffect
