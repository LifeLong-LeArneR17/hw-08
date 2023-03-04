const form = document.querySelector('.feedback-form');
const userInfo = {};

const onContactFormFieldChange = event => {
    event.preventDefault()
    const { target } = event
    const fieldValue = target.value;
    const fieldName = target.name;
    userInfo[fieldName] = fieldValue;
    localStorage.setItem("feedback-form-state", JSON.stringify(userInfo))
   
}

const onContactFormSubmit = event => {
    event.preventDefault();
    form.reset();
    const savedData = localStorage.getItem("feedback-form-state");
    const userData = JSON.parse(savedData);
    console.log(userData);
    if (userData === undefined) {
        return;
    }
    localStorage.removeItem('feedback-form-state');
}


form.addEventListener('input', onContactFormFieldChange)
form.addEventListener('submit', onContactFormSubmit)







