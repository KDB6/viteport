import React from 'react'

import about from './../../assets/img/about.png'

const Section1 = () => {
    return (
        <section id="section1">
            <article id="about">
                <div className="about__main">
                    <div className="about__main-text">
                        <div>Passion</div>
                        <div>Creative</div>
                        <div>Shining</div>
                    </div>
                    <div className="about__main-img">
                        <img src={about} alt="어바웃사진" />
                    </div>
                </div>
                <div className="about__desc">
                    <p>
                        개발 언어와 글씨로 무언가를 창조를 하는 것에 흥미를 느끼고, 시작하게 되었습니다.
                        해당 포트폴리오는 제가 개발자가 되기 위한 첫 걸음을 나아가는 포트폴리오이며,
                        저의 배움의 집합체입니다. 미약하지만, 제가 점점 인생에 새기는 발자국을 재밌게 봐주셨으면 감사합니다.
                    </p>
                </div>
            </article>
        </section>
    )
}

export default Section1