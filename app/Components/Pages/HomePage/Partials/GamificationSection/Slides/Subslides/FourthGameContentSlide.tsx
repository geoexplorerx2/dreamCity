import { FC } from "react"
const Fade = require("react-reveal/Fade")

const FourthGameContentSlide: FC = () => {
    return (<div>
        <Fade bottom cascade>
            <h1 className='text-2xl font-medium mb-5 text-black text-right' style={{direction: 'ltr'}}>BIKE OR NOT!</h1>
        </Fade>
        <Fade bottom cascade>
            <p>Sometimes in the game, we need to ride a bicycle to get to certain places in the city. We can control the direction using the arrow keys on the keyboard and adjust our speed with the left mouse button while riding towards the correct destinations at the right time. Biking in the game requires good coordination and timing, and players must be careful not to crash into obstacles or other vehicles on the road. Successful navigation to the destination can earn the player rewards, while failure to reach the goal in time may result in a negative impact on the game&apos;s story. Riding a bicycle can be a fun and challenging experience in the game, and it provides players with a sense of freedom and exploration as they pedal through the virtual city.</p>
        </Fade>
    </div>)
}

FourthGameContentSlide.displayName = 'FourthGameContentSlide'

export default FourthGameContentSlide