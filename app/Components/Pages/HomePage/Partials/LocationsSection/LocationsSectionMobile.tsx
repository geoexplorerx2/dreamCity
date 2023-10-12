
"use client"
import useIsMobile from '@/app/utils/hooks/useIsMobile';
import useIsDomLoaded from '@/app/utils/hooks/useIsDomLoaded';
import UiSlider from '@/app/utils/lib/UiSlider';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { EffectFade, FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import SwiperClass from "swiper"
import { UiImage } from '@/app/utils/lib';
const Fade = require("react-reveal/Fade")
import Arrow from '@/assets/Icons/slider-navigation.svg'



interface ImageType {
    id: string, thumb: string, img: string, alt: string, label: string, textContent: string,
}

interface LocationsSectionPropsType {
    images?: ImageType[];
}

// const defaultImages: string[] = ["https://dream-city-bucket.s3.eu-central-1.amazonaws.com/map-slice.png", "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/map-slice-2.png","https://dream-city-bucket.s3.eu-central-1.amazonaws.com/map-slice.png", "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/map-slice-2.png","https://dream-city-bucket.s3.eu-central-1.amazonaws.com/map-slice.png", "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/map-slice-2.png",]


const defaultImages: ImageType[] = [
    {
        id: '1',
        label: 'The City',
        thumb: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-v2/The+City.png',
        img: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-v2/The+City.png',
        alt: "the dream city map",
        textContent: "Dream City is a vast and exciting place to explore, offering a wide range of attractions, from modern and magnificent structures to natural beauty, from entertainment centers to business and trade areas, and unique character homes. Every region and structure in Dream City has its own stories, with secrets waiting to be discovered. As you explore this unique and exciting city, you'll be able to visit the homes of every character you touch, each filled with past memories and secrets waiting to be uncovered."
    },
    {
        id: '2',
        label: 'The Business District',
        thumb: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-v2/The+Business+District.png',
        img: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-v2/The+Business+District.png',
        alt: 'dream city business district',
        textContent: "The Business District, located in the city center, is the economic heart of Dream City. It is a center of economic power and cultural importance, offering modern architecture, museums, galleries, concert halls, and an advanced transportation network. The high-rise buildings in the Business District are home to some of the world's largest financial institutions and global 500 companies. Many businesses located here, especially Channel X studio, have a significant impact worldwide, and therefore Dream City is known as a global financial center. In addition, the Business District has a modern transportation network that provides easy access to other areas of Dream City. Metro lines, buses, and taxi services allow thousands of people to reach their jobs and homes every day."
    },
    {
        id: '3',
        label: 'Bredford High School',
        thumb: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-v2/Bredford+High+School.png',
        img: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-v2/Bredford+High+School.png',
        alt: 'dream city bredford High scool',
        textContent: "Bredford High School is a prestigious school for children of wealthy families. It offers extensive academic and social opportunities, including basketball, dance, art, music, drama, and science clubs. The school's basketball team is one of the strongest in city tournaments every year, and the dance club is also very popular, frequently participating in dance competitions and winning first places. However, the most striking aspect of Bredford High School is the scandals and intrigues experienced by its students, who are often involved in love triangles, forbidden relationships, and party scandals. Despite these scandals, Bredford High School remains an ideal education center for children of wealthy families in the city."
    },
    {
        id: "4",
        label: "Enjoy Street",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-v2/Enjoy+Street.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-v2/Enjoy+Street.png",
        alt: "Enjoy Street dream city",
        textContent: "Enjoy Street, a popular entertainment area, has various bars, clubs, shops, and restaurants. In Your Face Rock Bar, Vibe On Strip Club, Bistro and Brew Cafe, and Every Market are among the most famous places on Enjoy Street."
    },
    {
        id: "5",
        label: "In Your Face Rock Bar ",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-v2/In+Your+Face.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-v2/In+Your+Face.png",
        alt: "In Your Face Rock Bar Dream City",
        textContent: "In Your Face Rock Bar offers a free and rebellious atmosphere, with punk rock fans in particular loving it. The bar has a wide range of drinks on its menu and hosts live performances by punk rock bands frequently."
    },
    {
        id: "6",
        label: "Vibe On Strip Club",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-v2/Vibe+On+Strip+Club.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-v2/Vibe+On+Strip+Club.png",
        alt: "Vibe On Strip Club dream city",
        textContent: "Vibe On Strip Club is one of the hottest and most colorful spots in Dream City's nightlife, offering captivating lighting, elegant decoration, and beautiful dancers."
    },
    {
        id: "7",
        label: "High Heels Street",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-v2/High+Heels+Street.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-v2/High+Heels+Street.png",
        alt: "High Heels Street dream city",
        textContent: "High Heels Street, the most luxurious and elite area, offers the most stylish and high-heeled shoes, luxury nightclubs, restaurants, and bars. It is a place preferred only by the rich and elite, with magnificent luxury nightclubs and restaurants, offering the most beautiful designs you can see in your life and meals made from the highest quality materials."
    },
    {
        id: "8",
        label: "Hospital",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-v2/Hospital.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-v2/Hospital.png",
        alt: "Hospital dream city",
        textContent: "One of the leading healthcare service providers in Dream City, the hospital is equipped with modern medical equipment and technological devices. The hospital provides 24-hour service with its emergency department, intensive care units, operating rooms, radiology, laboratory, and other medical departments. Cathrine, one of the doctors working at the hospital, ensures that patients feel comfortable and manages their treatment processes with care."
    },
    {
        id: "9",
        label: "Police Station",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-v2/Police+Station.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-v2/Police+Station.png",
        alt: "Police Station dream city",
        textContent: "The Police Station is responsible for ensuring the safety of Dream City. Equipped with modern equipment and technological devices, it has strict monitoring, investigation, and punishment mechanisms. James, the chief of police, manages the center and works to reduce the crime rate and ensure the safety of the city."
    },
    {
        id: "10",
        label: "Madison Sports Center",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-v2/Madison+Sports+Center.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-v2/Madison+Sports+Center.png",
        alt: "Madison Sports Center dream city",
        textContent: " a modern sports complex, offers a wide range of activities for sports enthusiasts. The fitness center offers high-tech equipment and trainers, while tennis lovers can spend their days on the tennis courts. The center also offers a large swimming pool and a spa and massage center. In addition, various water sports activities are regularly organized at the pool. The center is an ideal place for those who want to stay in shape and enjoy sports activities."
    },
    {
        id: "11",
        label: "Elite Hotel & Casino",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-v2/Elite+Hotel+%26+Casino.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-v2/Elite+Hotel+%26+Casino.png",
        alt: "Elite Hotel & Casino in dream city",
        textContent: "located on the seafront, is one of the leading places in the luxury accommodation and entertainment industry. It offers a high-quality casino, beach club, marina, restaurants, and shopping center. The casino is one of the most visited places by Dream City's wealthy and tourists, with its high-quality service and variety of games. The beach club offers an unforgettable experience with its white sands and turquoise-colored sea, while the marina is known as one of the most luxurious places in Dream City."
    },
    {
        id: "12",
        label: "Sunset Beach Club",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-v2/Sunset+Beach+Club.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-v2/Sunset+Beach+Club.png",
        alt: "Sunset Beach Club dream city",
        textContent: "Sunset Beach Club is a great place to cool off and have fun on hot summer days in Dream City. The excellent location of Elite Hotel & Casino and the beach atmosphere offer an unforgettable experience. The white sands and turquoise-colored sea make this place like a tropical paradise. Sunset Beach Club is perfect for sunbathing, swimming, surfing, and other water sports activities. It also hosts night parties with live music, dance parties, and DJs creating a fun atmosphere."
    },
    {
        id: "13",
        label: "Thunder River and Forest",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-v2/Thunder+River+and+Forest.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-v2/Thunder+River+and+Forest.png",
        alt: "Thunder River and Forest in dream city",
        textContent: "located among the natural beauties of Dream City, offers a unique natural experience to visitors. Here, you can enjoy the beauty of nature and relieve your stress by getting away from your daily life. Thunder River is a river that captivates with its serene beauty, and the forest offers long walks, outdoor picnics, canoeing, rowing, fishing, camping, romantic boat tours, and romantic walks in the forest. Visitors can enjoy the nature and have a unique experience while exploring the natural beauty of Dream City."
    },
    {
        id: "14",
        label: "What is this?",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-v2/What+is+this.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-v2/What+is+this.png",
        alt: "What is this? in dream city",
        textContent: "is an old abandoned mansion with a mysterious and creepy history. Known for ghosts, murders, and hidden treasures, this mansion still harbors many undiscovered secrets. Explore the mansion and uncover the dark and eerie history behind it. This mansion is a must-visit for those who are interested in mystery and history."
    },
    {
        id: "15",
        label: "And more locations!",
        thumb: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-v2/And+More+Locations.png",
        img: "https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-v2/And+More+Locations.png",
        alt: "And more locations! in dream city",
        textContent: "Welcome to Dream City, a captivating destination brimming with endless opportunities for exploration. Step into a world where each corner holds the promise of something remarkable. Unveil hidden treasures and embark on thrilling adventures, for there are countless locations awaiting your discovery. Embrace the journey and immerse yourself in the charm and mystery of Dream City's diverse landscape. Join us in this exciting adventure and let your imagination soar in a place where wonders never cease to amaze. "
    },


]

const LocationsSection: FC<LocationsSectionPropsType> = (props) => {

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
    const [isImageLoading, setIsImageLoading] = useState(true);
    const [isVerticalSliderLoading, setIsVerticalSliderLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0)
    const [bannerSwiper, setBannerSwiper] = useState<SwiperClass>();

    let isMobile = useIsMobile()
    const images = props.images ?? defaultImages



    const sliderRef = useRef<any>(null);
    const isDomLoaded = useIsDomLoaded()

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
        if (thumbsSwiper) {
            const timer = setInterval(() => {
                // setActiveIndex(bannerSwiper?.activeIndex)
                setTheActiveSliderItem()
            }, 500);
            return () => clearInterval(timer);
        }
    }, [thumbsSwiper, setTheActiveSliderItem]);


    return (
        <Fade bottom>
            <section id='locations' className='py-14 relative'>
                <UiImage
                    src={"https://dream-city-bucket.s3.eu-central-1.amazonaws.com/Locations-section-bg.png"}
                    fill
                    alt='city skiline obscure'
                    className='z-[-1] translate-y-8'
                />
                <div className='flex flex-row justify-between container px-3 lg:px-[40px]'>


                    <div className='relative w-full flex flex-col items-center'>
                        <Fade bottom>
                            <h1 className={`text-primary  text-right font-medium font-poppins 
                                ${defaultImages[activeIndex].label?.split(' ').length > 2 ? 'text-3xl leading-10 mb-[127px]' : 'text-[50px] mb-[127px]'}
                            `}>
                                {defaultImages[activeIndex].label}
                            </h1>
                        </Fade>

                        {isDomLoaded &&
                            <Fade bottom>
                                <div className={`thumbs_slider absolute right-0 w-full flex justify-center px-4 h-[100px]  ${defaultImages[activeIndex].label?.split(' ').length > 2 ? 'top-[40px]' : 'top-[64px]'}`}>
                                    <UiSlider
                                        // @ts-ignore
                                        spaceBetween={10}
                                        onSwiper={setThumbsSwiper}
                                        slidesPerView={3}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs, Pagination]}
                                        className="mySwiper thumbSlider h-full w-full absolute"
                                        ref={sliderRef}

                                    // direction="horiontal"
                                    >
                                        {isVerticalSliderLoading && (
                                            <div className="absolute inset-0 z-1 w-full h-full bg-white">
                                                <div className="w-full h-full bg-gray-300 rounded animate-pulse-fast" />
                                            </div>
                                        )}
                                        {images.map((imageObj, index) => {
                                            const { alt, thumb, id } = imageObj
                                            return (
                                                <UiSlider.Slide key={id}>
                                                    <div className="relative w-full h-full  rounded-[20px]">
                                                        <UiImage
                                                            className="rounded-lg"
                                                            style={{ objectFit: 'contain', objectPosition: 'center' }}
                                                            src={thumb}
                                                            alt={alt}
                                                            fill
                                                            priority={index === 0}
                                                            onLoad={() => {
                                                                setIsVerticalSliderLoading(false);
                                                            }}
                                                            quality={1}
                                                            loading="eager"
                                                        />
                                                    </div>
                                                </UiSlider.Slide>
                                            );
                                        })}
                                    </UiSlider>
                                    <div className="prev-arrow absolute top-1/2 -left-2 z-10 text-white cursor-pointer" onClick={handlePrev}><Arrow /></div>
                                    <div className="next-arrow absolute top-1/2 -right-2 z-10  text-white cursor-pointer" onClick={handleNext}><Arrow className="rotate-180" /></div>

                                </div>

                            </Fade>
                        }
                        <div className="w-full aspect-video overflow-visible relative">
                            <div className="w-full mt-4 xl:mt-0 h-full flex justify-end items-end">
                                <UiSlider
                                    style={{
                                        // @ts-ignore
                                        "--swiper-navigation-color": "#fff",
                                        "--swiper-pagination-color": "#fff",

                                        height: "100%",
                                        width: "623px",
                                        margin: 0,
                                    }}
                                    effect="fade"
                                    spaceBetween={10}
                                    // navigation={true}
                                    thumbs={{
                                        swiper:
                                            thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                                    }}
                                    modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                                    className="mySwiper2 rounded-[64px] overflow-visible"
                                    onSwiper={setBannerSwiper}
                                >
                                    {isImageLoading && (
                                        <div className="absolute inset-0 z-1 w-full h-full bg-white">
                                            <div className="w-full h-full bg-gray-300 rounded animate-pulse-fast" />
                                        </div>
                                    )}

                                    {images.map((imageObj, index) => {
                                        const { alt, id, img } = imageObj
                                        return (
                                            <UiSlider.Slide key={id}>
                                                <div className='w-full h-full flex justify-center'>
                                                    <div className="relative w-full h-full flex items-end">
                                                        <UiImage
                                                            className="rounded-lg"
                                                            style={{ objectPosition: 'center' }}
                                                            src={img}
                                                            alt={alt}
                                                            fill
                                                            priority={index === 0}
                                                            onLoad={() => {
                                                                setIsImageLoading(false);
                                                            }}
                                                            quality={30}

                                                        />
                                                    </div>

                                                </div>
                                            </UiSlider.Slide>
                                        );
                                    })}



                                    {/* <img
            className="w-full h-full flex justify-center items-center"
            src="https://demo05.houzez.co/wp-content/uploads/2016/01/inner-living-room-3-758x564.jpg"
          /> */}
                                </UiSlider>
                                {/* <div className='absolute bottom-0 left-0 w-full h-[90%] gray-gradient rounded-[80px]'></div> */}
                            </div>

                            {/* <Divider /> */}
                        </div>
                        <div className=' mt-7 space-y-5 text-right'>
                            <p className='text-white font-light text-sm text-center'>
                                {defaultImages[activeIndex].textContent}
                            </p>
                            {/* <Fade bottom cascade>
                            {defaultImages[activeIndex].textContent.split('.').map((sentence, index) => (
                                    <p className='text-white font-light text-sm ' key={index}>
                                        {sentence}
                                    </p>)
                                )}
                            </Fade> */}

                        </div>
                    </div>



                </div>
            </section>

        </Fade>
    )
}

LocationsSection.displayName = "LocationsSection"

export default LocationsSection