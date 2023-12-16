let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");


btns.forEach(function(item){
    console.log(item)
    item.addEventListener('click', function(e){
        console.log(e.currentTarget);// which button among buttons is clicked on
        console.log(e.currentTarget.classList); // all the classlist these buttons has
        const styles = e.currentTarget.classList;
        if(styles.contains('increase')){
            count++;
        }
        else if(styles.contains('decrease')){
            count--;
        }
        else{
            count = 0;
        }
        if(count<0){
            value.style.color = 'red';
        }

        value.textContent = count;
    })
})