/** @jsx jsx */
import { jsx } from 'theme-ui'
// import posed from 'react-pose'
// // Full React Pose Text documentation can be found at
// // https://popmotion.io/pose/api/react-pose-text

// const AniHeader = posed.h1({
//   exit: { opacity: 0, y: 20, x: '-150%' },
//   enter: {
//     opacity: 1,
//     y: 0,
//     x: '0',
//   },
// })

export default ({ children, fontSize = '2.2em' }) => (
  <h1
    sx={{
      fontSize,
      textAlign: 'center',
      fontFamily: 'roboto',
      fontWeight: 900,
      backgroundColor :'trim',
      width : '100%',
      color: 'white',

      letterSpacing: ['18px', '100px', '130px' ],
    }}
    initialPose="exit"
    pose="enter"
  >
    {children}
  </h1>
)
