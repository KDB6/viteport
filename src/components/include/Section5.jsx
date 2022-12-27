import React from 'react'

import phpStudy from './../../assets/img/phpStudy.jpg'
import phpProject from './../../assets/img/phpProject.jpg'

const Section5 = () => {
    return (
        <section id="section5">
            {/* php__main */}
            <article id="php__main">
                <div className="php__main-text">
                    <div>Hypertext</div>
                    <div>Preprocessor</div>
                </div>
                <div className="php__main-back">
                    <div>&pr</div>
                </div>
            </article>


            {/* php__study */}
            <div id="php__study">
                <div className="php__study-title">
                    <div>php study</div>
                    <div>created a php site with a basic structure.</div>
                </div>
                <div className="php__study-inner">
                    <div className="php__study-left">
                        <div className="php__study-info">
                            <div className="php__study-info1">
                                <div>made</div>
                                <div>October. 2022</div>
                            </div>
                            <div className="php__study-info2">
                                <div>programming</div>
                                <div>php</div>
                            </div>
                            <div className="php__study-info3">
                                <div>function</div>
                                <div>login. join. board etc.</div>
                            </div>
                        </div>
                        <div className="php__study-img reveal">
                            <a href="http://ipkg72102.dothome.co.kr/phpclassName/html/main.html"><img src={phpStudy} alt="피에이치피스터디사진" /></a>
                        </div>
                    </div>
                    <div className="php__study-right">
                        <div>PHP STUDY</div>
                        <div>
                            PHP에 대한 지식을 토대로 서버에서 각 스크립트와 화면을 구현하였으며,
                            MYSQL연동과 데이터베이스를 이용하여 각 회원 관리와 게시물 저장 등등
                            여러가지 기능들을 구현하였습니다.
                        </div>
                        <div className="php__study-view">
                            <div><a href="http://ipkg72102.dothome.co.kr/phpclassName/html/main.html">view site</a></div>
                            <div><a href="https://github.com/KDB6/codingclassName/tree/main/phpclassName">view code</a></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* php__project */}
            <div id="php__project">
                <div className="php__project-title">
                    <div>php project</div>
                    <div>made a website using php as a team project.</div>
                </div>
                <div className="php__project-inner">
                    <div className="php__project-left">
                        <div>PHP PROJECT</div>
                        <div>
                            PHP에 대한 지식을 토대로 서버에서 각 스크립트와 화면을 구현하였으며,
                            MYSQL연동과 데이터베이스를 이용하여 각 회원 관리와 게시물 저장 등등
                            여러가지 기능들을 구현하였습니다.
                        </div>
                        <div className="php__project-view">
                            <div><a href="http://ipkg72102.dothome.co.kr/project/php/main.php">view site</a></div>
                            <div><a href="https://github.com/KDB6/codingclassName/tree/main/project">view code</a></div>
                        </div>
                    </div>
                    <div className="php__project-right">
                        <div className="php__project-info">
                            <div className="php__project-info1">
                                <div>made</div>
                                <div>November. 2022</div>
                            </div>
                            <div className="php__project-info2">
                                <div>topic</div>
                                <div>Animal hospital</div>
                            </div>
                            <div className="php__project-info3">
                                <div>function</div>
                                <div>login. join. board. view etc.</div>
                            </div>
                        </div>
                        <div className="php__project-img reveal">
                            <a href="http://ipkg72102.dothome.co.kr/project/php/main.php"><img src={phpProject} alt="피에이치피프로젝트사진" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section5