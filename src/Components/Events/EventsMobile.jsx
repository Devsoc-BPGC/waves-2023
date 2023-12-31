import React, { useState } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import bgimg from './bgimg_phone.png';
import token1 from './token1.png';
import token2 from './token2.png';
import token3 from './token3.png';
import token4 from './token4.png';
import token5 from './token5.png';
// import token6 from './token6.png';
import Scroll from '../scroll/scroll';
import Fonts from '../Fonts';

const EventsMobile = () => {
  const images = [token1, token2, token3, token4, token5]; //token6
  const text = [
    'FLORENCE',
    'FILM & PHOTOGRAPHY',
    'BEAU VISTA',
    'THE QUIZ FEST',
    'EXTRAS',
  ];
  const [showScroll, setShowScroll] = useState(false);
  const [scrollHead, setScrollHead] = useState('');
  const florenceEvents = [
    {
      name: 'Natyanjali',
      desc: `Natyanjali, the ultimate dance extravaganza, takes center stage among all the dance events hosted by Waves. This spectacular event features a dazzling array of dance styles, divided into two captivating categories: non-thematic and thematic. Don't miss the most anticipated event of waves – Natyanjali!
    `,
    },
    {
      name: 'Sizzle',
      desc: `A truly electrifying spectacle at Waves, garners an enthusiastic audience and boasts outstanding viewership. This captivating event unfolds as a solo dance battle, where dancers pour their emotions and fervor onto the street. The atmosphere becomes electric with intense moods as dancers, cheered on by the roaring crowds, go head-to-head.`,
    },
    {
      name: 'Dancing Duo',
      desc: `The thrilling dance competition, invites dynamic pairs to showcase their incredible dance synergy before our esteemed judges. The journey to the top is paved with fun and collaboration – where a strong partnership takes you a long way!`,
    },
    {
      name: 'Nritya Kala',
      desc: `An intriguing dance event featuring highly skilled dancers who execute intricate choreographies, graceful movements and beautifully designed costumes. Classical dance events transport audiences to a world of history and tradition where each gesture conveys a story or emotion. This Will surely create a mesmerizing experience for the audience
    `,
    },
    {
      name: 'Rangmanch',
      desc: `Rangmanch, the flagship drama event of Waves ‘23 is back for a new iteration on the grand stage of the auditorium! Join us in presenting a stage play of any theme, story or flair to your heart’s content!`,
    },
    {
      name: 'Nukkad Natak',
      desc: `Join us on the streets of our campus to demonstrate the talent, wit, and acerbic social commentary of the traditional art of street plays with your riveting performance this Nukkad Naatak at Waves 23!
    `,
    },
    {
      name: 'Hear Me Out!',
      desc: `Be it Caesar’s feelings of betrayal, or perhaps Frankenstein’s horror at his creation, dive deep into the human psyche with this year’s monologue event, Hear me Out at Waves ‘23!
    `,
    },
    {
      name: 'Rapsody',
      desc: `"From Streets to Beats" - An impromptu rap battle with no musical instruments allowed which flows as unrestrained and freely as Waves.`,
    },
    {
      name: 'Jukebox',
      desc: `Jukebox is a single-singer event, where you may choose to sing in either the Western or Indian category. This event tests your ability to sing and play while being responsible for the vibes of the entire karaoke.`,
    },
    {
      name: 'Solonote',
      desc: `Witness solo artists master their chosen instruments, aiming for glory in percussion or non-percussion categories. Experience an extraordinary musical showdown transcending boundaries in a symphonic journey. Watch all this go down in a final face-off to crown the best solonote. 
    `,
    },
    {
      name: 'Silence of the Amps',
      desc: `At this acoustic music event, woo us over with beautiful acoustic renditions of songs of any genre with your team. Think your soulful acoustic version is the finest the song can be, show us too, the stage is all yours. Let the world witness your talent.
    `,
    },
    {
      name: 'Indian Rock',
      desc: `A rock band competition that brings together multiple rock bands to showcase their musical talents. "Indian Rock" offers an exciting opportunity for bands to showcase their musical prowess while embracing the fusion of traditional Indian elements with the energy of rock music.`,
    },
  ];
  const beauVistaEvents = [
    {
      name: "Let's Not Get Wasted",
      desc: `It’s a challenge where creativity collides with sustainability as you turn ‘waste’ items into works of art. As the clock ticks away, your artsy hands and ingenious minds work together to build remarkable masterpieces. It’s a celebration of resourcefulness and a reminder that “beauty can be found in the most unexpected places”. 
    `,
    },
    {
      name: 'Kick StART',
      desc: `Welcome to the world of wearable art at our unique sneaker-painting competition. Whether you are just an amateur painter or a professional artist, pair up in groups to take part in converting these blank canvases into stunning fashion wear. Use your imagination to blend colours and create stunning designs that will adorn people’s feet in style.
    `,
    },
    {
      name: 'MoTEEf',
      desc: `Run your brush along a unique canvas. Paint out your imagination, and show your style in 'MoTEEf,' the t-shirt design competition. Let your creativity shine, no boundaries to your fashion.`,
    },
    {
      name: 'Artathon',
      desc: ` “Art is a way of life”. Come together in pairs and let out your inner artists as you put your best creativity to use. Embark on a time bound journey to put your imagination and artfulness on a canvas, one masterpiece at a time. 
    `,
    },
    {
      name: 'Blind Art',
      desc: `"Who says you need eyes to see the beauty in the world of art?" With eyes closed, creators open the depth of their mind, producing magnum opera that transcend the traditional notion of art. Come in pairs and witness this chaotic fun, as you combine flair with synergy, proving that art knows no boundaries.
    `,
    },
    {
      name: 'Glam Up!',
      desc: `Get ready to ‘Glam up!’ with make-up brushes in hand and talent in the atmosphere. It’s not just a make-up challenge, it’s a dazzling platform to reveal your inner diva, with your own vision of beauty and self expression. So join us to explore the transformative power of make-up. 
    `,
    },
    {
      name: 'La Croquis Marquee',
      desc: `Step into a world of style and glamour as imagination turns into reality on your hand drawn croquis. Unleash your inner fashion designer and let the room buzz with the sound of new ideas coming to life as you create your avant-garde masterpieces.
    `,
    },
    {
      name: 'Pixel Vista',
      desc: `"Why don't digital designers ever get lost? Because they always follow the pixelated road!" Show off your designing skills and bring dead pixels to life in our digital designing event 'Pixel Vista'.
    `,
    },
  ];
  const carpeDictumEvents = [
    {
      name: 'InVerse',
      desc: `The Annual Poetry Slam, Get Ready for a Poetry Extravaganza like Never Before! Blank verses, first love or breakup poems, humorous poems or melancholic ones, we are on lookout for all styles of poetry. Join us during the waves to experience a battleground where poetic prowess reigns supreme! 
    `,
    },
    {
      name: 'Cultural Gauntlet',
      desc: `Put your creativity to test! From testing your quick and witty thinking in JAM to your ability to guess a "Taboo" word from the clues given by your teammates! Be it defending your famous personality during Shipwreck or naming the most number of items in a given topic during "Categories", WE HAVE IT ALL!! Gather your team, brace yourselves for the ultimate linguistic challenge, and let the games begin!
    `,
    },
    {
      name: 'The Lit Quiz',
      desc: `Let the Pages Come to Life at Lit Quiz !! From timeless classics to contemporary bestsellers, from sagas to poems, Lit Quiz based entirely on literature. So bookworms, let your passion for literature guide you and join us for a literary adventure.
    `,
    },
    {
      name: 'Word Games',
      desc: `A Linguistic adventure like no other!!! Test your wit, vocabulary and wordplay skills as you decipher anagrams and crosswords and create extraordinary puns. With a store full of word games, Engage your brain in a battle of words that’s as entertaining as it is thought-provoking.
    `,
    },
    {
      name: 'Melas',
      desc: `Where Passion Meets Knowledge! Get ready for an exciting quiz with questions based on Movies/Music, Entertainment, Literature, Arts and Sports. Ace the elementary quiz rounds to become the top 6 finalists. Join us for an unforgettable day of knowledge, fun, and inspiration at MELAS! See you there!
    `,
    },
    {
      name: 'Querencia',
      desc: `A World of Imagination Unleashed: Let Your Story Begin! Imagine the suspense as you receive your secret prompts, each leading to a different world-medieval, dystopian, futuristic, etc. The excitement lies in discovering the theme and crafting your story on the spot! Let the adventure of writing begin!
    `,
    },
  ];
  const fNPhotoEvents = [
    {
      name: 'SHo(r)t',
      desc: `Action, camera, light! The exciting short film competition "Sho(r)t" invites you to explore the realm of storytelling. Bring your concept to life on film by working with a team of people to craft fascinating narratives. With the theme “Maybe things arent that bad”, unwind your camera roll and make your story come to life!
    `,
    },
    {
      name: 'Oh Snap!',
      desc: `An exhilarating online photography contest. Whether you're a seasoned pro or discovering your talent, this event welcomes everyone. With an intriguing theme like  "After Hours” it's your chance to tell your story through stunning visuals.
    `,
    },
  ];
  const quizFestEvents = [
    {
      name: 'Waves Open',
      desc: `The Waves Quiz Fest magnum opus. The grand finale.
    `,
    },
    {
      name: 'Mythomagic',
      desc: `From the Minotaur’s Labyrinth to the Book of Thoth, this quiz tests your mythological prowess.
    `,
    },
    { name: 'Vices Quiz', desc: `Waves C i love you <3` },
  ];
  const specialsEvents = [
    {
      name: 'Fashion Parade',
      desc: `Dazzle the audience with an explosive performance of beauty and elegance with your jaw dropping style and charisma this Fashion Parade at Waves ‘23.
    `,
    },
    {
      name: 'Mr and Miss Waves',
      desc: `Mr. and Ms. Waves is one of the "Big Four" events and one of our fest’s major highlights. It is a personality-based competition that judges the very essence of who you are, so be sure to bring the very best version of yourself to impress the triads of destiny.`,
    },
    {
      name: 'Show me the Funny',
      desc: `Show Me The Funny is an open mic stand-up comedy event. The event is open to all comedians, regardless of their experience or background. The only requirement is that you must be funnier than the funniest.
    `,
    },
    {
      name: 'Strangely Familiar',
      desc: `Strangely Familiar is a competition in which two participants, unknown to each other, are paired up and get to know each other by participating in quizzes and games as multiple teams. Judges for this event are generally famous Youtubers like from the channel Filter Copy.
    `,
    },
    {
      name: 'Comic Kriya',
      desc: `A new event introduced in the upcoming edition of Waves. This event is a comedy sketch competition, where participants will perform a short comedy sketch in front of a live audience.
    `,
    },
    { name: 'Irshaad', desc: `WavesC I love you <3` },
  ];
  const events = [
    florenceEvents,
    fNPhotoEvents,
    beauVistaEvents,
    quizFestEvents,
    specialsEvents,
  ];
  const [eventsList, setEventsList] = useState(['']);
  const variants = {
    enter: direction => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: direction => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <Box position='relative'>
      <Fonts />
      <Scroll
        showScroll={showScroll}
        setShowScroll={setShowScroll}
        scrollHead={scrollHead}
        eventsList={eventsList}
      />
      <Image src={bgimg} height='100vh' width='200vw' />
      <Box
        position={'absolute'}
        top={'0%'}
        height={'100%'}
        width={'100%'}
        display={'flex'}
        flexDir={'column'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <div
          style={{
            color: 'white',
            fontFamily: '"Dalek", cursive',
            fontSize: '10vw',
            fontWeight: '400',
            wordWrap: 'break-word',
            flex: 'auto',
            marginTop: '2rem',
          }}
        >
          E V E N T S
        </div>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            style={{
              position: 'absolute',
              backgroundImage: `url(${images[imageIndex]})`,
              backgroundSize: '6rem',
              backgroundRepeat: 'no-repeat',
              height: '12rem',
              width: '6rem',
              marginTop: '8rem',
            }}
            drag='x'
            onClick={() => {
              setScrollHead(text[imageIndex]);
              setEventsList(events[imageIndex]);
              setShowScroll(!showScroll);
            }}
            dragConstraints={{ left: 0, right: 0 }}
            custom={direction}
            variants={variants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <div
              style={{
                color: 'white',
                fontFamily: '"Dalek", cursive',
                fontSize: '7vw',
                fontWeight: '400',
                wordWrap: 'normal',
                flex: 'auto',
                marginTop: '8rem',
                width: '300%',
                textAlign: 'center',
                marginLeft: '-100%',
              }}
            >
              {text[imageIndex]}
            </div>
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default EventsMobile;
