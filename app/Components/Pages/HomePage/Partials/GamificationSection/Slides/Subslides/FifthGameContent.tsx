import { FC } from "react"
const Fade = require("react-reveal/Fade")

const FourthGameContent: FC = () => {
    return (<div>
        <Fade bottom cascade >
            <h1 className='text-2xl font-medium mb-5 text-black text-right' style={{ direction: "ltr" }}>LET ME IMPRESS YOU WITH COOKING!</h1>

        </Fade>
        <Fade bottom cascade >
            <p>Women like men who cook for them. Our main character may have to prepare a romantic meal to impress a woman. In the game, we search for three ingredients by clicking on cupboards in the kitchen. We collect nine ingredients, but we can only choose the correct three using the mouse or arrow keys. After selecting the ingredients, we blend them in the blender. If we use the correct ingredients, the meal will make the woman happy, but if we make a mistake, it will have the opposite effect. This will affect the course of the relationship accordingly.</p>
        </Fade>

    </div>
    )
}

FourthGameContent.displayName = 'FourthGameContent'

export default FourthGameContent