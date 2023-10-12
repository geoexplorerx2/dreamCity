"use client"
import useIsMobile from '@/app/utils/hooks/useIsMobile';
import UiSlider, { useSwiper, useSwiperSlide } from '@/app/utils/lib/UiSlider';
import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { EffectCoverflow, EffectCreative, EffectFlip, FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import SwiperClass from "swiper"
import { UiImage } from '@/app/utils/lib';
import dynamic from 'next/dynamic';
import useIsDomLoaded from '@/app/utils/hooks/useIsDomLoaded';
const Fade = require("react-reveal/Fade")
import Arrow from '@/assets/Icons/ArrowRight.svg'
import Image from 'next/image'
import { EffectFade,EffectCube } from 'swiper/modules';
const DynamicUiSlider = dynamic(() => import('@/app/utils/lib/UiSlider'), {
    loading: () => <p>Loading...</p>,
})
import { Swiper, SwiperSlide } from 'swiper/react';
interface CharacterSectionDataType {
    id: string, thumb: string, mainImg: string, sideImg1: string, sideImg2: string; alt: string, title: string, description: string, bgImage: string,
}

interface ApplicationsSectionPropsType {
    images?: CharacterSectionDataType[];

}



// const defaultImages: string[] = ["https://dream-city-bucket.s3.eu-central-1.amazonaws.com/character-standing-with-gun.png", "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/character-woman-with-sword.png", "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/character-standing-with-gun.png", "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/character-woman-with-sword.png", "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/character-standing-with-gun.png", "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/character-woman-with-sword.png",]

const defaultImages: CharacterSectionDataType[] = [

    {
        id: '1',
        thumb: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/chat-app/chat-app-thumb.svg',
        sideImg1: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/chat-app/chat-app-side-image-1.png',
        sideImg2: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/chat-app/chat-app-side-image-2.png',
        mainImg: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/chat-app/chat-app-main-image.png',
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/1.png",
        alt: 'the contacts application',
        title: 'Contacts',
        description: 'In the Dream City game, one of the most important applications on the phone is Contacts. This application allows us to communicate with the characters in the game. The Contacts application works like a phonebook, where the names and phone numbers of the people we communicate with are listed. Throughout the game, we receive messages from the characters through this application and respond to them based on the options provided. We can also make calls from this list and send messages to people we want to stay in touch with.'
    },
    {
        id: '2',
        thumb: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/music-player-app/music-player-thumb.svg',
        sideImg1: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/music-player-app/music-player-side-image-1.png',
        sideImg2: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/music-player-app/music-player-side-image-2.png',
        mainImg: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/music-player-app/music-player-main-image.png',
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/2.png",
        alt: 'The Character Linda',
        title: 'The Music Player',
        description: "The Music Player app will allow players to personalize and change the atmosphere of their gaming experience. Music has become an important element in many games and applications. Therefore, this game will also offer 10-15 music options in different genres. Players can change these music tracks in the background. Different types of music will give players the freedom to choose. Players can choose the music that suits them best and change it during the game. This will help personalize the gaming experience. Music can change the atmosphere of the game and give players different emotions."
    },
    {
        id: '3',
        thumb: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/snap-me/snap-me-thumb.svg',
        sideImg1: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/snap-me/snap-me-side-image-1.png',
        sideImg2: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/snap-me/snap-me-side-image-2.png',
        mainImg: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/snap-me/snap-me-main-image.png',
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/2.png",
        alt: 'the snapme application thumb',
        title: 'SNAPME',
        description: "The SNAPME app is one of the most popular social media apps in the Dream City game. Users share content that they can follow and like through this app. In addition, people can comment on other users' profile pictures using the ready-made messages provided by the game and interact with them. SNAPME also offers a live streaming feature. Users can broadcast live and other users can watch the live stream. Comments can also be made during the live stream, and broadcasters can respond to viewers' comments. This app strengthens the social aspect of the game and makes it easier for users to interact with each other. Through SNAPME, our character can become one of Dream City's most popular influencers and gain more followers."
    },
    {
        id: '4',
        thumb: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/HookUp/hookup-thumb.svg',
        sideImg1: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/HookUp/hookup-side-image-1.png',
        sideImg2: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/HookUp/hookup-side-image-2.png',
        mainImg: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/HookUp/Hookup-main-image.png',
        bgImage: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/charactersv2/CaractersBG/4.png",
        alt: 'HookUP application logo',
        title: 'HookUP',
        description: "HookUP is the most popular dating app of the modern age, and it will be a part of our lives in Dream City. With this app, you'll have the opportunity to meet different women. Thanks to notifications that come at specific times, we can discover potential women by swiping their profiles to the side.With its user-friendly interface, functional features, and fast-responding algorithm, we can easily communicate with other users. We can determine our preferences by reading the user's profile information, such as their profile pictures, ages, hobbies, and interests. Of course, it's important to interact with someone after matching with them. Completing tasks, being successful in interactions, and expressing our preferences correctly will deepen our potential relationship. Additionally, organizing meetings and dates can help our relationship progress."
    },
    {
        id: '5',
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/achievements/achievements-thumb.svg",
        sideImg1: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/achievements/achivements-side-image-1.png",
        sideImg2: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/achievements/achievement-side-image-2.png",
        mainImg: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/achievements/achievments-main-image.png",
        bgImage: "",
        alt: "the Achievements app",
        title: "Achievements",
        description: "The Achivements application of the Dream City game is a great feature that allows players to show their achievements in the game. Players can inspire other players by sharing the completed goals, as they will be rewarded as they complete the targets. This will make the game even more exciting. Dream City game is a fun and adventurous game that attracts the attention of many players. Players do their best to successfully complete the tasks given to them. However, there are many goals that we can achieve in the game beyond completing the tasks. This is where the Achivements application comes in."
    },
    {
        id: '6',
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/the-zapp/the-zapp-thumb.svg",
        sideImg1: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/the-zapp/the-zapp-side-image-1.png",
        sideImg2: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/the-zapp/the-zapp-side-image-2.png",
        mainImg: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/the-zapp/the-zapp-main-image.png",
        bgImage: "",
        alt: "The ZAPP application logo",
        title: "The ZAPP ",
        description: "The ZAPP app makes all the necessary applications easily accessible within the game, making the players' experience more enjoyable. In addition, since the game's sections must be completed to activate each application, it offers players more integration and excitement with the game's story. Each application in the ZAPP app will be used in a specific section of the game. Therefore, we need to complete the game's sections to access the applications we need while playing. "
    },
    {
        id: '7',
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/betWin/the-betWin-thumb.svg",
        sideImg1: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/betWin/the-betWin-side-image-1.png",
        sideImg2: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/betWin/the-betWin-side-image-2.png",
        mainImg: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/betWin/the-betWin-main-image.png",
        bgImage: "",
        alt: "the BetWIN app image",
        title: "BetWIN",
        description: "The BetWIN app offers the opportunity for basketball lovers to bet on NBA games. After registering for the app, you can make predictions and create your bets for NBA games. However, it's important to be careful and make accurate predictions when placing bets. Before betting on NBA games, it's important to have knowledge about the performance of teams and players. Therefore, researching and examining statistics about NBA games and teams is important. Additionally, the current conditions of the arenas where games are played and the teams should be considered."
    },
    {
        id: '8',
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/my-fit-body/my-fit-body-logo.png",
        sideImg1: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/my-fit-body/my-fit-body-side-image-1.png",
        sideImg2: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/my-fit-body/my-fit-body-side-image-2.png",
        mainImg: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/my-fit-body/my-fit-body-main-image.png",
        bgImage: "",
        alt: "MyFitBody image",
        title: "MyFitBody",
        description: "The MyFitBody app is a mobile application that helps users track their body condition. With this app, users can record important measurements such as body weight, height, muscle mass, and fat percentage. This way, they can track the data needed to maintain a healthy lifestyle and set goals for a healthy body. The app helps users record their body measurements and track their health status, while also offering suggestions on developing healthy eating and exercise habits."
    },
    {
        id: '9',
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/relationship-status/relationship-status-logo.svg",
        sideImg1: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/relationship-status/relationship-status-side-image-1.png",
        sideImg2: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/relationship-status/relationship-status-side-image-2.png",
        mainImg: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/relationship-status/relationship-status-main-image.png",
        bgImage: "",
        alt: "the Relationship Status app",
        title: "Relationship Status",
        description: "Relationship Status allows players to manage their relationships with characters and change the course of the game story. This allows players to play a more active role in the story. This important feature of Dream City helps the game provide a more realistic and emotional experience. Players can use the Relationship Status feature to see the consequences of their decisions and build closer connections with the characters. The decisions made by players affect each character's life and can positively or negatively change their attitude towards the player. The heart symbol below each character indicates the level of the player's relationship with them. This level can increase or decrease depending on the player's decisions. "
    },
    {
        id: '10',
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/secret-moment-logo.png",
        sideImg1: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/secret-moment-side-image-1.png",
        sideImg2: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/secret-moment-side-image-2.png",
        mainImg: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/applications/secret-moments-app.png",
        bgImage: "",
        alt: "the Secret Moments app",
        title: "Secret Moments ",
        description: "Relationship Status allows players to manage their relationships with characters and change the course of the game story. This allows players to play a more active role in the story. This important feature of Dream City helps the game provide a more realistic and emotional experience. Players can use the Relationship Status feature to see the consequences of their decisions and build closer connections with the characters. The decisions made by players affect each character's life and can positively or negatively change their attitude towards the player. The heart symbol below each character indicates the level of the player's relationship with them. This level can increase or decrease depending on the player's decisions. "
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
const ApplicationsSection: FC<ApplicationsSectionPropsType> = (props) => {

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
        if (!bannerSliderRef.current) return;
        bannerSliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!bannerSliderRef.current) return;
        bannerSliderRef.current.swiper.slideNext();
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


    const charactersData = props.images ?? defaultImages
    return (
        <Fade bottom >
            <section id='characters-slider' className='px-0 lg:px-5 pt-5 lg:pt-14 pb-11 lg:pb-14 relative z-10'>

                {isDomLoaded &&
                    <div className="thumbs_slider absolute top-11 lg:top-auto lg:bottom-0 translate-y-[35px] left-1/2 -translate-x-1/2 w-full lg:w-[740px] h-[100px] z-10 px-12">
                        <UiSlider
                            // @ts-ignore
                            spaceBetween={10}
                            onSwiper={(e) => {

                                setSwiper(e)
                            }}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs, Pagination]}
                            className="mySwiper thumbSlider h-full w-full absolute"
                            ref={sliderRef}
                            breakpoints={{
                               
                                320: {
                                  slidesPerView: 4 ,
                                },
                                1024: {
                                    slidesPerView: 10
                                }
                              }}
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
                                    const { mainImg, thumb, alt, id } = imageObj
                                    return (
                                        <UiSlider.Slide key={id}>
                                            <div className="relative w-full h-full rounded-[20px]">
                                                <UiImage
                                                    className={`rounded-lg bg-blend-darken ${activeIndex === index ? '' : 'opacity-50'}`}
                                                    src={thumb}
                                                    alt={alt}
                                                    style={{ objectFit: "contain", objectPosition: "center" }}
                                                    fill
                                                    // unoptimized={true}
                                                    priority={index === 0}
                                                    onLoad={() => {
                                                        setIsVerticalSliderLoading(false);
                                                    }}
                                                />
                                            </div>
                                        </UiSlider.Slide>
                                    );
                                })}

                            </Fade>

                        </UiSlider>
                        {/* <div className="prev-arrow absolute top-1/2 -left-6 z-10 text-white cursor-pointer" onClick={handlePrev}><Arrow /></div>
                                <div className="next-arrow absolute top-1/2 -right-6 z-10  text-white cursor-pointer" onClick={handleNext}><Arrow className="rotate-180" /></div> */}
                        <div className="characters-slider-pagination flex justify-center items-center space-x-2 mt-4"></div>
                    </div>
                }

                <div className='flex flex-col lg:flex-row justify-between container relative '>
                    <div className="hidden lg:inline-block prev-arrow absolute top-1/2 left-0 z-10 text-white cursor-pointer" onClick={handlePrev}><Arrow className="rotate-180 w-[10px] h-[22px]" /></div>
                    <div className="hidden lg:inline-block next-arrow absolute top-1/2 -right-3 z-10  text-white cursor-pointer" onClick={handleNext}><Arrow className="w-[10px] h-[22px]"/></div>

                    <div className='relative w-full lg:h-[475px] px-5'>
                        <Fade left cascade>
                            <h1 className='text-white text-[32px] lg:text-[50px] font-medium font-poppins text-center lg:text-left mb-32 lg:mb-0'>
                                Applications
                            </h1>
                        </Fade>
                        <div className='lg:max-w-[calc(100%_-_65px)] lg:max-h-[400px] overflow-y-scroll no-scroll-bar line-clamp-[16] mt-5 mb-8 lg:mb-20'>
                            <Fade>
                                <h2 className='text-xl lg:text-2xl font-medium text-center lg:text-left text-white lg:text-black mb-6 lg:mb-0'>
                                    {charactersData[activeIndex].title}
                                </h2>
                            </Fade>
                            <Fade bottom>

                                {/* {charactersData[activeIndex].description.split('.').map((sentence, index) => ( */}
                                <p className='text-white font-light text-sm text-center lg:text-left'>
                                    {charactersData[activeIndex].description}
                                </p>
                                {/* )} */}


                            </Fade>
                        </div>

                    </div>

                    <div className="lg:min-w-[444px] lg:max-w-[576px]  min-h-[444px] max-h-[460px] overflow-visible relative">
                        <div className="w-full mt-4 xl:mt-0 xl:w-full xl:!h-[460px] aspect-2 md:aspect-1 flex justify-end items-end">
                            {isDomLoaded && <UiSlider
                                style={{
                                    // @ts-ignore
                                    "--swiper-navigation-color": "#fff",
                                    "--swiper-pagination-color": "#fff",
                                    minHeight: "400px",
                                    height: "100%",

                                    margin: 0,
                                }}
                                effect="fade"
                                onSwiper={setBannerSwiper}
                                ref={bannerSliderRef}
                                spaceBetween={10}
                                // navigation={true}
                                thumbs={{
                                    swiper:
                                        swiper && !swiper.destroyed ? swiper : null,
                                }}
                                modules={[FreeMode, Navigation, Thumbs,EffectFade,]}
                                className="mySwiper2 lg:rounded-[80px] overflow-visible"
                                
                            >
                                {isImageLoading && (
                                    <div className="absolute inset-0 z-1 w-full h-full bg-white">
                                        <div className="w-full h-full bg-gray-300 rounded animate-pulse-fast" />
                                    </div>
                                )}

                                {charactersData.map((imageObj, index) => {
                                    const { alt, thumb, id, mainImg, sideImg1, sideImg2 } = imageObj
                                    return (
                                        <UiSlider.Slide key={id} className="">
                                            <div className='w-full h-full flex justify-center '>
                                                {index === 0 ? <Fade bottom>
                                                    <div className="relative h-full flex justify-between items-center space-x-[10px]">


                                                        <UiImage
                                                            className="w-auto max-w-none h-[366px] max-h-[366px]"
                                                            src={sideImg1}
                                                            alt={alt}
                                                            width={170}
                                                            height={366}
                                                            priority={index === 0}
                                                            onLoad={() => {
                                                                setIsImageLoading(false);
                                                            }}

                                                        />
                                                        <UiImage
                                                            className="w-auto max-w-none h-[446px] max-h-[446px]"
                                                            src={mainImg}
                                                            alt={alt}
                                                            width={206}
                                                            height={446}
                                                            priority={index === 0}
                                                            onLoad={() => {
                                                                setIsImageLoading(false);
                                                            }}

                                                        />
                                                        <UiImage
                                                            className="w-auto max-w-none h-[446px] max-h-[366px]"
                                                            src={sideImg2}
                                                            alt={alt}
                                                            width={170}
                                                            height={446}
                                                            priority={index === 0}
                                                            onLoad={() => {
                                                                setIsImageLoading(false);
                                                            }}

                                                        />

                                                    </div>
                                                </Fade> :
                                                    <div className="relative h-full flex justify-between items-center space-x-[10px]">


                                                        <UiImage
                                                            className="w-auto max-w-none h-[366px] max-h-[366px]"
                                                            src={sideImg1}
                                                            alt={alt}
                                                            width={170}
                                                            height={366}
                                                            priority={index === 0}
                                                            onLoad={() => {
                                                                setIsImageLoading(false);
                                                            }}

                                                        />
                                                        <UiImage
                                                            className="w-auto max-w-none h-[446px] max-h-[446px]"
                                                            src={mainImg}
                                                            alt={alt}
                                                            width={206}
                                                            height={446}
                                                            priority={index === 0}
                                                            onLoad={() => {
                                                                setIsImageLoading(false);
                                                            }}

                                                        />
                                                        <UiImage
                                                            className="w-auto max-w-none h-[446px] max-h-[366px]"
                                                            src={sideImg2}
                                                            alt={alt}
                                                            width={170}
                                                            height={446}
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
                            {/* <div className='absolute bottom-0 left-0 w-full h-[90%] gray-gradient rounded-[80px]'></div> */}
                           
                           
                        </div>

                        {/* <Divider /> */}
                    </div>

                           </div>
            </section>

        </Fade>
    )
}

ApplicationsSection.displayName = "ApplicationsSection"

export default ApplicationsSection