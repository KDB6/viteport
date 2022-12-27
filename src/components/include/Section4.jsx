import React from 'react'

import reactSite1 from './../../assets/img/reactSite1.jpg'
import reactSite2 from './../../assets/img/reactSite2.jpg'
import reactApi from './../../assets/img/reactApi.jpg'
import reactYoutube from './../../assets/img/reactYoutube.jpg'
import vueSite from './../../assets/img/vueSite.jpg'
import vueApi from './../../assets/img/vueApi.jpg'

const Section4 = () => {
    return (
        <section id="section4">
            {/* front__main */}
            <article id="front__main">
                <div>Front.end</div>
                <div>
                    I think the front end is the beginning of the developer. Although it is weak,
                    I would like to show you the portfolio of websites that I have collected and organized various data by applying
                    API to the react and vue I have learned, and I would like to announce the beginning of my development.
                </div>
            </article>

            
            {/* react__list */}
            <article id="react__list">
                {/* react__site */}
                <div className="react__site">
                    <div className="react__site-title">
                        <div>react site</div>
                        <div className="react__site-view">
                            <div><a href="https://kdb6-react.netlify.app/">site view</a></div>
                            <div><a href="https://github.com/KDB6/reactclassName">code view</a></div>
                        </div>
                    </div>
                    <div className="react__site-img">
                        <div><a href="https://kdb6-react.netlify.app/"><img src={reactSite1} alt="리액트사이트사진1" /></a></div>
                        <div><a href="https://kdb6-react.netlify.app/"><img src={reactSite2} alt="리액트사이트사진2" /></a></div>
                    </div>
                    <div>Foundation</div>
                </div>


                {/* react__main */}
                <div className="react__main">
                    react&vue collection
                </div>


                {/* react__api */}
                <div className="react__api">
                    <div className="react__api-left">
                        <div>1</div>
                        <div>REACT API</div>
                        <div className="react__api-view">
                            <div><a href="https://kdb6-reactapi.netlify.app/">view site</a></div>
                            <div><a href="https://github.com/KDB6/react_api">view code</a></div>
                        </div>
                        <div>
                            리액트에 대한 기본적인 구조를 이해하고, 과정에 대한 흐름을 파악하여
                            다양한 API에 데이터를 불러와 웹사이트를 제작을 하였습니다.
                            과정 내에서 컴포넌트로 나눈 구조와 javascript를 사용하였습니다.
                        </div>
                    </div>
                    <div className="react__api-right">
                        <a href="https://kdb6-reactapi.netlify.app/"><img src={reactApi} alt="리액트에이피아이사진" /></a>
                    </div>
                </div>


                {/* react__youtube */}
                <div className="react__youtube">
                    <div className="react__youtube-left">
                        <a href="https://kdb6react-youtube.netlify.app/"><img src={reactYoutube} alt="리액트에이피아이사진" /></a>
                    </div>
                    <div className="react__youtube-right">
                        <div>2</div>
                        <div>REACT YOUTUBE</div>
                        <div className="react__youtube-view">
                            <div><a href="https://kdb6react-youtube.netlify.app/">view site</a></div>
                            <div><a href="https://github.com/KDB6/react_youtube">view code</a></div>
                        </div>
                        <div>
                            리액트에 대한 기본적인 구조를 이해하고, 과정에 대한 흐름을 파악하여
                            YOUTUBE API에 데이터를 불러와 비슷한 구조에 웹사이트를 제작을 하였습니다.
                            과정 내에서 컴포넌트로 나눈 구조와 javascript를 사용하였습니다.
                        </div>
                    </div>
                </div>

                
                {/* vue__main */}
                {/* <div className="vue__main">
                    Vue of site & api
                </div> */}


                {/* vue__site */}
                <div className="vue__site">
                    <div className="vue__site-left">
                        <div>front-end vue</div>
                        <div className="vue__site-info">
                            <div className="vue__site-desc">
                                <div>&vue site</div>
                                <div>
                                    뷰를 사용하여 기초적인 웹사이트를 제작하였습니다.
                                    해당 과정에서는 모든 사용자가 불편함을 느껴지지 않도록
                                    웹접근성을 기준으로 하여금 제작하였습니다.
                                </div>
                            </div>
                            <div className="vue__site-view">
                                <div><a href="https://vueclassName6.web.app/">view site</a></div>
                                <div><a href="https://github.com/KDB6/vueclassName">view code</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="vue__site-right">
                        <a href="https://vueclassName6.web.app/"><img src={vueSite} alt="뷰사이트사진" /></a>
                    </div>
                </div>


                {/* vue__api */}
                <div className="vue__api">
                    <div className="vue__api-left">
                        <a href="https://kdb6-vueapi.netlify.app/"><img src={vueApi} alt="뷰에이피아이사진" /></a>
                    </div>
                    <div className="vue__api-right">
                        <div>front-end vue</div>
                        <div className="vue__api-info">
                            <div className="vue__api-desc">
                                <div>&vue api</div>
                                <div>
                                    뷰를 사용하여 기초적인 웹사이트를 제작하였습니다.
                                    해당 과정에서는 모든 사용자가 불편함을 느껴지지 않도록
                                    웹접근성을 기준으로 하여금 제작하였습니다.
                                </div>
                            </div>
                            <div className="vue__api-view">
                                <div><a href="https://kdb6-vueapi.netlify.app/">view site</a></div>
                                <div><a href="https://github.com/KDB6/vue_api">view code</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            {/* // react__list */}
        </section>
    )
}

export default Section4