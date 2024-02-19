function hideElementId(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}

function totalCost(id, value){
    const totalCost = document.getElementById(id).innerText;

        const convertedTotalCost = parseInt(totalCost);
        const sum = convertedTotalCost + parseInt(value);
        setInnerText(id, sum);
}

function grandTotal(id, value){
    const grandTotal = document.getElementById(id).innerText;
        const convertedGrandTotal = parseInt(grandTotal);

        const sum2 = convertedGrandTotal + parseInt(value);

        setInnerText(id, sum2);
}