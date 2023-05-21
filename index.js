const axios = require("axios");
const cheerio = require("cheerio");

async function getData(url) {

    const response = await axios.get(url);

    if(response == "error"){
        return null;
    }

    const $ = cheerio.load(response.data);

    const $battle_l = $("div.level-info__item").children();
    const battle_lev = $battle_l[1].children[1].data;

    console.log(battle_lev);

    const $expedition_l = $("div.level-info__expedition").children();
    const expedition_lev = $expedition_l[1].children[1].data;

    console.log(expedition_lev);

    const $item_l = $("div.level-info2__expedition").children();
    const item_lev = $item_l[1].children[1].data;
     
    console.log(item_lev);

    const $baiscAbility = $("div.profile-ability-basic ul li span");
    let baiscAblity_l = [];

    $baiscAbility.each(function(i,elem){
        baiscAblity_l[i] = $baiscAbility[i].children[0].data;
    });

    console.log(baiscAblity_l);

	const $battleAblity = $("div.profile-ability-battle ul li span");
    let battleAblity_l = [];

    $battleAblity.each(function(i,elem){
        battleAblity_l[i] = $battleAblity[i].children[0].data;
    });

    console.log(battleAblity_l);

	const $engraveAblity = $("div.swiper-wrapper ul li span");

    let engraveAblity = [];

    $engraveAblity.each(function(i,elem){
        engraveAblity[i] = $engraveAblity[i].children[0].data;
    })

    console.log(engraveAblity);

}

async function test(user) {

    var link = "https://lostark.game.onstove.com/Profile/Character/"+user;

    const URL = encodeURI(link);

    var body = await getData(URL);

}

test("노돌리");