import { FC } from "react"
const Fade = require("react-reveal/Fade")

const ThirdGameContent: FC = () => {
    return (<div>
        <Fade bottom cascade >
            <h1 className='text-2xl font-medium mb-5 text-black text-right' style={{direction: 'ltr'}}>3-2-1 FIGHT!</h1>

        </Fade>
        <Fade bottom cascade >
            <p>In the game, sometimes the main character will have to fight. Players fight by quickly pressing combinations towards the arrow directions. When these combinations are pressed correctly, players can harm their opponents. However, they can also be harmed if they make mistakes.
                The algorithm and ease of these combinations are directly related to the main character&apos;s physical fitness. It is important to regularly work out at the Madison Sports Center and check our condition with the MyFitBody app. If our condition is strong, the button combinations during fights become easier and it becomes harder for us to be defeated. The results of the fights can affect the story in the game. For example, if we cannot beat a character we fought, that character may become more hostile towards us and this can affect the story. Similarly, if we win against that character, it can also change the course of the story. Every punch or kick we receive drains our health, which means players need to be careful. The purpose of these scenes is to test players&apos; attention and skills.</p>

        </Fade>
    </div>)
}

ThirdGameContent.displayName = 'ThirdGameContent'

export default ThirdGameContent