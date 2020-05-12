const setHeroName = (heroName) => {
    switch (heroName) {
        case "dva":
            heroName = "D.va";
            break;
        case "widowmaker":
            heroName = "위도우메이커";
            break;
        case "reinhardt":
            heroName = "라인하르트";
            break;
        case "zenyatta":
            heroName = "젠야타";
            break;
        case "tracer":
            heroName = "트레이서";
            break;
        case "zarya":
            heroName = "자리야";
            break;
        case "genji":
            heroName = "겐지";
            break;
        case "orisa":
            heroName = "오리사";
            break;
        case "winston":
            heroName = "윈스턴";
            break;
        case "pharah":
            heroName = "파라";
            break;
        case "mccree":
            heroName = "맥크리";
            break;
        case "mercy":
            heroName = "메르시";
            break;
        case "hanzo":
            heroName = "한조";
            break;
        case "lucio":
            heroName = "루시우";
            break;
        case "ana":
            heroName = "아나";
            break;
        case "soldier-76":
            heroName = "솔저76";
            break;
        case "doomfist":
            heroName = "둠피스트";
            break;
        case "reaper":
            heroName = "리퍼";
            break;
        case "mei":
            heroName = "메이";
            break;
        case "Bastion":
            heroName = "바스티온";
            break;
        case "sombra":
            heroName = "솜브라";
            break;
        case "symmetra":
            heroName = "시메트라";
            break;
        case "ashe":
            heroName = "애쉬";
            break;
        case "junkrat":
            heroName = "정크랫";
            break;
        case "torbjörn":
            heroName = "토르비욘";
            break;
        case "wrecking ball":
            heroName = "레킹볼";
            break;
        case "roadhog":
            heroName = "로드호그";
            break;
        case "moira":
            heroName = "모이라";
            break;
        case "baptiste":
            heroName = "바티스트";
            break;
        case "brigitte":
            heroName = "브리기테";
            break;
        default:
            heroName = undefined;
            break;
    }

    return heroName;
};

module.exports = {
    setHeroName,
};
