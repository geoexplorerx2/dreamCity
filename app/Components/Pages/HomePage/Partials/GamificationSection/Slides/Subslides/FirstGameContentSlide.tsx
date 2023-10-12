import { FC } from "react"
const Fade = require("react-reveal/Fade")

const FirstGameContent: FC = () => {
    return (<div className="text-center lg:text-left">
        <Fade bottom cascade >
            <h1 className='text-center lg:text-left text-xl lg:text-2xl font-medium mb-5 text-white lg:text-black'>
                 TEST YOUR SHOOTING SKILLS
            </h1>
        </Fade>
        <Fade bottom cadcade>
            <p>
             Get ready to channel your inner basketball superstar in our exciting mini game! Step onto the virtual court and put your shooting skills to the test as you aim for the basket with precision and finesse. Whether you&apos;re a seasoned baller or just looking for some fast-paced fun, this game is sure to keep you entertained for hours.
            </p>
        </Fade>

    </div>)
}

FirstGameContent.displayName = 'FirstGameContent'

export default FirstGameContent