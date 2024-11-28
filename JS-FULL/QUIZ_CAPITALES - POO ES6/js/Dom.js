// Classe utils
class Dom {

    static getDomElement(selection) {
        return document.querySelector(selection);
    }

    static triggerEvent(elemHTML, eventType, functionToBeCalled) {
        elemHTML.addEventListener(eventType, functionToBeCalled);
    }

    static modifyText(elemHTML, text) {
        elemHTML.textContent = text;
    }

    static modifyHtml(elemHTML, html) {
        elemHTML.innerHTML = html;
    }

    static toggleClass(elemHTML, classToToggle, action) {
        elemHTML.classList[action](classToToggle);
    }

    static addResponseToTable(country, answer, isCorrect) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${country}</td>
            <td>${answer}</td>
            <td>${isCorrect}</td>
        `;
        responseTable.appendChild(row);
    }

}

export default Dom