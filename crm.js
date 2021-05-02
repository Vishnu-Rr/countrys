var app = new Vue({
       el:'#crm',
    data:{
    datas:"",
    countrys:[
      {
          title:"singapore",
          time: 'Asia/singapore',
      },
      {
        title:"america",
          time:'america/Los_Angeles',
      },
      {
          title:"tokyo",
          time:'Asia/Tokyo',
      },
      {
          title:"london",
          time:"Europe/london"
      },
      {
          title:"paris",
          time:"europe/Paris"
      },
      {
          title:"new York",
          time:"america/new_york"
      },
      {
          title:"dubai",
          time:"asia/dubai"
      },
      {
          title:"chicago",
          time:"America/Chicago"
      },
      {
          title:"mumbai",
          time:"asia/calcutta"
      },
      {
          title:"qatar",
          time:"Asia/Qatar",
      },
      {
          title:"bermuda",
          time:"Atlantic/Bermuda"
      },
   { 
          title:"australia",
          time:"Australia/Canberra"
      },
      {
          title:"brazil",
          time:"Brazil/East"
      },
      {
          title:"canada",
          time:"Canada/Eastern"
      },
      {
          title:"egypt",
          time:"Egypt",  
      }],
      out:'',
    },

    methods:{
        functions(datas){
    if(this.datas!=null){
        let times=this.countrys.find(function (a) {
            if (a.title == datas ) {
                return a
            }
        })
        var a =  new Date().toLocaleString('en-us',{timeZone:times.time});
this.out= a
    
    
}

        }
    }

})