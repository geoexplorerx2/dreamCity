import { FC } from "react"
const Fade = require("react-reveal/Fade")

const SecondGameContent: FC = () => {
    return (<div>
        <Fade bottom cascade >
            <h1 className='text-2xl font-medium mb-5 text-black'>WORKING AS A BARISTA</h1>

        </Fade>
        <Fade bottom cascade >
            <p>
                Making money is crucial in the Dream City game. As we progress through the story, we&apos;ll often need to buy something or pay for different services. That&apos;s why we sometimes have to work different jobs. One such job is working as a barista at a café. At Bistro and Brew, we have to make all the delicious coffees, prepare sandwiches, or choose the right orders as mini-games. We need to select the correct ingredients in the right order and manner using mouse and keyboard arrows within the given time. Working at the café is an enjoyable and interactive way to earn money. It&apos;s an opportunity to learn about different types of coffee and how to prepare them. Also, it teaches us about the importance of time management, as we need to fulfill customer orders quickly and efficiently.
            </p>

        </Fade>
    </div>)
}

SecondGameContent.displayName = 'SecondGameContent'

export default SecondGameContent