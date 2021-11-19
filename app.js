new Vue({
    el: '#app',

    data() {
        return {
            courses: [],
            title: '',
            time: null
        }
    },

    computed: {
        totalTime() {
            var totalTime = 0;
            //recorre todo el array y va sumando el tiempo por cada curso
            for (i = 0; i < this.courses.length; i++) {
                //se convierte en int porque sino solo agrega los numeros en cadena
                totalTime = parseInt(totalTime + parseInt(this.courses[i].time));
            }
            return totalTime
        }
    },

    methods: {
        addCourse() {

            //se guardan los valores ingresados en un objeto
            let newCourse = {
                'title': this.title,
                'time': this.time
            };
            //se inserta en el array en la ultima posicion el objeto creado
            this.courses.push(newCourse);
            //se dejan en blanco los imputs
            this.time = null;
            this.title = '';

        }
    }
})