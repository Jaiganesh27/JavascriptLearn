cricket = {
    teams:[
        {
           teamName:"Australia",
           ownGround:"sydney",
           coach:{
               batCoach:"rickyponting",
               bowlCoach:"symonds",
               headCoach:"mike hussey",
            },
           playing11:[
               {
                 captain:true,
                 playerName : "SteveSmith",
                 age:"30",
                 playerType:"Batsman",
                 acheivements:[{
                     achievementName:"worldcup50",
                     year:"2015",
                 }]

               }
        ],
            trophies:[
                {trophyName:"worldcup50",year:"2015",opponent:"NewZealand"}
            ]

        },
        {
            teamName:"India",
            ownGround:"Chennai",
            coach:{
                batCoach:"SachinTendulkar",
                bowlCoach:"Nehra",
                headCoach:"MSDhoni",
             },
            playing11:[
                {
                  captain:true,
                  playerName : "Virat Kohli",
                  age:"31",
                  playerType:"Batsman",
                  acheivements:[{
                      achievementName:"worldcup50",
                      year:"2011",
                  }]
 
                }
         ],
             trophies:[
                 {trophyName:"worldcup50",year:"2011",opponent:"SriLanka"}
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
// show playing 11 of a teams
// show captains of all teams
// show youngest captain and older captain
// show most tryphy team
// show most achievable player in a one team
// show team name , own ground and head coach of all teams.
// show recent trophy of the one teams.
