new Vue({
    el: '#events',
    data: {
            boxOne: '',
            user: '',
            isButton: true,
            inputColor: '',
    },
    methods: {
         set(event) {
            this.boxOne = event.target.value;
            if(this.boxOne === 'user1')
            {
                this.user = 'firstcolor';
            }
            else if(this.boxOne === 'user2') 
            {
                this.user = 'secondcolor';
            }
            else {
              return this.user = ''
            }
        },
         toggle(){
            this.isButton = !this.isButton
         },
         color(event){
           this.inputColor = event.target.value
           
           if(this.inputColor === 'blue'){
             this.inputColor = this.inputColor
           } else if(this.inputColor === 'lime'){
             this.inputColor = this.inputColor
           } else if(this.inputColor === 'grey'){
             this.inputColor = this.inputColor
           } else{
             this.inputColor = ''
           }
         }
    
     }
});