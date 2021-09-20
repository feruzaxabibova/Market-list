//BOZORLIK RO`YXATI
var elShoppingForm = document.querySelector('.shopping-list-form');
var elShppingInput = elShoppingForm.querySelector('.shopping-list-input');
var elShoppingList = document.querySelector('.shopping-list');
var elResult = document.querySelector('.output');

var shoppingList = [];

elShoppingForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    var checkbox = function() {
        var elShppingInput = elShoppingForm.querySelector('.shopping-list-input').value.trim();
        var check = document.createElement('div');
        check.classList.add('form-check');
        var formLabel = document.createElement('label');
        formLabel.classList.add('form-check-label');
        var checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.classList.add('form-check-input');
        formLabel.textContent = elShppingInput;
        check.appendChild(checkBox);
        check.appendChild(formLabel);

        return elResult.appendChild(check);
    }

    checkbox();
    elShppingInput.value = '';
    elShppingInput.focus();

});
