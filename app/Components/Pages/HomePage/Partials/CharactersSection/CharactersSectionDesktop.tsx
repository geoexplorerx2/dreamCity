"use client"
import useIsMobile from '@/app/utils/hooks/useIsMobile';
import UiSlider, { useSwiper, useSwiperSlide } from '@/app/utils/lib/UiSlider';
import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { EffectCube, EffectFade, EffectFlip, FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import SwiperClass from "swiper"
import { UiImage } from '@/app/utils/lib';
import dynamic from 'next/dynamic';
import useIsDomLoaded from '@/app/utils/hooks/useIsDomLoaded';
const Fade = require("react-reveal/Fade")
import Arrow from '@/assets/Icons/slider-navigation.svg'
import Image from 'next/image'

const DynamicUiSlider = dynamic(() => import('@/app/utils/lib/UiSlider'), {
    loading: () => <p>Loading...</p>,
})

interface CharacterSectionDataType {
    id: string, thumb: string, img: string, alt: string, title: string, description: string, bgImage: string,
}

interface CharactersSectionPropsType {
    images?: CharacterSectionDataType[];

}



// const defaultImages: string[] = ["https://dream-city-bucket.s3.eu-central-1.amazonaws.com/character-standing-with-gun.png", "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/character-woman-with-sword.png", "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/character-standing-with-gun.png", "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/character-woman-with-sword.png", "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/character-standing-with-gun.png", "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/character-woman-with-sword.png",]

const defaultImages: CharacterSectionDataType[] = [

    {
        id: '1',
        thumb: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/characters/David.png',
        img: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/characters/David.png',
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/1.png",
        alt: 'female character ciri thumbnail',
        title: 'The Main Character',
        description: 'The Main Character, an 18-year-old high school student and basketball enthusiast. Despite facing immense challenges in his life, Main Character has a fighting spirit that inspires us all. He earned a scholarship to attend the prestigious Bredford School for the wealthy, but his home life was far from easy. Living with an abusive stepfather and a mother suffering from depression, he had to navigate a world of poverty and neglect'
    },
    {
        id: '2',
        thumb: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Linda.png',
        img: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Linda.png',
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/2.png",
        alt: 'The Character Linda',
        title: 'Linda',
        description: "Introducing Linda, a character in Dream City who has faced many challenges in her life. Linda was once passionate about classical music and art, but after her husband's death, she fell into a deep depression and withdrew from her family. This made it difficult for her to connect with her son, the main character in the game. Linda's life was further complicated when she married Michael, who struggled with alcoholism and had a violent temperament. Despite her struggles, Linda is a complex character whose losses and experiences have shaped her into the person she is today. Explore Linda's story in Dream City and discover how her past has influenced her present."
    },
    {
        id: '3',
        thumb: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Kevin.png',
        img: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Kevin.png',
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/2.png",
        alt: 'The Character Kevin',
        title: 'Kevin',
        description: "Honoring Kevin, a beloved father who passed away when the main character was just six years old. Although Kevin's time in his son's life was short, he left an indelible mark on the main character's personality and values. Kevin's love for his family was boundless, and he worked hard to provide for them until his passing. His teachings continue to inspire the main character to this day, as he strives to apply his father's values to every aspect of his life. Let's take a moment to remember Kevin's enduring legacy and the impact he had on his son's life."
    },
    {
        id: '4',
        thumb: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Michael.png',
        img: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Michael.png',
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/4.png",
        alt: 'male character Michael',
        title: 'Michael',
        description: "Introducing Michael, a character in Main Character's story whose actions had a profound impact on his life. Michael was Main Character's stepfather, but sadly, he was also an alcoholic and violent person who made his life a living hell.Despite Main Character's best efforts to avoid him, Michael's abusive behavior took a toll on his mental and emotional health. The situation became unbearable when Michael murdered Main Character's mother, Linda. The good news is that justice was served, and Michael was sentenced to 20 years in prison. Although this was a difficult time for Main Character, it was also a turning point. He was able to break free from the cycle of abuse and find a new home in Dream City with the help of Amelie and Stephanie."
    },
    {
        id: '5',
        thumb: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Amelie.png',
        img: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Amelie.png',
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/5.png",
        alt: 'male character Amelie',
        title: 'Amelie',
        description: "Introducing Amelie, a stunning and accomplished Pilates instructor in Dream City. Her clients include celebrities and businessmen who appreciate her passion and professionalism. But there's more to Amelie than just her Pilates coaching services. She also offers counseling services on walking tours and healthy living issues, demonstrating her dedication to holistic wellness.Amelie's beauty and grace are matched by her kind and helpful personality, which have earned her a loyal following among her customers. Despite the demands of her work, she also juggles the responsibilities of being a mother to her daughter, Stephanie, while her husband frequently travels for business.Amelie's commitment to her clients and her family is truly inspiring, and we're honored to have her in our community. Follow her journey as she continues to uplift and inspire those around her."
    },
    {
        id: '6',
        thumb: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Stephanie.png',
        img: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Stephanie.png',
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/6.png",
        alt: 'female character Stephanie thumbnail',
        title: 'Stephanie',
        description: "Meet Stephanie, a bright and ambitious young woman who has overcome the challenges of growing up away from her family. Her father's job as a ship captain meant that Stephanie spent much of her childhood apart from her loved ones, but her mother, Amelie, was always there for her.Stephanie excelled academically and completed her university education, but the feeling of emptiness caused by her father's long absences lingered. In search of more meaningful connections with her family, she moved to Dream City to be closer to her loved ones.Now working as a croupier at the Elite Hotel, Stephanie has become a popular employee among customers. Despite her busy schedule, she remains determined to pursue her dreams of starting her own fashion brand. Her cheerful personality and intelligence are sure to take her far.Stephanie's story is a reminder of the importance of family and the value of perseverance. Follow her journey as she continues to make her mark on the world."
    },
    {
        id: '7',
        thumb: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/George.png',
        img: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/George.png',
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/7.png",
        alt: 'character George thumbnail',
        title: 'George',
        description: 'Meet George, the dedicated ship captain who sails the seas, commanding respect and love. Despite being away from his family for extended periods, his love for Amelie and Stephanie knows no bounds. Join their journey as they navigate the challenges of separation and embrace the joyous reunions.'
    },
    {
        id: '8',
        thumb: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Isabelle.png',
        img: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Isabelle.png',
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/8.png",
        alt: 'character Isabelle thumbnail',
        title: 'Isabelle',
        description: "Step into the luxurious world of Isabelle, a 42-year-old woman who leads a comfortable life with her husband, the owner of a successful animated film company, and their daughter Charlotte. Isabelle values high social status and luxury lifestyles, which is reflected in her daughter's school and dance team. However, their family's success and wealth have also caused some issues. Follow Isabelle's story in Main Character's journey and explore the challenges and triumphs of a life of luxury."
    },
    {
        id: '9',
        thumb: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Ciara.png',
        img: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Ciara.png',
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/9.png",
        alt: 'character Ciara thumbnail',
        title: 'Ciara',
        description: "Step into the world of Ciara, a beautiful and ambitious woman who values success and wealth. Her husband is one of DreamCity's most successful real estate agents, and Ciara is determined to follow in his footsteps. She's already taking steps towards her dream of a career in real estate, and with her hard work and determination, she's sure to succeed. Follow Ciara's journey and be inspired by her drive and ambition."
    },

    {
        id: '10',
        thumb: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Jackie.png',
        img: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Jackie.png',
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/10.png",
        alt: 'Jackie character thumbnail',
        title: 'Jackie',
        description: "Meet Jackie - a high school student who's been interested in technology since birth. Born into wealth, he had access to all the latest gadgets and spent countless hours honing his skills in programming and game development. But his talents weren't appreciated by his peers and he became introverted, preferring to observe people's lives through his tech skills. He's known for taking risks and enjoys hacking and playing games. But will his behavior cause him to be even more isolated? Follow his story in Dream City."
    },
    {
        id: '11',
        thumb: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/characters/Damon.png',
        img: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/characters/Damon.png',
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/11.png",
        alt: 'The Character Damon',
        title: 'The Character Damon',
        description: 'Meet Damon, a passionate basketball coach who has dedicated his life to mentoring young players. His love for the sport started in high school, where he was a standout player with many offers for college. However, an unfortunate incident shattered his dreams of a professional career. Despite this setback, Damon never lost his ambition and now shares his knowledge and experience with the next generation of players. While his passion can sometimes make him push too hard, his dedication to his students is unmatched, and he is highly respected by all who know him.'
    },
    {
        id: '12',
        thumb: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Brad.png',
        img: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Brad.png',
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/12.png",
        alt: 'the character Brad thumbnail',
        title: 'Brad',
        description: "Brad, born into the wealthiest family in Dream City, had everything he wanted growing up. But his privileged lifestyle turned him into a bully, mistreating and mocking others. As captain of the basketball team, Brad was popular, but his character was far from admirable. He believed that poor people were beneath him and acted out of self-interest. His relationship with Evelyn was based on her love for his wealth and popularity, while he was actually jealous, selfish, and narcissistic. Despite getting into trouble for his extreme bullying, Brad's family's influence and money allowed him to escape punishment."
    },
    {
        id: '13',
        thumb: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Robert.png',
        img: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Robert.png',
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/13.png",
        alt: 'the character Robert thumbnail',
        title: 'Robert',
        description: "Meet Robert, Brad's closest friend in Dream City! Robert is always there to lend an ear and support Brad, no matter what. He comes from a wealthy family - his father is the CEO of a large finance company, and they maintain a luxurious lifestyle with private yachts and overseas trips. Despite being the apple of his parents' eyes as the only child, Robert's free spirit clashes with his father's authoritarian attitude, causing occasional tension. Follow Robert's journey in Dream City as he navigates both his personal and social life."
    },
    {
        id: '14',
        thumb: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Jaxson.png',
        img: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Jaxson.png',
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/14.png",
        alt: 'the character Jaxson thumbnail',
        title: 'Jaxson',
        description: "Meet Jaxson, the talented basketball player from a wealthy family in Dream City! His father, an executive in a family-owned company, has high expectations for Jaxson, leading him to participate in various activities and maintain an active social life. While Jaxson loves parties and enjoys attending luxury events, it sometimes affects his performance on the court. Follow Jaxson's journey as he balances his passion for basketball and his social life in Dream City. "
    },
    {
        id: '15',
        thumb: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Toby.png',
        img: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Toby.png',
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/15.png",
        alt: 'the character Toby thumbnail',
        title: 'Toby',
        description: "Meet Toby, a talented musician and basketball player in Dream City. He discovered his love for hip-hop and rap music at a young age but was encouraged by his family to pursue a more stable career. Despite this, he continued to write and record music in his home studio while also excelling as a key player on his school's basketball team. However, due to financial struggles, Toby turned to selling drugs to support his family. While juggling his different roles, Toby kept his music hidden from the world, known only to his closest friends. Follow Toby's journey in Dream City as he navigates his passions and responsibilities."
    },
    {
        id: '16',
        thumb: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Martha.png',
        img: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Martha.png',
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/16.png",
        alt: 'female character Martha thumbnail',
        title: 'Martha',
        description: "Meet Martha, a talented musician and dancer from a wealthy family in Dream City! Martha has always been interested in music and dance, and her family has supported her every step of the way. With her father's help, she's been able to set up a private studio and has become one of the most successful members of the school's dance team. Martha's success in music production has also allowed her to participate in the school's music club and perform in many shows. Follow Martha's journey in Dream City as she continues to pursue her passion for music and dance. "
    },
    {
        id: '17',
        thumb: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Charlotte.png',
        img: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Charlotte.png',
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/17.png",
        alt: 'female character Charlotte thumbnail',
        title: 'Charlotte',
        description: "Meet Charlotte, the girl who's used to a life of luxury and expensive pleasures. Despite her poor performance in school, she excels on the dance team. Charlotte has a talent for manipulating people to get what she wants, using her beauty and body to her advantage. Her unlimited budget allows her to buy anything and always have an eye-catching style. Although her behavior causes arguments, her mother Isabelle protects her with love and indulgence. Follow Charlotte's journey as she navigates the world of wealth and privilege in Dream City."
    },
    {
        id: '18',
        thumb: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Abigail.png',
        img: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Abigail.png',
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/18.png",
        alt: 'female character Abigail thumbnail',
        title: 'Abigail',
        description: "The dancer who fought for her passion. Born into wealth, dance was seen as a mere hobby by her family. But Abigail's love for dance never faded, and she worked hard to become one of the best dancers at Dream City High. After trying other fields under family pressure, she finally followed her heart and dedicated herself to dance. Follow Abigail's journey as she fights for her passion and love life amidst obstacles. "
    },
    {
        id: '19',
        thumb: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Josie.png',
        img: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Josie.png',
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/19.png",
        alt: 'female character ciri thumbnail',
        title: 'Josie',
        description: "Meet Josie, the Latin mixed race dancer with a passion that knows no bounds! Her wealthy family owns successful businesses in Latin America, giving her the opportunity to explore different dance styles during their travels. But balancing her family's high expectations of success with her love for dance can be a challenge. Josie's talent shines on the dance team, where she finds solace and self-expression. Follow Josie's journey as she navigates the world of dance and strives to find her own path amidst family pressures. "
    },
    {
        id: '20',
        thumb: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Evelyn.png',
        img: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Evelyn.png',
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/20.png",
        alt: 'the character Evelyn thumbnail',
        title: 'Evelyn',
        description: "Evelyn was the daughter of one of Dream City's richest families. Her father was an executive in an engineering firm, and her mother was the founder of an important association in Dream City. They had a luxurious lifestyle, and Evelyn took advantage of its benefits to the fullest. Growing up in a family that valued education, Evelyn always received the best education in the best schools. She had already drawn attention with her intelligence and diligence even when she was in elementary school. When she started high school, she joined the school's dance team and was quickly chosen as the captain.Evelyn stood out not only for her beauty but also for her intelligence and personality. She was loved and respected by everyone at school. However, the question everyone wondered about was why she was Brad's girlfriend, who was known to be wicked.In fact, Evelyn did not know Brad's true nature. Her love for him and Brad making her the most popular kid in school prevented her from seeing his real charact"
    },
    {
        id: "21",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Aimee.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Aimee.png",
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/21.png",
        alt: "The Character thumb ",
        title: "Aimee",
        description: "Introducing Aimee, the multi-talented dancer with a heart of gold! Born to an American-Chinese family, she's a true cultural bridge-builder. Aimee's passion for dance knows no bounds, from hip hop to ballet. Beyond the dance floor, she's dedicated to charitable causes, particularly in education and culture. Aimee embraces her heritage while embracing different cultures. She's a polyglot, learning Mandarin, Spanish, and Italian. And when she's not dancing, she's strumming the guitar and singing her heart out. Follow Aimee's journey as she brings joy through dance and spreads love across cultures."
    },
    {
        id: "22",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Edward.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Edward.png",
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/22.png",
        alt: "The Character Edward thumb ",
        title: "Edward",
        description: "Edward: The Rockstar Rebel Edward has always stood out with his unique style and personality. From a young age, his passion for rock music and guitar playing took center stage, thanks to his musician father's guidance. At Bredford High School, he formed the rock band Savage Storm, where he showcased his talent as the lead vocalist and guitarist. Edward's unconventional fashion choices mirrored his rebellious spirit, often sporting leather jackets, ripped jeans, and punk accessories on stage. With determination and hard work, he rocked local concerts, but his confidence sometimes clashed with bandmates. Follow Edward's journey as he chases his dreams and embraces his rockstar identity. "
    },
    {
        id: "23",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Billy.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Billy.png",
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/23.png",
        alt: "The Character Billy thumb ",
        title: "Billy",
        description: "Introducing Billy: The Drummer's Redemption Despite facing obstacles, his passion for music never wavered. From secretly practicing drums to forming a band with friends, Billy's life took a dark turn due to addiction. But a chance encounter with Edward and joining Savage Storm reignited his love for music and fueled his journey to overcome addiction. Follow Billy's inspiring path of redemption, as he finds hope, friendship, and a renewed passion for music."
    },
    {
        id: "24",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Royce.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Royce.png",
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/24.png",
        alt: "The Character Royce thumb ",
        title: "Royce",
        description: "In the depths of pain and addiction, Royce found solace and redemption through the power of music. From a shattered past to the stage of Savage Storm, he poured his emotions into the rhythm of the bass guitar. But his journey wasn't without struggle. Through rehabilitation and self-discovery, Royce confronted his demons and rediscovered his love for music. Join him as he rises from the ashes, ready to rock the world once again."
    },
    {
        id: "25",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Eleanor.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Eleanor.png",
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/25.png",
        alt: "The Character Eleanor thumb ",
        title: "Eleanor",
        description: "Step into the world of Eleanor, the rebellious spirit of Savage Storm. Born into two cultures, she found solace in the rock band's wild lifestyle. Embracing punk fashion and relishing in attention, she sought freedom through partying and drinking. But Eleanor's rebelliousness strained her relationship with her family, leading to hospitalizations. Follow her journey of self-discovery and the pursuit of living life on her own terms."
    },
    {
        id: "26",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Caitlyn.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Caitlyn.png",
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/26.png",
        alt: "The Character Caitlyn thumb ",
        title: "Caitlyn",
        description: "Introducing Caitlyn, a young girl whose life took a dramatic turn when she crossed paths with Savage Storm. From a neglected and introverted existence, she found solace and excitement in the group's rebellious energy. Caitlyn's anarchist style of dressing became her outlet for self-expression and freedom, challenging the traditional Chinese culture imposed by her family. On stage with Savage Storm, she discovered a sense of liberation, leaving behind the burdens of her life. However, freedom came at a cost. Caitlyn spiraled into a world of constant partying, drinking, and substance use, straining her relationship with her family even further. Her greatest fear became losing the very freedom she cherished. Savage Storm offered an escape, but she must confront the consequences of her choices. Follow Caitlyn's journey as she navigates the delicate balance between self-discovery and the price of rebellion."
    },
    {
        id: "27",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Harry.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Harry.png",
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/27.png",
        alt: "The Character Harry thumb ",
        title: "Harry",
        description: "Introducing Harry, a student who defies stereotypes and embraces his true self. As the editor of the school newspaper, he fearlessly reports on scandals, gossip, and the latest news, making a significant impact on the school community. Supported by his loving family, Harry's journey challenges social norms and promotes inclusivity. Follow along as he navigates the complexities of high school life and leaves a lasting imprint on Bredford High."
    },
    {
        id: "28",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Susan.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Susan.png",
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/28.png",
        alt: "The Character thumb ",
        title: "Susan",
        description: "Meet Susan, a passionate language learner on a quest to master French. Through dedication, immersion, and a love for French culture, she's paving her way towards her dream of living in France. Join her journey as she dives deep into the language, embracing its beauty and expanding her horizons."
    },
    {
        id: "29",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Mollie.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Mollie.png",
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/29.png",
        alt: "The Character Mollie thumb ",
        title: "Mollie",
        description: "Meet Mollie! Mollie's upbringing was deeply rooted in her family's religious and conservative values. However, as she grew older, she started experiencing conflicting impulses. Isolated from making friends at school, Mollie became increasingly introverted. The solitude amplified her anxieties, and she found herself grappling with unconventional desires."
    },
    {
        id: "30",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Sarah.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Sarah.png",
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/30.png",
        alt: "The Character Sarah thumb ",
        title: "Sarah",
        description: "Sarah is a dedicated high school guidance counselor known for her impeccable fashion sense and serene demeanor. However, her path to success hasn't been without its obstacles. As she continues to assist students in their journeys, Sarah also grapples with personal challenges."
    },
    {
        id: "31",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Scarlet.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Scarlet.png",
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/31.png",
        alt: "The Character Scarlet thumb ",
        title: "Scarlet",
        description: "Meet Scarlet, the enigmatic literature teacher who commands attention with her captivating beauty and unparalleled passion for the written word. With a reputation for strict discipline and high academic standards, she sets the bar high for her students. But behind her composed demeanor lies a hidden allure, as her sensual lingerie outfits spark both curiosity and desire. Amidst the whispers and fantasies, Scarlet remains focused on her true calling: nurturing young minds through the world of literature. Step into her world of words and captivating charm."
    },
    {
        id: "32",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Christopher.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Christopher.png",
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/32.png",
        alt: "The Character Christopher thumb ",
        title: "Christopher",
        description: "Meet Christopher, aka Big Chris, the math teacher at Dream City High School. With a larger-than-life physique and a unique sense of style, he often finds himself at the center of student jokes and teasing. Whether it's the sauce-stained sandwich he always carries or his laid-back approach in class, Big Chris's presence is anything but ordinary. Join us as we delve into his world, where books, home comforts, and unexpected adventures intertwine."
    },
    {
        id: "33",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Olga.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Olga.png",
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/33.png",
        alt: "The Character Olga thumb ",
        title: "Olga",
        description: "Meet Olga, the talented art teacher with a passion for creativity and a heart full of dreams. Originally from Russia, she now calls Dream City her home, where she inspires and nurtures young minds through her teaching. Admired for her talent and beauty, Olga is a respected figure among students and staff. Beyond the classroom, she embraces her own artistic journey, participating in exhibitions and selling her captivating work. With a heart full of passion and dedication, Olga's artistry knows no bounds. Join her as she unveils the vibrant colors of life. "
    },
    {
        id: "34",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Alvery.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Alvery.png",
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/34.png",
        alt: "The Character Alvery thumb ",
        title: "Alvery",
        description: "Meet Alvery, the enchanting French teacher who brings the beauty of language and culture to life in Dream City. 🇫🇷✨ Follow her journey as she educates and inspires her students with her knowledge, elegance, and a touch of romance. Don't miss out on her captivating novels, where love and adventure unfold. "
    },
    {
        id: "35",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Alicia.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Alicia.png",
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/35.png",
        alt: "The Character Alicia thumb ",
        title: "Alicia",
        description: "Alicia had a difficult childhood in the Dominican Republic but found solace in dancing. She survived by performing on the streets and later joined a famous dance school. She fell in love with a renowned Latin dancer and singer, but tragedy struck when he died in an accident. Alicia opened her own dance school, becoming a mentor and role model. At a show, she caught the eye of Thomas, the principal of Dream City Bredford High School, who hired her as a dance teacher. Now, Alicia shares the power of dance to overcome life's challenges with her students. "
    },
    {
        id: "36",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Thomas.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Thomas.png",
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/36.png",
        alt: "The Character Thomas thumb ",
        title: "Thomas",
        description: "Introducing Thomas, the ambitious principal of Dream City's Bredford High School. Born into poverty, he dedicated himself to education, using his connections with wealthy families to rise to power. But as his favoritism and greed become evident, a rift forms among the students. Join us as we delve into the complex world of Thomas and the consequences of his controversial choices"
    },
    {
        id: "37",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Cherish.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Cherish.png",
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/37.png",
        alt: "The Character Cherish thumb ",
        title: "Cherish",
        description: "Meet Cherish, a resilient and captivating woman who has overcome countless challenges. From a young age, she took control of her life, excelling in online jobs and eventually finding her place in strip clubs. Cherish's beauty and charm mesmerize her audience, but her journey is far from easy. Join her as she navigates through the ups and downs of her unconventional path. Stay tuned for empowering stories and glimpses into Cherish's extraordinary life."
    },
    {
        id: "38",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Rhapsody.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Rhapsody.png",
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/38.png",
        alt: "The Character Rhapsody thumb ",
        title: "Rhapsody",
        description: "Meet Rhapsody, a resilient soul who found strength and self-acceptance through the art of dancing. Follow her journey as she breaks free from societal norms, embraces her body, and discovers the power of self-confidence. Stay tuned for captivating performances and inspiring stories of resilience. "
    },
    {
        id: "39",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Stormy.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Stormy.png",
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/38.png",
        alt: "The Character Stormy thumb ",
        title: "Stormy",
        description: "Meet Stormy, a resilient and empowered woman who found strength and hope in the face of adversity. Follow her journey of self-discovery and determination as she embraces her dreams at Vibe On strip club. Inspiring others with her story, Stormy proves that no obstacle can dim her light."
    },
    {
        id: "40",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Karen.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Karen.png",
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/39.png",
        alt: "The Character Karen thumb ",
        title: "Karen",
        description: " Meet Karen, a resilient New Yorker who turned adversity into success. From humble beginnings in Brooklyn, she worked multiple jobs to support her education. Inspired by a massage therapist, Karen pursued her passion for healing touch, excelling as a top graduate. Now, she owns a thriving spa in Dream City, where her warm and knowledgeable approach has made her a respected businesswoman. Karen's story is a testament to hard work and determination."
    },
    {
        id: "41",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Cassidy.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Cassidy.png",
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/41.png",
        alt: "The Character Cassidy thumb ",
        title: "Cassidy",
        description: "Meet Cassidy, a resilient soul from Lebanon. Despite challenging beginnings, she pursued her passion for massage therapy and found her place in Dream City. With dedication and continuous education, she became a sought-after therapist, serving both famous and business clients. Cassidy's journey is one of personal growth, financial independence, and making tough choices. Join her as she embraces life on her own terms. "
    },
    {
        id: "42",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Gabriela.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Gabriela.png",
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/41.png",
        alt: "The Character Gabriela thumb ",
        title: "Gabriela",
        description: "Introducing Gabriela, the passionate chef behind MojaMojo restaurant in Dream City. From farm life to culinary success, she's dedicated to sharing the flavors of Mexican cuisine with the world. Join her on a delicious journey of creativity, perseverance, and unforgettable dining experiences."
    },
    {
        id: "43",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Grace.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Grace.png",
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/43.png",
        alt: "The Character Grace thumb ",
        title: "Grace",
        description: "Introducing Grace, a free spirit who found solace in nature's embrace. Leaving behind a life of luxury, she ventured into Dream City's forests, immersing herself in the serenity of the wild. Through hiking, meditation, and yoga, Grace discovered the profound connection between humans and nature. Now, she seeks to share this wisdom with the city, teaching the power of inner peace and the beauty of the natural world. Though her family may not understand, their love and support remain etched in her heart."
    },
    {
        id: "44",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/William.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/William.png",
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/44.png",
        alt: "The Character William thumb ",
        title: "William",
        description: "Introducing William, the epitome of power and ambition in Dream City. From poverty to success, he stops at nothing to achieve his goals. As the owner of Elite Hotel and Casino, his fearless nature dominates both his personal and business life. Brace yourself for a glimpse into the world of power, influence, and the lengths one can go to maintain it."
    },
    {
        id: "45",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/James.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/James.png",
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/45.png",
        alt: "The Character James thumb ",
        title: "James",
        description: " Introducing James, the dedicated police chief of Dream City. A loyal supporter of William, he diligently follows his orders, ensuring the safety and security of the city. "
    },
    {
        id: "46",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Cathrine.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/Cathrine.png",
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/46.png",
        alt: "The Character Catherine thumb ",
        title: "Catherine",
        description: "Meet Catherine, a brilliant young doctor who has overcome numerous challenges to excel in her profession. Her determination and resilience have propelled her to success, earning her the nickname 'hot doctor' for her expertise, not just her looks. But beneath her achievements lies a troubled past, where a difficult upbringing and a haunting mistake test her limits. Follow Catherine's gripping journey as she navigates the highs and lows of her career, seeking redemption and facing the consequences of her choices."
    },

]

// const CharacterTitle = () => {
//     const swiper = useSwiper()
//     const handleOnSetSwiper = () => {
//         swiper.slideTo(5)
//       }
//       useEffect(() => {
//         console.log('this is the swiper: ', swiper)
//       }, [swiper])

//     return (<h1>
//         hi
//     </h1>)
// }
const CharactersSectionDesktop: FC<CharactersSectionPropsType> = (props) => {

    const [swiper, setSwiper] = useState<SwiperClass>();
    const [bannerSwiper, setBannerSwiper] = useState<SwiperClass>();
    const [isImageLoading, setIsImageLoading] = useState(true);
    const [isVerticalSliderLoading, setIsVerticalSliderLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0)
    let isMobile = useIsMobile()
    let isDomLoaded = useIsDomLoaded()
    const sliderRef = useRef<any>(null);
    const bgImageRef = useRef<HTMLImageElement>(null)
    const bannerSliderRef = useRef<any>(null)

    const slideTo = (index: number) => {
        if (swiper)
            swiper.slideTo(index)
    };


    // handling the navigation for the horizontal thumbnail slider
    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);



    const setTheActiveSliderItem = useCallback(
        () => {
            setActiveIndex(bannerSwiper?.activeIndex ?? 0)
        },
        [bannerSwiper?.activeIndex]
    );

    useEffect(() => {
        if (swiper) {
            const timer = setInterval(() => {
                // setActiveIndex(bannerSwiper?.activeIndex)
                setTheActiveSliderItem()
            }, 500);
            return () => clearInterval(timer);
        }
    }, [swiper]);


    useEffect(() => {

        bgImageRef.current?.classList.remove('fade-in')
        setTimeout(() => {
            bgImageRef.current?.classList.add('fade-in')


            bgImageRef!.current!.src = charactersData[activeIndex]?.bgImage
        }, 100)
    }, [activeIndex])

    const charactersData = props.images ?? defaultImages
    return (
        <Fade bottom >
            <section id='characters-slider' className='px-[100px] py-14 relative'>
                <div className='absolute top-0 left-0 w-full h-full flex justify-center'>
                    <div className='absolute top-0 left-0 w-full h-full '></div>
                    <div className='relative w-full'>
                        {/* here I did not use NextImage because it caches the image and the fade in animation would not work */}
                        <img
                            src={charactersData[0]?.bgImage}
                            alt={`Characters section background`}
                            className='z-[-1] fade-in absolute bottom-0 h-full w-full'
                            id="characters-bg-image"
                            ref={bgImageRef}
                        />


                    </div>

                </div>


                <div className='flex flex-row justify-between container '>
                    <div className='relative w-full max-h-[636px]'>
                        <Fade left cascade>
                            <h1 className='text-primary text-[50px] font-medium font-poppins'>
                                {charactersData[activeIndex].title}
                            </h1>
                        </Fade>
                        <div className='max-w-[400px] max-h-[400px] overflow-y-scroll no-scroll-bar line-clamp-[16] mt-5 mb-20 space-y-5'>
                            <Fade bottom>
                                <p className='text-white font-light text-sm '>
                                    {charactersData[activeIndex].description}
                                </p>
                                {/* {charactersData[activeIndex].description.split('.').map((sentence, index) => (
                                    <p className='text-white font-light text-sm ' key={index}>
                                        {sentence}
                                    </p>)
                                )} */}


                            </Fade>
                        </div>
                        {!isMobile && isDomLoaded &&
                            <div className="thumbs_slider absolute bottom-0 left-0 w-[580px] h-[100px]">
                                <UiSlider
                                    // @ts-ignore
                                    spaceBetween={10}
                                    onSwiper={(e) => {

                                        setSwiper(e)
                                    }}
                                    slidesPerView={5}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs, Pagination]}
                                    className="mySwiper thumbSlider h-full w-full absolute"
                                    ref={sliderRef}
                                    
                                    pagination={{
                                        el: '.characters-slider-pagination',
                                        clickable: true,
                                        renderBullet: (index: number, className: string) => {
                                            return '<span class="' + className + '">' + "</span>";
                                        },
                                    }}

                                // direction="horiontal"
                                >
                                    {isVerticalSliderLoading && (
                                        <div className="absolute inset-0 z-1 w-full h-full bg-white">
                                            <div className="w-full h-full bg-gray-300 rounded animate-pulse-fast" />
                                        </div>
                                    )}
                                    <Fade left cascade big >
                                        {charactersData.map((imageObj, index) => {
                                            const { img, thumb, alt, id } = imageObj
                                            return (
                                                <UiSlider.Slide key={id}>
                                                    <div className="relative w-full h-full border border-gray-500 gray-gradient rounded-[20px]">
                                                        <UiImage
                                                            className="rounded-lg"
                                                            src={thumb}
                                                            alt={alt}
                                                            style={{ objectFit: "contain", objectPosition: "center" }}
                                                            fill
                                                            // unoptimized={true}
                                                            priority={index === 0}
                                                            onLoad={() => {
                                                                setIsVerticalSliderLoading(false);
                                                            }}
                                                            loading="eager"
                                                        />
                                                    </div>
                                                </UiSlider.Slide>
                                            );
                                        })}

                                    </Fade>

                                </UiSlider>
                                <div className="prev-arrow absolute top-1/2 -left-6 z-10 text-white cursor-pointer" onClick={handlePrev}><Arrow /></div>
                                <div className="next-arrow absolute top-1/2 -right-6 z-10  text-white cursor-pointer" onClick={handleNext}><Arrow className="rotate-180" /></div>
                                <div className="characters-slider-pagination flex justify-center items-center space-x-2 mt-4"></div>
                            </div>
                        }

                    </div>

                    <div className="min-w-[444px] max-w-[444px] min-h-[444px] max-h-[636px] overflow-visible relative">
                        <div className="w-full mt-4 xl:mt-0 xl:w-full xl:!h-[636px] aspect-2 md:aspect-1 flex justify-end items-end">
                            {isDomLoaded && <UiSlider
                                style={{
                                    // @ts-ignore
                                    "--swiper-navigation-color": "#fff",
                                    "--swiper-pagination-color": "#fff",
                                    minHeight: "400px",
                                    height: "100%",
                                    width: "444px",
                                    margin: 0,
                                }}
                                
                                onSwiper={setBannerSwiper}
                                ref={bannerSliderRef}
                                spaceBetween={10}
                                // navigation={true}
                                thumbs={{
                                    swiper:
                                        swiper && !swiper.destroyed ? swiper : null,
                                }}
                                modules={[FreeMode, Navigation, Thumbs]}

                                className="mySwiper2 rounded-[80px] overflow-visible"
                            >
                                {isImageLoading && (
                                    <div className="absolute inset-0 z-1 w-full h-full bg-white">
                                        <div className="w-full h-full bg-gray-300 rounded animate-pulse-fast" />
                                    </div>
                                )}

                                {charactersData.map((imageObj, index) => {
                                    const { alt, thumb, id, img } = imageObj
                                    return (
                                        <UiSlider.Slide key={id} >
                                            <div className='w-full h-full flex justify-center'>
                                                {index === 0 ? <Fade bottom>
                                                    <div className="relative w-[70%] h-full flex items-end">

                                                        <UiImage
                                                            className="rounded-lg w-auto max-w-none h-[634px] max-h-[634px]"
                                                            src={img}
                                                            alt={alt}
                                                            width={290}
                                                            height={634}
                                                            priority={index === 0}
                                                            onLoad={() => {
                                                                setIsImageLoading(false);
                                                            }}
                                                            quality={95}
                                                        />
                                                        
                                                    </div>
                                                </Fade> :
                                                    <div className="relative w-[70%] h-full flex items-end">

                                                        <UiImage
                                                            className="rounded-lg w-auto max-w-none h-[634px] max-h-[634px]"
                                                            src={img}
                                                            alt={alt}
                                                            width={290}
                                                            height={634}
                                                           
                                                            priority={index === 0}
                                                            onLoad={() => {
                                                                setIsImageLoading(false);
                                                            }}

                                                        />
                                                    </div>
                                                }

                                            </div>
                                        </UiSlider.Slide>
                                    );
                                })}



                                {/* <img
                className="w-full h-full flex justify-center items-center"
                src="https://demo05.houzez.co/wp-content/uploads/2016/01/inner-living-room-3-758x564.jpg"
            /> */}
                            </UiSlider>}
                            <div className='absolute bottom-0 left-0 w-full h-[90%] gray-gradient rounded-[80px]'></div>
                        </div>

                        {/* <Divider /> */}
                    </div>

                </div>
            </section>
        </Fade>
    )
}

CharactersSectionDesktop.displayName = "CharactersSectionDesktop"

export default CharactersSectionDesktop