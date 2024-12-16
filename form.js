let initialSubmit = false;
    function submitClicked(event){
        event.preventDefault();
        if(checkInput()){
            initialSubmit = true;
            showResult();
        }
        else{
            document.getElementById("totali").value = "";
        }
    }

    function valueChanged(){
        if(initialSubmit && checkInput()){
            showResult();
        }
        else{
            document.getElementById("totali").value = "";
        }
    }

    function checkInput(){
        let boolean = true;

        const emri = document.getElementById("emri").value;
        if (emri === "") {
            document.getElementById("errorEmri").textContent = "Emri i nevojitur";
            boolean = false;
        } else {
            document.getElementById("errorEmri").textContent = "";
        }

        const lidhja = document.querySelector('input[name="lidhja"]:checked');
        if(!lidhja){
            document.getElementById("errorLidhja").textContent = "Lidhja e nevojitur";
            boolean = false;
        } else {
            document.getElementById("errorLidhja").textContent = "";
        }

        const letra = document.getElementById("letra").selectedIndex
        if( letra == 0){
            document.getElementById("errorLetra").textContent = "Tipi i letres i nevojitur";
            boolean = false;
        }
        else {
            document.getElementById("errorLetra").textContent = "";
        }

        return boolean;
    }

    function showResult(){
        // if(initialSubmit){
            const lidhjaThjesht = document.getElementById("lidhjaThjesht").checked;
            const lidhjaPlastifikuar = document.getElementById("lidhjaPlastifikuar").checked;
            const lidhjaSpeciale = document.getElementById("lidhjaSpeciale").checked;
            const letra = document.getElementById("letra").value;
            const checkNgjyra = document.getElementById("checkNgjyra").checked;
            const checkDedikimin = document.getElementById("checkDedikimin").checked;
            let totali = 0;

            if(lidhjaThjesht){
                totali = 1000;
            }
            if(lidhjaPlastifikuar){
                totali = 1500;
            }
            if(lidhjaSpeciale){
                totali = 2000;
            }

            totali += parseInt(letra);

            if (checkNgjyra) {
                totali += 500;
            }
            if (checkDedikimin) {
                totali += 1000;
            }

            document.getElementById("totali").value = totali+" L";
        // }
    }

    document.getElementById("llogarit").addEventListener("click", submitClicked);

    document.getElementById("emri").addEventListener("change", valueChanged);
    document.getElementById("lidhjaThjesht").addEventListener("change", valueChanged);
    document.getElementById("lidhjaPlastifikuar").addEventListener("change", valueChanged);
    document.getElementById("lidhjaSpeciale").addEventListener("change", valueChanged);
    document.getElementById("letra").addEventListener("change", valueChanged);
    document.getElementById("checkNgjyra").addEventListener("change", valueChanged);
    document.getElementById("checkDedikimin").addEventListener("change", valueChanged);