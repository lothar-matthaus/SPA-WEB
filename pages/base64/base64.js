export default () => {
    const content = document.createElement("section");
    content.classList.add('content');

    content.innerHTML = `<div id="md5Content">
    <label for="nonCodeStingField ">String Base 64</label>
    <input type="text" readonly></input>
 </div>`;

    return content;
}