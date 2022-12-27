import React from 'react'

import game from './../../assets/img/game.jpg'
import music from './../../assets/img/music.svg'
import searchSvg from './../../assets/img/search.svg'
import card from './../../assets/img/card.svg'
import tetris from './../../assets/img/tetris.svg'
import mouse from './../../assets/img/mouse.svg'
import mouse__cir from './../../assets/img/mouse__cir.svg'
import search from './../../assets/img/search.jpg'
import slider from './../../assets/img/slider.jpg'
import quiz1 from './../../assets/img/quiz1.jpg'
import quiz2 from './../../assets/img/quiz2.jpg'
import quiz3 from './../../assets/img/quiz3.jpg'
import quiz4 from './../../assets/img/quiz4.jpg'
import quiz5 from './../../assets/img/quiz5.jpg'
import parallax1 from './../../assets/img/parallax1.jpg'
import parallax2 from './../../assets/img/parallax2.jpg'
import parallax3 from './../../assets/img/parallax3.jpg'

const Section3 = () => {
    return (
        <section id="section3">
            {/* javascript__main */}
            <article id="javascript__main">
                <div className="javascript__main-text">
                    <div>javascript</div>
                    <div>basic&effect</div>
                    <div>second.portfolio</div>
                </div>
                <div className="javascript__main-back">
                    <div>&ef</div>
                </div>
            </article>
            {/* // javascript__main */}


            {/* javascript__basic */}
            <article id="javascript__basic" className="backColor headerColor rotateColor" data-color="#222125" header-color="#F4E8DB" data-fill="#F4E8DB" data-stroke="#F4E8DB">
                <div className="basic__inner">
                    <div id="basic__method" className="basic__method">method</div>
                    <div className="basic__desc">
                        <div>javascript basic</div>
                        <div className="basic__view">
                            <div><a href="https://kdb6.github.io/codingclassName/javascript/index.html">view site</a></div>
                            <div><a href="https://ipkg7210.tistory.com/">view blog</a></div>
                        </div>
                    </div>
                </div>
            </article>
            {/* // javascript__basic */}


            {/* javascript-GM__main */}
            <article id="javascript-GM__main">
                <div className="GM__title">
                    <span>game&mouse</span>
                </div>
                <div className="GM__desc">
                    Various games and mouse effects were created using JavaScript,
                    an object-based script programming language. This course was made
                    using what I had learned.
                </div>
            </article>
            {/* // javascript__GM */}


            {/* javascript-game__mouse */}
            <article id="javascript-game__mouse">
                {/* game__main */}
                <div className="game__main">
                    <div className="game__img reveal2">
                        <img src={game} alt="게임메인사진" />
                    </div>
                    <div>&game</div>
                </div>

                {/* game__list */}
                <div className="game__list">
                    <div className="list__left">
                        <div>play game</div>
                    </div>

                    <div className="list__right">
                        <div className="music">
                            <div className="music__desc">
                                <div>&music</div>
                                <div>
                                    자바스크립트를 사용하여 뮤직 플레이어를 제작하였습니다.
                                    함수와 각 개체를 지정하여 플레이어 내 각 기능을 구현하였습니다.
                                </div>
                                <div className="music__view">
                                    <div><a href="https://kdb6.github.io/codingclassName/javascript/effect/game/gameEffect01.html">play music</a></div>
                                    <div><a href="https://github.com/KDB6/codingclassName/blob/main/javascript/assets/js/music.js">view code</a></div>
                                </div>
                            </div>
                            <div className="music__icon">
                                <div><a href="https://kdb6.github.io/codingclassName/javascript/effect/game/gameEffect01.html">MUSIC</a></div>
                                <div>
                                    <img src={music} alt="뮤직아이콘" />
                                </div>
                            </div>
                        </div>

                        <div className="game-search">
                            <div className="game-search__desc">
                                <div>&search</div>
                                <div>
                                    자바스크립트를 사용하여 뮤직 플레이어를 제작하였습니다.
                                    함수와 각 개체를 지정하여 플레이어 내 각 기능을 구현하였습니다.
                                </div>
                                <div className="game-search__view">
                                    <div><a href="https://kdb6.github.io/codingclassName/javascript/effect/game/gameEffect01.html">play game</a></div>
                                    <div><a href="https://github.com/KDB6/codingclassName/blob/main/javascript/assets/js/gameSearch.js">view code</a></div>
                                </div>
                            </div>
                            <div className="game-search__icon">
                                <div><a href="https://kdb6.github.io/codingclassName/javascript/effect/game/gameEffect01.html">SEARCH</a></div>
                                <div>
                                    <img src={searchSvg} alt="뮤직아이콘" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="card">
                            <div className="card__desc">
                                <div>&card</div>
                                <div>
                                    자바스크립트를 사용하여 뮤직 플레이어를 제작하였습니다.
                                    함수와 각 개체를 지정하여 플레이어 내 각 기능을 구현하였습니다.
                                </div>
                                <div className="card__view">
                                    <div><a href="https://kdb6.github.io/codingclassName/javascript/effect/game/gameEffect01.html">play game</a></div>
                                    <div><a href="https://github.com/KDB6/codingclassName/blob/main/javascript/assets/js/memory.js">view code</a></div>
                                </div>
                            </div>
                            <div className="card__icon">
                                <div><a href="https://kdb6.github.io/codingclassName/javascript/effect/game/gameEffect01.html">CARD</a></div>
                                <div>
                                    <img src={card} alt="뮤직아이콘" />
                                </div>
                            </div>
                        </div>

                        <div className="tetris">
                            <div className="tetris__desc">
                                <div>&tetris</div>
                                <div>
                                    자바스크립트를 사용하여 뮤직 플레이어를 제작하였습니다.
                                    함수와 각 개체를 지정하여 플레이어 내 각 기능을 구현하였습니다.
                                </div>
                                <div className="tetris__view">
                                    <div><a href="https://kdb6.github.io/codingclassName/javascript/effect/game/gameEffect01.html">play game</a></div>
                                    <div><a href="https://github.com/KDB6/codingclassName/blob/main/javascript/assets/js/tetris.js">view code</a></div>
                                </div>
                            </div>
                            <div className="tetris__icon">
                                <div><a href="https://kdb6.github.io/codingclassName/javascript/effect/game/gameEffect01.html">TETRIS</a></div>
                                <div>
                                    <img src={tetris} alt="뮤직아이콘" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* mouse */}
                <div className="mouse">
                    <div className="mouse__left">
                        <div>&mouse</div>
                        <div>
                            자바스크립트를 이용하여 기초적인 마우스의 이펙트를 구현화 시켰습니다.
                            해당 과정에서는 자바스크립트에 대한 배움을 토대로 제작하였으며,
                            각 종 기본적인 구조와 메서드들을 활용하였습니다.
                        </div>
                        <div className="mouse__view">
                            <div><a href="https://kdb6.github.io/codingclassName/javascript/effect/mouse/mouseEffect01.html">view site</a></div>
                            <div><a href="https://github.com/KDB6/codingclassName/tree/main/javascript/effect/mouse">view code</a></div>
                        </div>
                    </div>
                    <div className="mouse__right">
                        <div><a href="https://kdb6.github.io/codingclassName/javascript/effect/mouse/mouseEffect01.html">&mouse</a></div>
                        <div className="mouse__img">
                            <div className="mouse__img1 reveal2">
                                <img src={mouse} alt="마우스배경사진" />
                            </div>
                            <div className="mouse__img2">
                                <img className="mouseCircle" src={mouse__cir} alt="마우스원사진" />
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            {/* // javascript__game */}


            {/* javascript-SS__main */}
            <article id="javascript-SS__main">
                <div className="SS__title">
                    <span>search&slider</span>
                </div>
                <div className="SS__desc">
                    Each search function and slide function were implemented and the effects
                    were based on the basic structure. In this process, I implemented each function
                    based on knowledge in JavaScript that I learned.
                </div>
            </article>
            {/* // javascript__SS */}


            {/* javascript-search__slider */}
            <article id="javascript-search__slider">
                {/* search */}
                <div className="search">
                    <div>search</div>
                    <div className="search__desc1">
                        <div>@made in Dabin</div>
                        <div>design by korea kdb6</div>
                    </div>
                    <div className="search__img">
                        <a href="https://kdb6.github.io/codingclassName/javascript/effect/search/searchEffect01.html"><img src={search} alt="서치사진" /></a>
                    </div>
                    <div className="search__desc2">
                        <div>
                            <div>Javascript of effect by search</div>
                            <div>October 2022</div>
                        </div>
                        <div className="search__view">
                            <div><a href="https://kdb6.github.io/codingclassName/javascript/effect/search/searchEffect01.html">view site</a></div>
                            <div><a href="https://github.com/KDB6/codingclassName/tree/main/javascript/effect/search">view code</a></div>
                        </div>
                    </div>
                </div>

                {/* slider */}
                <div className="slider">
                    <div>slider</div>
                    <div className="slider__desc1">
                        <div>@made in Dabin</div>
                        <div>design by korea kdb6</div>
                    </div>
                    <div className="slider__img">
                        <a href="https://kdb6.github.io/codingclassName/javascript/effect/slider/sliderEffect01.html"><img src={slider} alt="슬라이드사진" /></a>
                    </div>
                    <div className="slider__desc2">
                        <div>
                            <div>Javascript of effect by slider</div>
                            <div>October 2022</div>
                        </div>
                        <div className="slider__view">
                            <div><a href="https://kdb6.github.io/codingclassName/javascript/effect/slider/sliderEffect01.html">view site</a></div>
                            <div><a href="https://github.com/KDB6/codingclassName/tree/main/javascript/effect/slider">view code</a></div>
                        </div>
                    </div>
                </div>
            </article>
            {/* // javascript-search__slider */}


            {/* javascript-QP__main */}
            <article id="javascript-QP__main">
                <div className="QP__title">
                    <span>quiz&<span>parallax</span></span>
                </div>
                <div className="QP__desc">
                    We created different types of quizzes based on different methods and JavaScript foundations,
                    and we also created a parallelx effect that breathes into websites that can be monotonous.
                </div>
            </article>
            {/* // javascript__MG */}


            {/* javascript-quiz__parallax */}
            <article id="javascript-quiz__parallax">
                {/* quiz */}
                <div className="quiz">
                    <div className="quiz__img">
                        <div><a href="https://kdb6.github.io/codingclassName/javascript/effect/quiz/quizEffect01.html"><img src={quiz1} alt="퀴즈사진1" /></a></div>
                        <div><a href="https://kdb6.github.io/codingclassName/javascript/effect/quiz/quizEffect02.html"><img src={quiz2} alt="퀴즈사진2" /></a></div>
                        <div><a href="https://kdb6.github.io/codingclassName/javascript/effect/quiz/quizEffect03.html"><img src={quiz3} alt="퀴즈사진3" /></a></div>
                        <div><a href="https://kdb6.github.io/codingclassName/javascript/effect/quiz/quizEffect04.html"><img src={quiz4} alt="퀴즈사진4" /></a></div>
                        <div><a href="https://kdb6.github.io/codingclassName/javascript/effect/quiz/quizEffect05.html"><img src={quiz5} alt="퀴즈사진5" /></a></div>
                    </div>
                    <div className="quiz__desc">
                        <div className="quiz__view">
                            <div><a href="https://kdb6.github.io/codingclassName/javascript/effect/quiz/quizEffect01.html">quiz view</a></div>
                            <div><a href="https://github.com/KDB6/codingclassName/tree/main/javascript/effect/quiz">code view</a></div>
                        </div>
                        <div>&quiz</div>
                    </div>
                </div>

                {/* parallax */}
                <div className="parallax">
                    <div className="parallax__img">
                        <div><a href="https://kdb6.github.io/codingclassName/javascript/effect/parallax/parallaxEffect01.html"><img src={parallax1} alt="페럴렉스사진1" /></a></div>
                        <div><a href="https://kdb6.github.io/codingclassName/javascript/effect/parallax/parallaxEffect03.html"><img src={parallax2} alt="페럴렉스사진2" /></a></div>
                        <div><a href="https://kdb6.github.io/codingclassName/javascript/effect/parallax/parallaxEffect05.html"><img src={parallax3} alt="페럴렉스사진3" /></a></div>
                    </div>
                    <div className="parallax__desc">
                        <div>&<span>parallax</span></div>
                        <div className="parallax__view">
                            <div><a href="https://kdb6.github.io/codingclassName/javascript/effect/parallax/parallaxEffect01.html">parallax view</a></div>
                            <div><a href="https://github.com/KDB6/codingclassName/tree/main/javascript/effect/parallax">code view</a></div>
                        </div>
                    </div>
                </div>
            </article>
            {/* // javascript-quiz__parallax */}
        </section>
    )
}

export default Section3