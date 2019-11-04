const config = {
    profile: {
        githubAccountId: "aerain",
        profileImg: "https://avatars3.githubusercontent.com/u/11453924?s=460&v=4",
        email: "j40f893@gmail.com",
        description: "",
        github: "https://github.com/WonBeomChoi"
    },
    skills: [
        "Python", 
        "Django", 
        "React.js",
        "HTML5/CSS3/JavaScript", 
        "React-Native", 
        "Git",
        "Keras",
        "Node.js",
        "Tensorflow"
    ],
    careers: [
        {
            name: "Jeju National Univ. System Software Lab",
            duration: "2017.05 ~ 2019.07",
            description: "시스템 소프트웨어 연구실에 학생연구원으로 있습니다. 산학협력사업에 관련한 일들을 진행하고 있습니다. 현재는 반려견, 소 목장등 동물들과 관련한 연구를 진행중입니다."
        },
        {
            name: "Kakao Assistant (제주스마트팀 FE) ",
            duration: "2019.07 ~",
            description: "카카오 제주스마트 팀에서 제주위드카카오 프론트엔드 개발 어시스턴트로 근무 중입니다. 사이트의 OpenGraph 관련 메타태그 처리에 대해 개발했습니다."
        }
    ],
    educations: [
        {
            name: "KakaoTrack ScholarShip, Jeju National University",
            duration: "2017.03 ~",
            description: "2017년부터 제주대학교와 카카오가 주관하는 Kakao트랙 교육을 받고 있습니다."
        }
    ],
    presentations: [
        {
            name: "제주도 데이터 사이언스 캐글 밋업",
            duration: "2019.01 ~ 2019.03",
            description: "캐글 플랫폼을 활용한 데이터 사이언스 튜토리얼 밋업을 개최했습니다.평소 관심 가지고있던 머신러닝 분야에 좀 더 재미를 붙이게 되는 계기가 되었습니다. 분석해보고 싶은 데이터를 분석하고, 결과를 보며 즐거움을 얻었습니다. 인기 게임인 LOL(League Of Legends)의 프로게이머, Faker선수의 경기를 기반으로 데이터를 분석하고 승패를 예측하는 과정을 발표했습니다.",
            contribution: "League Of Legends API를 사용하여 데이터 수집을 한 후, python pands/matplotlib 라이브러리를 이용해 데이터 분석/시각화를 하고,  sklearn을 이용해 예측모델 생성을 하였습니다. 데이터 분석과 예측모델생성을 하는 전체적인 과정을 튜토리얼 느낌으로 구성하고 성공적으로 발표를 마쳤습니다.",
            skills: ["Node.js", "Python", "Pandas", "Sklearn", "Matplotlib"],
            images: ["images/meetup/meetup1.png"],
            etc: ["https://docs.google.com/presentation/d/16K9oEVgYCa2dv3vnP1ioWNT2TESMNXjcg8ZqrrF1al8/edit?usp=sharing"],
        }
    ],
    projects: [{
            name: "AT(Arzra Takarsen))",
            duration: "2019.09 ~ 2019.11",
            description: ` 블록체인을 활용한 중고거래 플랫폼입니다. 

            기존 에스크로방식으로 이루어지는 기존의 거래방식에서 이더리움에서 지원하는 스마트 컨트렉트를 이용하여 거래를 진행하도록 했습니다. 제 3자의 거래간섭으로 인한 수수료를 줄이는 방법으로 블록체인을 도입해 보았습니다.

            제 34회 제주대학교 컴퓨터공학전공 전시회 대상 수상작품입니다.`,
            contribution: "",
            skills: ["AWS(RDS, S3)", "Django", "HTML,CSS,BootStrap", "Solidity","Web3.py"],
            images: ["images/mylittleticket/prize.jpeg", "images/mylittleticket/teammember.jpeg"]
        },
        {
            name: "마리켓(마이 리틀 티켓)",
            duration: "2019.09 ~ 2019.11",
            description: ` 무형 상품을 위한 판매 플랫폼입니다. 

             판매자가 상품을 등록하면 일반 사용자가 무형 상품을 구매하여 해당 상품에 대한 쿠폰,티켓을 발급 받을 수 있고, 해당 쿠폰에 찍힌 qr코드를 찍어서 사용처리를 할 수 있습니다.
             해당 프로젝트는 각자의 기술스택을 쌓고 공부하기 위해서 개발한 프로젝트입니다. 또한 DevOps의 지속적 통합, 전달을 함께 공부하고자 만든 프로젝트입니다.

            제 34회 제주대학교 컴퓨터공학전공 전시회 장려상 수상작품입니다.`,
            contribution: "GraphQL서버 작업을 맡았습니다. 사용자측 UI디자인또한 담당하였습니다.",
            skills: ["Spring WebFlux(Java)", "AWS(Elastic BeanStalk, Cognito, DynamoDB)", "GraphQL", "Vue.js(Nuxt.js)", "Travis(CI/CD)", "Android(RxJava, MVVM)"],
            images: ["images/mylittleticket/prize.jpeg", "images/mylittleticket/teammember.jpeg"]
        },
        {
            name: "제대로 가자",
            duration: "2017.09 ~ 현재",
            description: `기존에 서비스 되던 제주대 꿀팁 앱의 개발자 선배님이 졸업하셔서 이에 ui 개편과 유지보수를 직접 하기 위해 개발하였습니다. 제주대 학사정보시스템 연동을 수행하여 시간표, 성적등을 체크할 수 있고, 그 밖에 제주대 내 학생 식당, 기숙사식당 주간 메뉴, 도서 좌석 등, 제주대학교 학생들이 알아두면 좋은 꿀팁들을 모았습니다. 
            
            Play Store, App Store에 현재 업로드중이며, 각각 다운로드 수 900+, 300+를 기록하고있습니다.`,
            contribution: "PM을 맡았습니다. UX/UI 디자인과 FE 개발, 제주대 사이트 크롤링 파트 등을 개발하였습니다.",
            skills: ["React-Native", "ES6+", "Android", "iOS"],
            images: ["images/jedaero/jedaero1.png", "images/jedaero/jedaero2.png", "images/jedaero/jedaero3.png"],
            etc: [
                "https://play.google.com/store/apps/details?id=com.jedaeroreactnative",
                "https://apps.apple.com/kr/app/%EC%A0%9C%EB%8C%80%EB%A1%9C-%EA%B0%80%EC%9E%90/id1477790014",
                "https://github.com/jnuro/jedaero"
            ],
        }
    ]
}

export default config;
