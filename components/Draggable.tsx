import React from 'react'
import { Animated, PanResponder } from 'react-native'

interface IDraggable {
  children: JSX.Element
  onDropFinished?: Function
}
export default function Draggable(props: IDraggable) {
  const [show, setShow] = React.useState(true)
  const opacity = React.useRef(new Animated.Value(1)).current
  const pan = React.useRef(new Animated.ValueXY).current
  const panResponder = React.useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: pan.x, dy: pan.y },
      ], {
        useNativeDriver: false
      }),

      onPanResponderRelease: (event, gesture) => {
        if (gesture.moveY > 500) {
          Animated.timing(opacity, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }).start(() => {
            setShow(false)
            pan.setValue({ x: 0, y: 0 })
            props.onDropFinished && props.onDropFinished()
          })
        } else {
          Animated.spring(pan, { useNativeDriver: false, toValue: { x: 0, y: 0 } }).start();
        }
      },

    })
  ).current

  if (!show) {
    return null
  }

  return (<Animated.View
    style={{
      transform: [{ translateX: pan.x }, { translateY: pan.y }],
      opacity: opacity
    }}
    {...panResponder.panHandlers}
  >{props.children}</Animated.View>)
}