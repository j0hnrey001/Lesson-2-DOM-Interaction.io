new Vue({
    el: '.events',

    data:{
        output1: '',
        output2: ''
    },
    methods:{
        ShowAlert()
        {
            alert('The Alert Was Pop-up');
        },
        setoutput1(events){
            this.output1=event.target.value
        },
        setoutput2(events){
            this.output2=event.target.value
        },

    },
})