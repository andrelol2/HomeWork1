function ArrayChallenge(arr){
    let wrongNum = [];
    for (let i = 0; i < arr.length; i++) {
        let reversedPair = [arr[i], arr[i + 1]].reverse();
        let bool = true;
        arr.splice(i, 2);

        for (let j = 0; j < arr.length; j++) {
            if(arr[j] === reversedPair[0] && arr[j + 1] === reversedPair[1]) {
                arr.splice(j, 2);
                bool = false;
            }
        }

        if( bool ) {
            wrongNum.push(reversedPair.reverse())
        }


        i--;
    }
    let resultVal = document.getElementById("myResult");

    if(wrongNum.length === 0) {
        resultVal.value = 'yes'
    } else {
        resultVal.value = wrongNum;
    }

}

function getInputValue(){
    var inputVal = document.getElementById("myInput").value;
    ArrayChallenge(inputVal.split(','));
}