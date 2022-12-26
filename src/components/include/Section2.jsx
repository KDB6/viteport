import React from 'react'

const Section2 = () => {
  return (
    <section id="section2">
            {/* web__main */}
            <article id="web__main">
                <div class="web__main-text">
                    <div>first.portfolio</div>
                    <div>web Site</div>
                </div>
                <div class="web__main-back">
                    <div>&</div>
                </div>
            </article>
            {/* // web__main */}

            {/* web__standard */}
            <article id="web__standard">
                <div>01</div>
                <div class="standard__img reveal">
                    <a href="https://kdb6.github.io/codingclass/site/site1/index.html"><img src="assets/img/webStandard.jpg" alt="웹표준사진" /></a>
                </div>
                <div class="standard__desc">
                    <div>web standard</div>
                    <div>
                        코딩에 대한 첫걸음을 딛은 웹표준 사이트입니다. 차별없이 모든 사용자들이 불편함없이
                        접근할 수 있도록 웹접근성을 기준으로 하여금 제작을 하였습니다. 슬라이드 구현에는
                        스와이프를 사용하였으며, 기본적인 구조를 활용하여 제작을 했습니다.
                    </div>
                    <div class="standard__view">
                        <div class="view__text"><a href="https://kdb6.github.io/codingclass/site/site1/index.html">view site</a></div>
                        {/* <div class="view__hover standard__hover"></div> */}
                        
                        <div class="view__text"><a href="https://github.com/KDB6/codingclass/blob/main/site/site1/index.html">view code</a></div>
                        <div class="view__hover__github standard__github"></div>
                    </div>
                </div>
            </article>
            {/* // web__standard */}

            {/* web__responsive */}
            <article id="web__responsive">
                <div>02</div>
                <div class="responsive__inner">
                    <div class="responsive__desc">
                        <div>responsive</div>
                        <div>
                            웹 스탠다드 사이트를 기준으로 하여금 제작한 반응형 사이트입니다.
                            모든 사용자들이 차별없이 이용할 수 있도록 웹접근성을 고려하여 제작하였으며,
                            미디어쿼리를 이용하여 어떤 기기든 유연하게 대처할 수 있도록 진행했습니다.
                        </div>
                        <div class="responsive__view">
                            <div><a href="https://kdb6.github.io/codingclass/site/site2/index.html">view site</a></div>
                            <div><a href="https://github.com/KDB6/codingclass/blob/main/site/site2/index.html">view code</a></div>
                        </div>
                    </div>
                    <div class="responsive__img reveal2">
                        <a href="https://kdb6.github.io/codingclass/site/site2/index.html"><img src="assets/img/responsive.jpg" alt="반응형사진" /></a>
                    </div>
                </div>
            </article>
            {/* // web__responsive */}
        </section>
  )
}

export default Section2