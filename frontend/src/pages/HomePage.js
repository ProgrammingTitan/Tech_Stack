import React from 'react';
import WidgetHeadline from '../components/WidgetHeadline';
  
class HomePage extends React.Component{
    

        constructor(props) {

            super(props);
            this.state = {
                data: {},
                carTech: [],
                widgetTech: [],
                headlineTech: [],
                gotTechData: false,
                widgetGlobal: [],
                headlineGlobal: [],
                gotGlobalData: false,
                widgetBusiness: [],
                headlineBusiness: [],
                gotBusinessData: [],
                logo: undefined,

                carTechFull:0, widgetTechFull:0, headlineTechFull:0, widgetGlobalFull:0, headlineGlobalFull:0, widgetBusinessFull:0, headlineBusinessFull : 0
            };
        }
        
        async componentDidMount() {
             
                const response = await fetch("https://newscatcher.p.rapidapi.com/v1/latest_headlines?&lang=en&media=True", {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "newscatcher.p.rapidapi.com",
                        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY
                    }
                })

                const json = await response.json();
                console.log(json);

              
            this.setState({
                data: json.articles ,
                
            });
            console.log(this.state.data);


            this.state.data.map((child, index) => {
            //    Tech Data
                if((child.topic === "tech" || child.topic==="science") && (child.media !== null) && (this.state.carTechFull < 5))
                {
                    
                    this.state.carTech.push(child);
                    this.state.carTechFull ++;
                }
                if((child.topic == 'tech' || child.topic==="science" ) && (child.media !==null) && this.state.widgetTechFull < 4)
                {
                    
                    this.state.widgetTech.push(child);
                    this.state.widgetTechFull++;
                }
                else if((child.topic == 'tech' || child.topic==="science") && this.state.headlineTechFull < 10)
                {
                    this.state.headlineTech.push(child)
                    this.state.headlineTechFull++;
                }

            // Global Data
                else if((child.topic == 'news' || child.topic==="world" ) && (child.media !==null) && this.state.widgetGlobalFull < 4)
                {
                    
                    this.state.widgetGlobal.push(child);
                    this.state.widgetGlobalFull++;
                }
                else if((child.topic == 'news' || child.topic==="world") && this.state.headlineGlobalFull < 10)
                {
                    this.state.headlineGlobal.push(child)
                    this.state.headlineGlobalFull++;
                }

            // Business Data
                else if((child.topic === "finance" || child.topic==="business" || child.topic==="economics" || child.topic==="travel" || child.topic == 'news') && (child.media !==null) && this.state.widgetBusinessFull < 4)
                {
                    
                    this.state.widgetBusiness.push(child);
                    this.state.widgetBusinessFull++;
                }
                else if((child.topic === "finance" || child.topic==="business" || child.topic==="economics" || child.topic==="travel" || child.topic == 'news') && this.state.headlineBusinessFull < 10)
                {
                    this.state.headlineBusiness.push(child)
                    this.state.headlineBusinessFull++;
                }

                
            })
            
            this.setState({
                carTech: this.state.carTech,
                widgetTech: this.state.widgetTech,
                headlineTech: this.state.headlineTech,
                gotTechData: false,
                widgetGlobal: this.state.widgetGlobal,
                headlineGlobal: this.state.headlineGlobal,
                gotGlobalData: false,
                widgetBusiness: this.state.widgetBusiness,
                headlineBusiness: this.state.headlineBusiness,
                gotBusinessData: false,
            });

            console.log(this.state.gotTechData);
                

            const response2 = await fetch("https://www.reddit.com/r/technology/.json")

            const json2 = await response2.json();
            console.log(json2);
            json2.data.children.map((child, index) => {
                console.log(child.data.preview);
                if(child.data.thumbnail){
                    
                let obj = {
                    title: child.data.title,
                    media: child.data.thumbnail,
                    link: child.data.url,
                    summary: ""
                }
            

                 //    Tech Data
                 if( (this.state.carTechFull < 5))
                 {
                     
                     this.state.carTech.push(obj);
                     this.state.carTechFull ++;
                 }
                 if( this.state.widgetTechFull < 4)
                 {
                     
                     this.state.widgetTech.push(obj);
                     this.state.widgetTechFull++;
                 }
                 else if( this.state.headlineTechFull < 10)
                 {
                     this.state.headlineTech.push(obj)
                     this.state.headlineTechFull++;
                 }
            
        }
            })

            this.setState({
                carTech: this.state.carTech,
                widgetTech: this.state.widgetTech,
                headlineTech: this.state.headlineTech,
                gotTechData: true,
                widgetGlobal: this.state.widgetGlobal,
                headlineGlobal: this.state.headlineGlobal,
                gotGlobalData: true,
                widgetBusiness: this.state.widgetBusiness,
                headlineBusiness: this.state.headlineBusiness,
                gotBusinessData: true,
            });

                }

                
    render(){

        return(
            
            <div>

{this.state.gotTechData ?
            <WidgetHeadline 
                section = "Tech"
                children = {this.state.widgetTech}
                headlines = {this.state.headlineTech}
                
            />
            :
            <p>loading</p>
                }
                
                {this.state.widgetGlobal.length >0 ?
            <WidgetHeadline 
                section = "Global"
                children = {this.state.widgetGlobal}
                headlines = {this.state.headlineGlobal}
                
            />
            :
            <p>loading</p>
                }

    {this.state.widgetBusiness.length > 0 ?
            <WidgetHeadline 
                section = "Business"
                children = {this.state.widgetBusiness}
                headlines = {this.state.headlineBusiness}
                
            />
            :
            <p>loading</p>
                }
            </div>
        );
    }


}

export default HomePage;