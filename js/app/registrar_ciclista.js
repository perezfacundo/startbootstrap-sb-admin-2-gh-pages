import { saveCyclist } from './firebase.js'

const form = document.getElementById('form')

const inputFirstName = document.getElementById('inputFirstName')
const inputLastName = document.getElementById('inputLastName')
const inputEmail = document.getElementById('inputEmail')
const inputBirthDate = document.getElementById('inputBirthDate')
const inputCategory = document.getElementById('inputCategory')

let messageFirstName = document.getElementById('errorFirstName')
let messageLastName = document.getElementById('errorLastName')
let messageEmail = document.getElementById('errorEmail')
let messageBirthDate = document.getElementById('errorBirthDate')
let messageCategory = document.getElementById('errorCategory')

const patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

inputFirstName.addEventListener('input', function () {
    if (inputFirstName.value.trim() === '') {
        //Remover estilos de exito
        inputFirstName.classList.remove('border-success')
        messageFirstName.classList.remove('text-success')

        //Aplicar estilos de error
        inputFirstName.classList.add('border-danger')
        messageFirstName.textContent = 'Por favor, ingresá tu nombre'
        messageFirstName.classList.add('text-danger')
    } else {
        //Remover estilos de error
        inputFirstName.classList.remove('border-danger')
        messageFirstName.classList.remove('text-danger')

        //Aplicar estilos de exito
        messageFirstName.textContent = 'Espectacular !'
        inputFirstName.classList.add('border-success')
        messageFirstName.classList.add('text-success')
    }
})

inputLastName.addEventListener('input', function () {
    if (inputLastName.value.trim() === '') {
        //Remover estilos de exito
        inputLastName.classList.remove('border-success')
        messageLastName.classList.remove('text-success')

        //Aplicar estilos de error
        inputLastName.classList.add('border-danger')
        messageLastName.textContent = 'Por favor, ingresá tu nombre'
        messageLastName.classList.add('text-danger')
    } else {
        //Remover estilos de error
        inputLastName.classList.remove('border-danger')
        messageLastName.classList.remove('text-danger')

        //Aplicar estilos de exito
        messageLastName.textContent = 'Espectacular!'
        inputLastName.classList.add('border-success')
        messageLastName.classList.add('text-success')
    }
})

inputEmail.addEventListener('input', function () {
    if (!patternEmail.test(inputEmail.value)) {
        //Remover estilos de exito
        inputEmail.classList.remove('border-success')
        messageEmail.classList.remove('text-success')

        //Aplicar estilos de error
        inputEmail.classList.add('border-danger')
        messageEmail.textContent = 'Por favor, ingresá tu correo electronico válido'
        messageEmail.classList.add('text-danger')
    } else {
        //Remover estilos de error
        inputEmail.classList.remove('border-danger')
        messageEmail.classList.remove('text-danger')

        //Aplicar estilos de exito
        messageEmail.textContent = 'Así está bien!'
        inputEmail.classList.add('border-success')
        messageEmail.classList.add('text-success')
    }
})

inputBirthDate.addEventListener('input', function () {
    // const birthDate = document.getElementById('inputBirthDate')
    // const hoy = new Date()
    // console.log(`nacimiento: ${birthDate}, hoy es: ${hoy}`)
    // let edad = hoy.getFullYear() - birthDate.getFullYear()
    // let mes = hoy.getMonth() - birthDate.getMonth()

    // console.log(`edad ${edad}, mes ${mes}`)
    // if(mes < 0 || (mes === 0 && hoy.getDate() < birthDate.getDate())){
    //     edad--
    // }

    // if(edad < 18) {
    //     //Remover estilos de exito
    //     inputBirthDate.classList.remove('border-success')
    //     messageBirthDate.classList.remove('text-success')

    //     //Aplicar estilos de error
    //     inputBirthDate.classList.add('border-danger')
    //     messageBirthDate.textContent = 'El corredor no tiene la edad necesaria. Debe tener 18 años cumplidos.'
    //     messageBirthDate.classList.add('text-danger')
    // } else {
    //     //Remover estilos de error
    //     inputBirthDate.classList.remove('border-danger')
    //     messageBirthDate.classList.remove('text-danger')

    //     //Aplicar estilos de exito
    //     messageBirthDate.textContent = 'Así está bien!'
    //     inputBirthDate.classList.add('border-success')
    //     messageBirthDate.classList.add('text-success')
    // }
})

inputCategory.addEventListener('input', function () {
    if (inputCategory.value.trim() === '') {
        //Remover estilos de exito
        inputCategory.classList.remove('border-success')
        messageCategory.classList.remove('text-success')

        //Aplicar estilos de error
        inputCategory.classList.add('border-danger')
        messageCategory.textContent = 'Por favor, ingresá tu nombre'
        messageCategory.classList.add('text-danger')
    } else {
        //Remover estilos de error
        inputCategory.classList.remove('border-danger')
        messageCategory.classList.remove('text-danger')

        //Aplicar estilos de exito
        messageCategory.textContent = 'Perfecto!'
        inputCategory.classList.add('border-success')
        messageCategory.classList.add('text-success')
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    try {
        saveCyclist(inputFirstName.value, inputLastName.value, inputEmail.value, inputBirthDate.value, inputCategory.value)
    } catch (error) {
        console.log(error)
    }
})