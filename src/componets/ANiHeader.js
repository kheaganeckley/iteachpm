/** @jsx jsx */
import { jsx } from 'theme-ui'
import posed from 'react-pose'
// Full React Pose Text documentation can be found at
// https://popmotion.io/pose/api/react-pose-text

const AniHeader = posed.h1({
  exit: { opacity: 0, y: 20, x: '-150%' },
  enter: {
    opacity: 1,
    y: 0,
    x: '0',
  },
})

export default ({ children, fontSize = '2.2em' }) => (
  <AniHeader
    sx={{
      fontSize,
      textAlign: 'center',
    }}
    initialPose="exit"
    pose="enter"
  >
    {children}
  </AniHeader>
)
