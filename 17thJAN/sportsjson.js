cricket = {
    "teams":[
       {
          "teamName":"Australia",
          "ownGround":"sydney",
          "ranking":2,
          "coach":{
             "batCoach":"rickyponting",
             "bowlCoach":"symonds",
             "headCoach":"mike hussey"
          },
          "playing11":[
             {
                "captain":true,
                "playerName":"SteveSmith",
                "age":"30",
                "playerType":"Batsman",
                "acheivements":[
                   {
                      "achievementName":"worldcup50",
                      "year":"2015"
                   }
                ]
             },
             {
                "captain":false,
                "playerName":"Mitchell Starc",
                "age":"31",
                "playerType":"Bowler",
                "acheivements":[
                   {
                      "achievementName":"worldcup50",
                      "year":"2015"
                   }
                ]
             }
          ],
          "trophies":[
             {
                "trophyName":"worldcup50",
                "year":"2015",
                "opponent":"NewZealand"
             },
             {
                "trophyName":"worldcup20",
                "year":"2021",
                "opponent":"NewZealand"
             },
             {
                "trophyName":"worldcup50",
                "year":"2007",
                "opponent":"India"
             },
             {
                "trophyName":"worldcup50",
                "year":"2003",
                "opponent":"Pakistan"
             }
          ]
       },
       {
          "teamName":"India",
          "ownGround":"Chennai",
          "ranking":1,
          "coach":{
             "batCoach":"SachinTendulkar",
             "bowlCoach":"Nehra",
             "headCoach":"MSDhoni"
          },
          "playing11":[
             {
                "captain":true,
                "playerName":"Virat Kohli",
                "age":"31",
                "playerType":"Batsman",
                "acheivements":[
                   {
                      "achievementName":"worldcup50",
                      "year":"2011"
                   }
                ]
             },
             {
                "captain":false,
                "playerName":"Ravindra Jadeja",
                "age":"30",
                "playerType":"AllRounder",
                "acheivements":[
                   {
                      "achievementName":"worldcup20",
                      "year":"2007"
                   }
                ]
             }
          ],
          "trophies":[
             {
                "trophyName":"worldcup50",
                "year":"2011",
                "opponent":"SriLanka"
             },
             {
                "trophyName":"worldcup20",
                "year":"2007",
                "opponent":"Pakistan"
             },
             {
                "trophyName":"worldcupCtrophy",
                "year":"2013",
                "opponent":"England"
             }
          ]
       },
       {
          "teamName":"England",
          "ownGround":"London",
          "ranking":3,
          "coach":{
             "batCoach":"Strauss",
             "bowlCoach":"Broad",
             "headCoach":"Vaghen"
          },
          "playing11":[
             {
                "captain":true,
                "playerName":"Joe Root",
                "age":"29",
                "playerType":"Batsman",
                "acheivements":[
                   {
                      "achievementName":"worldcup50",
                      "year":"2019"
                   }
                ]
             },
             {
                "captain":false,
                "playerName":"Sam Curran",
                "age":"25",
                "playerType":"AllRounder",
                "acheivements":[
                   {
                      "achievementName":"worldcup50",
                      "year":"2019"
                   }
                ]
             }
          ],
          "trophies":[
             {
                "trophyName":"worldcup50",
                "year":"2019",
                "opponent":"NewZealand"
             },
             {
                "trophyName":"worldcup20",
                "year":"2009",
                "opponent":"Pakistan"
             }
          ]
       }
    ]
 }
console.log(cricket);





// ADD,UPDATE,DELETE
// teams add update delete
// playing 11 add , update ,delete
// tropies add update delete
// player individual achievement add update delete

// GET 
// show playing 11 of a teams      - done
// show captains of all teams         - done
// show youngest captain and older captain  - done
// show most tryphy team  - done
// show team name , own ground and head coach of all teams. - done
// show recent trophy of the one teams. 
// sort team tropies count



// show playing 11 of a teams
cricket.teams.forEach((element) =>{
    console.log("Team Name  :", element.teamName);
})



// show captains of all teams
let tempArr=[];
tempArr = cricket.teams.map((element) =>{
         return element.playing11.filter((ele) =>
         {
           if(ele.captain == true)
           return  ele;
         });
})
console.log(tempArr);

// show youngest captain and older captain
let captainArr = [];
 cricket.teams.forEach((element) =>{
    return element.playing11.forEach((ele) =>
    {
      if(ele.captain == true)
      captainArr.push({"teamName":element.teamName,"CaptainName":ele.playerName,"CaptainAge":ele.age});
    });
})
console.log(captainArr);
    sortedCaptains = captainArr.sort((vala,valb)=>{
         return valb.CaptainAge - vala.CaptainAge 
    })
console.log(`Young Captain is ${sortedCaptains[sortedCaptains.length-1].CaptainName}`);
console.log(`Elder Captain is ${sortedCaptains[0].CaptainName}`);

// show teamname , own ground and head coach of all teams

let teamData =[];
teamData = cricket.teams.map((elem)=>{
    return  {"teamName":elem.teamName,"OwnGround":elem.ownGround,"HeadCoach":elem.coach.headCoach};
})
console.table(teamData);


// checking all teams have their ranking
boolRanking = cricket.teams.every((element)=>{
      return element.ranking != null;
})
console.log(boolRanking);

//most trophies of each teams
temp = cricket.teams.map((element)=>{
   return {"TeamName":element.teamName,"Trophies":element.trophies.length}
}) 
// trophy wise ascending order
console.log(temp.sort((a,b) => {
return b.Trophies - a.Trophies 
}));


// show playing 11 of particular team   
let play11;
function  getPlaying11(tName){
cricket.teams.forEach((element,index)=>{
       if(element.teamName == tName){
          play11 = element.playing11.map((ele)=>{
              return {playerName:ele.playerName,playerType:ele.playerType}
          })
        }
    })
}
getPlaying11('India');
console.log(play11);

let recentArr =[];
// recent trophy of team
cricket.teams.forEach((ele)=>{
    let temp;
    temp = ele.trophies.sort((fil1,fil2)=>{
        return fil1.year - fil2.year
    })
    temp.TeamName = ele.teamName;
    console.log(temp);
    recentArr.push(temp);
    

})
recentTrophy = recentArr.map((elem)=>{ 
    return elem[elem.length-1]
})
console.log(recentArr);
console.log("Recent Trophy",recentTrophy);


function addPlaying11(cap,playname,playage,playtype,playachieve){
    Playing11Obj = {
        captain:null,
        playerName : null,
        age:null,
        playerType:null,
        achievements:[]
      }
      Playing11Obj.captain = cap;
      Playing11Obj.playerName = playname;
      Playing11Obj.age = playage;
      Playing11Obj.playerType = playtype;
      for(let val in playachieve)
      Playing11Obj.achievements.push(playachieve[val]);
      return Playing11Obj;
}
addPlayerIntoTeam('India',false,'Rohit Sharma',33,'Opener',[playerIndiAchieve('worldcup',2007),playerIndiAchieve('ThriceDoubleCentury',2014)])
function addPlayerIntoTeam(team,cap,playname,playage,playtype,playachieve){
   cricket.teams.forEach((ele)=>{
       if(ele.teamName === team){
       temp = addPlaying11(cap,playname,playage,playtype,playachieve);  
       ele.playing11.push(temp);
    }
   })
}

function addWholeTeam(Tname,TOGround,Trank,Tcoach,Tplay11,Ttrophy){
    let TFound =  false;
    let temp;
    for(let element of cricket.teams)
       {
           if(element.teamName === Tname || element.ranking === Trank)
           {
           TFound = true;
           break;
           }
       }
       if(TFound)
       {
            console.log("Team already there / Ranking already there");
       }
       else{
           temp  = addTeam(Tname,TOGround,Trank,Tcoach,Tplay11,Ttrophy);
           console.log(temp);
           cricket.teams.push(temp);
           console.log("Successfully added Team!!!")
       }
 }

 addWholeTeam('SouthAfrica','Johennesberg',3,addCoach('ab de villiers','dale steyn','jacques kallis'),
 addPlaying11(true,'ad de villiers',35,'360 Batsaman',[playerIndiAchieve('fastestODI100',2015),
 playerIndiAchieve('fastestT20150',2013)]),[]);
function addTrophy(tname,tyear,topponent){
   TrophyObj = {
    trophyName:null,
    year:null,
    opponent:null 
    }
  TrophyObj.trophyName = tname;
  TrophyObj.year = tyear;
  TrophyObj.opponent = topponent;
  return TrophyObj;
}
function addTeam(Tname,TOGround,Trank,Tcoach,Tplay11,Ttrophy){
     TeamObj = {
        teamName:null,
        ownGround:null,
        ranking:null,
        coach:{
            batCoach:null,
            bowlCoach:null,
            headCoach:null,
         },
        playing11:[],
         trophies:[]

     }
     TeamObj.teamName = Tname;
     TeamObj.ownGround = TOGround;
     TeamObj.ranking = Trank; 
     TeamObj.coach = Tcoach;
     TeamObj.playing11 = Tplay11;
     TeamObj.trophies = Ttrophy;
     return TeamObj;
}

function addCoach(batC,bowlC,headC){
    coach = {
        batCoach:null,
        bowlCoach:null,
        headCoach:null
    }
    coach.batCoach = batC;
    coach.bowlCoach = bowlC;
    coach.headCoach = headC;

    return coach;
}
function playerIndiAchieve(achiveName,AchivYear){
AchieveObj = {
    achievementName:null,
    year:null
}
AchieveObj.achievementName = achiveName;
AchieveObj.year = AchivYear;
return AchieveObj;
} 
