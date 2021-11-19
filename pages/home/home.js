export default () => {
    const content = document.createElement("section");
    content.classList.add('content');

    content.innerHTML = `    <div>
    <Label for="fieldString">String Atual:</Label>
    <input name="fieldString" id="fieldString" type="text" readonly value="${localStorage.getItem('stringHash')}">
</div>`;

    return content;
}