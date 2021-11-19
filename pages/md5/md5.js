export default () => {
    const content = document.createElement("section");
    content.classList.add('content');

    const stringHash = localStorage.getItem('stringHash');

    const stringUpperCase = String(stringHash).toUpperCase();
    const stringLowerCase = String(stringHash).toLowerCase();
    const stringProperCase = toProperCase(stringHash);
    const stringCapitalCase = String(stringHash).charAt(0).toUpperCase() + String(stringHash).slice(1);


    function toProperCase(string) {
        let stringSplit = String(string).split(' ');
        let stringProperCase = "";

        stringSplit.forEach(string => {
            let stringProper = String(string).charAt(0).toUpperCase() + String(string).slice(1);
            stringProperCase += stringProper + " ";
        });

        return stringProperCase;
    }

    content.innerHTML = `
    <div>
    <Label for="fieldStringMd5">MD5 Encode:</Label>
    <input name="fieldString" id="fieldString" type="text" readonly value="${stringHash}">
        <div id="encodeButtons">
            <input class="btn btnEncode" name="btnEncode" id="btnEncode" type="button" value="Codificar">
            <input class="btn btnDecode" name="btnDecode" id="btnDecode" type="button" value="Decodificar">
        </div>
    </div>

    <div>
        <Label for="fieldString">String:</Label>
        <input name="fieldString" id="fieldString" type="text" readonly value="${stringHash}">
    </div>

    <div>
        <Label for="fieldStringUC">String Upper Case:</Label>
        <input name="fieldString" id="fieldString" type="text" readonly value="${stringUpperCase}">
    </div>
    <div>
        <Label for="fieldStringLC">String Lower Case:</Label>
        <input name="fieldString" id="fieldString" type="text" readonly value="${stringLowerCase}">
    </div>
    <div>
        <Label for="fieldStringPC">String Proper Case:</Label>
        <input name="fieldString" id="fieldString" type="text" readonly value="${stringProperCase}">
    </div>
    <div>
        <Label for="fieldStringCC">String Capital Case:</Label>
        <input name="fieldString" id="fieldString" type="text" readonly value="${stringCapitalCase}">
    </div>`;

    return content;
}