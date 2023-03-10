console.log("person1:shows the ticket");
console.log("person2:shows the ticket");
//pesrson 3 is me, i dont have the ticket,i will make promise to the ticketchecker.
var promiseWifeBringingTicket=new Promise((resolve,reject)=>{
 // my wife is brining ticket,wait for some time.
                    setTimeout(()=>{
                                        resolve("ticket")

                    },3000)

})

var bringPopcorn=promiseWifeBringingTicket.then((t)=>{
                    console.log("husband:We have tickets,lets go to in")
                    console.log("wife:NO,i want popcorn")
                    return new Promise((resolve,reject)=>{
                                        resolve('popcorn purchase')
                    })
})

var bringButter=bringPopcorn.then((t)=>{
                    console.log("husband:Okay lets go to theater inside")
                    console.log("wife:I want butter ")
                    console.log("husband:Give a promise to wife,i will bring butter")
                    return new Promise((resolve,reject)=>{
                                        resolve("butter purchased")
                    })

})

var cooldrink=bringButter.then((t)=>{
                    console.log("husband:OKay anyhing want")
                    console.log("wife: Lastly,i want to drink cool drink")
                    console.log("husband: Gave promise to wife ,i will bring cooldrink")
                    return new Promise((resolve,reject)=>{
                                        resolve("coldrink purchased")
                    })
})
cooldrink.then((t)=>{
                    console.log("wife:I really like this cool drink")
})

//some people are there in line

console.log("person4:shows the ticket")
console.log("person5:shows the ticket")
